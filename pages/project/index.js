import ProjectList from "@/components/project/projectList";
import HeaderComponent from "../../src/components/Header";
import styleProject from "../../src/assets/styles/Project.module.scss"
import LoadComponent from "../../src/components/sub/load/loadComponent";
// import FooterComponent from "../../src/components/Footer";

const ProjectPage = () =>{
    return (
        <div>
            <div className={styleProject.wrapper}>
                <LoadComponent variant="variant1" />
                <HeaderComponent variant="variant2" />
                <h1>測試</h1>
                <ProjectList />
                {/* <FooterComponent variant="variant1" /> */}
            </div>
            
        </div>
    )
}

export default ProjectPage;