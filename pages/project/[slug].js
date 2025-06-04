import { useRouter } from 'next/router';
import ProjectDetail from '@/components/project/projectDetail';

    export default function ProjectDetailPage() {
        const router = useRouter();
        const { slug } = router.query;

        // 模擬從資料庫抓資料
        const projectData = getProjectDataBySlug(slug);

    return <ProjectDetail data={projectData} />;
}