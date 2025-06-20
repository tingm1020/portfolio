
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProjectList from "@/components/project/projectList";
import HeaderComponent from "../../src/components/Header";
import styleProject from "../../src/assets/styles/Project.module.scss"
import LoadComponent from "../../src/components/sub/load/loadComponent";
// import FooterComponent from "../../src/components/Footer";

const ProjectPage = () =>{
    const router = useRouter();

    useEffect(() => {
        if (router.asPath.includes("#")){
            const anchor = router.asPath.split("#")[1];
            const el = document.getElementById(anchor);
            if (el){
                el.scrollIntoView({ behavior: "smooth"});
            }
        }
    },[router.asPath]);
    return (
        <div>
            <div className={styleProject.wrapper}>
                <LoadComponent variant="variant1" />
                <HeaderComponent variant="variant2" />
                <h1>測試</h1>
                <ProjectList />
                {/* <FooterComponent variant="variant1" /> */}
            </div>
            <div id="projectFeatured"></div>
            <div id="projectOverview"></div>
        </div>
    )
}

export default ProjectPage;