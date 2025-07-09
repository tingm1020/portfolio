
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ProjectList from "@/components/project/projectList";
import HeaderComponent from "../../src/components/Header";
import styleProject from "../../src/assets/styles/Project.module.scss"
import LoadComponent from "../../src/components/sub/load/loadComponent";
import FooterComponent from "../../src/components/Footer";
import MetaComponent from "../../src/components/Meta";
import { motion } from "framer-motion";

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

    const sectionAltData = [
        {
            img:{
                src:'https://placehold.co/900x600/ccbfb7/ffffff',
                // src:'/images/project/All001.jpg',
                alt:'placehold',
                width: 900,
                height: 600,
                // priority: true,
            },
            tag:'教育、專案',
            title: '遠見台灣最佳大學排行榜',
            btnAction: () => alert("建置中"),
            alignClass: 'SectionAltRight',
            widthClass: 'SectionAltW35',
            extraClass: '',
            viewport: { once: false, amount: 0.5}
        },
        {
            img:{
                src:'https://placehold.co/900x600/ccbfb7/ffffff',
                // src:'/images/project/All002.jpg',
                alt:'placehold',
                width: 900,
                height: 600,
                // priority: true,
            },
            tag:'歷年作品集',
            title: 'UI套件、專案',
            btnAction: () => alert("建置中"),
            alignClass: 'SectionAltLeft',
            widthClass: 'SectionAltW50',
            extraClass: styleProject.BlockOffsetTop,
            viewport: { once: false, amount: 0.3 }
        },
         {
            img:{
                src:'https://placehold.co/900x600/ccbfb7/ffffff',
                // src:'/images/project/All003.jpg',
                alt:'placehold',
                width: 900,
                height: 600,
                // priority: true,
            },
            tag:'專案',
            title: '錯誤日記簿',
            btnAction: () => alert("建置中"),
            alignClass: 'SectionAltRight',
            widthClass: 'SectionAltW60',
            extraClass: '',
            viewport: { once: false, amount: 0 }
        },
    ]
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
                    <div className="blockW80">
                        <div className="SectionAlt">
                            {sectionAltData.map((item,index) => (
                                <motion.div 
                                    className={`SectionAltBlock ${item.extraClass}`}
                                    key={index}
                                    initial={{ opacity: 0, y: 80 }}
                                    whileInView={{ opacity:1, y:0 }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    viewport={item.viewport}
                                >
                                    <div className={`SectionAltCont ${item.alignClass}`}>
                                        <div className={item.widthClass}>
                                            <Image
                                                src={item.img.src}
                                                // src="/images/project/All001.jpg"
                                                alt={item.img.alt}
                                                width={item.img.width}
                                                height={item.img.height}
                                                priority
                                            />
                                            <div className="SectionAltTxt">
                                                <div className="SectionAltTag">
                                                    <span className="SectionAltTagImg">
                                                        <Image 
                                                            src="/images/icon/section-icon1.svg" 
                                                            alt="section-icon"
                                                            width={50}
                                                            height={50}
                                                        />
                                                    </span>
                                                    {item.tag}
                                                </div>
                                                <div className={`TxtH5 SectionAltTitle`}>{item.title}</div>
                                            </div>
                                            <button 
                                                className={`BtnSingle BtnSingleSmallBlack ${styleProject.BtnSingle}`}
                                                onClick={item.btnAction}
                                            >
                                                more
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            
                          
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