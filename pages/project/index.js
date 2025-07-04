
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProjectList from "@/components/project/projectList";
import HeaderComponent from "../../src/components/Header";
import styleProject from "../../src/assets/styles/Project.module.scss"
import LoadComponent from "../../src/components/sub/load/loadComponent";
import FooterComponent from "../../src/components/Footer";
import MetaComponent from "../../src/components/Meta";

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

    const [isReady, setIsReady] = useState(false);
    const [hideLoading, setHideLoading] = useState(false);

    useEffect(() => {
        const handleLoad = () =>{
            setTimeout(() =>{
                setIsReady(true);
                setTimeout(() => setHideLoading(true), 600);
            }, 2000);
        };

        if(document.readyState === 'complete') handleLoad();
        else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load',handleLoad);
        }
    }, []);
    return (
        <>
            <MetaComponent title="Project Library｜Riva Hsu"/>
            {!hideLoading && (
                <LoadComponent variant="variant1" isFadingOut={isReady} />
            )}
            {isReady &&(
                <></>
            )}
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
                        <div className="SectionAlt">
                            <div className={`SectionAltBlock SectionAltBlockW30`}>
                                <div className="SectionAltImg">
                                    <Image
                                        src="/images/slide/swiper-spcBox-img1.jpg"
                                        // src="/images/project/All001.jpg"
                                        alt="Section-alt-img"
                                        width={450}
                                        height={200}
                                    />
                                </div>
                                <div className="SectionAltTag">教育、專案</div>
                                <div className="SectionAltTitle">遠見台灣最佳大學排行榜</div>
                                <button 
                                    className="BtnSingle BtnSingleSmallBlack"
                                    onClick={() => alert("建置中")}
                                >
                                    more
                                </button>
                            </div>
                            <div className={`SectionAltBlock SectionAltBlockReverse SectionAltBlockW50`}>
                                <div className="SectionAltImg">
                                    <Image
                                        src="/images/slide/swiper-spcBox-img1.jpg"
                                        // src="/images/project/All002.jpg"
                                        alt="Placeholder"
                                        width={450}
                                        height={200}
                                    />
                                </div>
                                <div className="SectionAltTag">歷年作品集</div>
                                <div className="SectionAltTitle">UI套件、專案</div>
                                <button
                                    className="BtnSingle BtnSingleSmallBlack"
                                    onClick={() => alert("建置中")}
                                >
                                    more
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div 
                    className="PageContainer"
                    ref={el => sectionRefs.current['projectOverview'] = el}
                >
                    <div className="blockW90">
                        <h4>projectOverview</h4>
                        <ProjectList />
                    </div>
                </div>

                
                <FooterComponent variant="variant1" />
            </div>
            
        </>
    )
}

export default ProjectPage;