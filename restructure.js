const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');
const targetDir = path.join(__dirname, 'dist');

// Function to ensure a directory exists, creates it if not
const ensureDirExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

// Function to move a file, ensuring the destination directory exists
const moveFile = (src, dest) => {
    ensureDirExists(path.dirname(dest));
    fs.renameSync(src, dest);
};

// Function to traverse directories and move files
const traverseDirectory = (dir, baseDir = '') => {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        const relativePath = path.join(baseDir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            traverseDirectory(fullPath, relativePath);
        } else {
            let destDir = '';
            if (file.endsWith('.js')) {
                destDir = 'js';
            } else if (file.endsWith('.css')) {
                destDir = 'css';
            } else if (file.endsWith('.html')) {
                destDir = '';
            } else if (['.png', '.jpg', '.jpeg', '.gif'].some(ext => file.endsWith(ext))) {
                destDir = 'img';
            }

            const dest = path.join(targetDir, destDir, relativePath);
            moveFile(fullPath, dest);
        }
    });
};

// Start traversing and moving files
try {
    traverseDirectory(outDir);
    console.log('File restructuring complete.');
} catch (err) {
    console.error('Error traversing directory:', err);
}
