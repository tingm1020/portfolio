
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
                <div className="KvContainer">
                    <div className={`KvBlock KvBlockCenterW1100 ${styleProject.KvSpc}`}>
                        <h2 className="TxtH2">The Archive.</h2>
                        <p className="TxtDec spcBlockW60">從2018年開始，走過銀行、速食、汽車到議題行銷，多領域專案一一收錄其中</p>
                    </div>
                </div>
                <div 
                    className="PageContainer"
                    ref={el => sectionRefs.current['projectFeatured'] = el}
                >
                    <div className="blockW90">
                        <h4>projectFeatured</h4>

                    </div>
                </div>

                <div 
                    className="PageContainer"
                    ref={el => sectionRefs.current['projectOverview'] = el}
                >
                    <div className="blockW90">
                        <h4>projectOverview</h4>
                    </div>
                </div>
                <ProjectList />
                {/* <FooterComponent variant="variant1" /> */}
            </div>
            
        </div>
    )
}

export default ProjectPage;