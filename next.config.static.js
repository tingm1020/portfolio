const nextConfig = { 
  output: 'export', 
  images: { 
    unoptimized: true, 
    remotePatterns: [ 
      { 
        protocol: 'https', 
        hostname: 'placehold.co', 
        port: '', 
        pathname: '/**', 
      }, 
    ], 
  }, 
  assetPrefix: './', 
}; 
module.exports = nextConfig; 

 