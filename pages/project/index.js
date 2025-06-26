
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import ProjectList from "@/components/project/projectList";
import HeaderComponent from "../../src/components/Header";
import styleProject from "../../src/assets/styles/Project.module.scss"
import LoadComponent from "../../src/components/sub/load/loadComponent";
// import FooterComponent from "../../src/components/Footer";

const ProjectPage = () =>{
    const router = useRouter();
    const sectionRefs = useRef({});

    useEffect(() => {
    const section = router.query.section;
    const el = sectionRefs.current[section];
    if (section && el) {
        const top = el.getBoundingClientRect().top + window.scrollY; // -80 是保留空間，可依需求調整
        window.scrollTo({ top, behavior: 'smooth' });
    }
    }, [router.query.section]);

    return (
        <div>
            <div className={styleProject.wrapper}>
                <LoadComponent variant="variant1" />
                <HeaderComponent variant="variant2" />
                <h1>測試</h1>
                <ProjectList />
                {/* <FooterComponent variant="variant1" /> */}
            </div>
            <div 
                className="Page_container"
                ref={el => sectionRefs.current['projectFeatured'] = el}
            >
                <div className="block_90">
                    <h4>projectFeatured</h4>
                </div>
            </div>
            <div 
                className="Page_container"
                ref={el => sectionRefs.current['projectOverview'] = el}
            >
                <div className="block_90">
                    <h4>projectOverview</h4>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage;