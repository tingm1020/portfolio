import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import stylesHeader from "../assets/styles/Header.module.scss";
import { AnimatePresence, motion } from "framer-motion";

const HeaderVariant1 = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuOpen = () => setIsMenuOpen(true);
    const menuClose = () => setIsMenuOpen(false);

    const scrollToPage = (id) => {
        menuClose();
        const target = document.getElementById(id);
        if (target) {
          const offsetTop = target.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
    };
    return(
        <div className={`${stylesHeader.HeaderSingleEquallyLine} ${stylesHeader.HeaderStyle1}`}>
            <div className={stylesHeader.HeaderStyle1Block}>
                <div className={stylesHeader.menuPosLeft}>
                    <a 
                        href="https://github.com/tingm1020?tab=projects" 
                        target="_blank" 
                        className={stylesHeader.menuLogoImg}
                    >
                        <Image 
                            src="/images/menu-logo.svg" 
                            alt="menu-logo"
                            width={50}
                            height={50}
                        />
                    </a>
                    <p className={stylesHeader.menuLogoName}>R.</p>
                </div>
                <div className={stylesHeader.menuPc}>
                    <div className={stylesHeader.menuPosCenter}>
                        <div className={stylesHeader.menuBlock}>
                            <button
                                className={stylesHeader.menuMenuBtn}
                                onClick={() => scrollToPage("anchor1")}
                            >
                            專案介紹
                            </button>
                            <button
                                className={stylesHeader.menuMenuBtn}
                                onClick={() => scrollToPage("anchor2")}
                            >
                            專案拆解
                            </button>
                            <button
                                className={stylesHeader.menuMenuBtn}
                                onClick={() => scrollToPage("anchor3")}
                            >
                            深入歷程
                            </button>
                        </div>
                    </div>
                    <div className={stylesHeader.menuPosRight}>
                        <button 
                            className={stylesHeader.menuMenuBtnSingle}
                            onClick={() =>{window.location.href = 'mailto:tingm1020@icloud.com'}}
                        >
                        Contact
                        </button>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className={`menuMb ${isMenuOpen ? 'on': ''}`}>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="menuMbBtn"
                        aria-label="切換選單"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="clear"></div>
            </div>
            <div className={`menuMbWrap ${isMenuOpen ? 'on' : ''} ${stylesHeader.menuMbWrapBlack}`}>
                <div className={`${stylesHeader.menuPosCenter} ${stylesHeader.menuMbPosCenter} ${stylesHeader.menuMbStyle1}`}>
                    <div className={stylesHeader.menuMbBlock}>
                        <button
                            className={stylesHeader.menuMenuBtn}
                            onClick={() => scrollToPage("anchor1")}
                        >
                        專案介紹
                        </button>
                        <button
                            className={stylesHeader.menuMenuBtn}
                            onClick={() => scrollToPage("anchor2")}
                        >
                        專案拆解
                        </button>
                        <button
                            className={stylesHeader.menuMenuBtn}
                            onClick={() => scrollToPage("anchor3")}
                        >
                        深入歷程
                        </button>
                        <button
                            className={`${stylesHeader.menuPosBottom} ${stylesHeader.menuMenuBtnSingle}`}
                            onClick={() => {
                                window.location.href = 'mailto:tingm1020@icloud.com'
                            }}
                        >
                        Contact    
                        </button>
                    </div>
                </div>
            </div>
          
        </div>
        
    )
};
const HeaderVariant2 = () =>{
    
    const router = useRouter();
    const handleNavClick = (item) => {
        if (item.page) {
            router.push({
                pathname: `${item.page}`,
                query: { section: item.id }, 
            },
            undefined,
            { shallow: true }
        );
        } else if (item,id) {
            const el = document.getElementById(item.id);
            if (el){
                el.scrollIntoView({ behavior: 'smooth', block: 'start'});
            }
        }
    };
    const [showSubmenu, setShowSubmenu] = useState(false);
    const hoverSectionIndex = [
        { id: "introProject", title: "近期專案介紹", content: "展示風格與實作邏輯", page: "/" },
        { id: "introPlugin", title: "專案拆解", content: "呈現開發流程與技術選擇", page: "/" },
        { id: "introProcess", title: "深入歷程", content: "聚焦挑戰與解法脈絡", page: "/" },
    ];
    const hoverSectionProject = [
        { id: "projectFeatured", title: "精選案例", content: "近期完成的代表作品", page: "/project" },
        { id: "projectOverview", title: "專案地圖", content: "快速搜尋與瀏覽歷年作品", page: "/project" },
    ];


    return (
        <div className={`${stylesHeader.HeaderSingleEquallyLine} ${stylesHeader.HeaderStyle1}`}>
            <div className={stylesHeader.HeaderStyle1Block}>
                <div className={stylesHeader.menuPosLeft}>
                    <a
                        href="https://github.com/tingm1020?tab=projects"
                        target="_blank"
                        className={stylesHeader.menuLogoImg}
                    >
                        <Image
                            src="/images/menu-logo.svg"
                            alt="menu-logo"
                            width={50}
                            height={50}
                        />
                    </a>
                    <p className={stylesHeader.menuLogoName}>R.</p>
                </div>
                <div className={stylesHeader.menuPc}>
                    <div className={stylesHeader.menuPosCenter}>
                        <div className={stylesHeader.menuBlock}>
                            <button 
                                className={stylesHeader.menuMenuBtn}
                                onMouseEnter={() => setShowSubmenu("intro")}
                            >
                            intro
                            </button>
                            <button 
                                className={stylesHeader.menuMenuBtn}
                                onMouseEnter={() => setShowSubmenu("project")}
                            >
                            project
                            </button>
                        </div>
                    </div>
                    <div className={stylesHeader.menuPosRight}>
                        <button
                            className={stylesHeader.menuMenuBtnSingle}
                            onClick={() =>{window.location.herf = 'mailto:tingm1020@icloud.com'}}
                        >
                        Contact
                        </button>
                    </div>
                    <div className="clear"></div>
                    
                </div>
                
            </div>
            <AnimatePresence mode="wait">
                {showSubmenu && (
                    <motion.div 
                        key="submenu"
                        className={stylesHeader.menuHoverCollectMenu}
                        initial={{ opacity:0, y:-50, x: '-50%'}}
                        animate={{ opacity:1, y:0, x:'-50%'}}
                        exit={{ opacity:0, y:-50, x: '-50%'}}
                        transition={{ duration: .3 }}
                        onMouseEnter={() => setShowSubmenu(showSubmenu)}
                        onMouseLeave={() => setShowSubmenu(null)}
                    >
                    {showSubmenu === "intro" &&  (
                        <div className={stylesHeader.menuHoverCollectMenuBlock}>
                            <div className={`${stylesHeader.menuHoverCollectMenuSection} ${stylesHeader.menuHoverCollectMenuSectionSingle100}`}>
                                {hoverSectionIndex.map((item, index) => (
                                    <div 
                                        className={stylesHeader.menuHoverCollectMenuSectionBox} 
                                        key={item.id}
                                        id={item.id}
                                        onClick={() => handleNavClick(item)}
                                    >
                                        <h4>
                                            {item.title}
                                            <span className={stylesHeader.menuMenuBtnArrow}></span>
                                        </h4>
                                        <p>{item.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {showSubmenu === "project" && (
                        <div className={stylesHeader.menuHoverCollectMenuBlock}>
                            <div className={`${stylesHeader.menuHoverCollectMenuSection} ${stylesHeader.menuHoverCollectMenuSectionSingle100}`}>
                                {hoverSectionProject.map((item, index) => (
                                    <div 
                                        className={stylesHeader.menuHoverCollectMenuSectionBox} 
                                        key={item.id}
                                        id={item.id}
                                        onClick={() => handleNavClick(item)}
                                    >
                                        <h4>
                                            {item.title}
                                            <span className={stylesHeader.menuMenuBtnArrow}></span>
                                        </h4>
                                        <p>{item.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    </motion.div>
                )}
            </AnimatePresence>
            
        </div>
        
    );
};

const HeaderComponent = ({ variant }) => {
    const renderVariant = () => {
        switch (variant) {
            case "variant1":
                return <HeaderVariant1 />;
            case "variant2":
                return <HeaderVariant2 />;
            default:
                return <HeaderVariant1 />;
        }
    };
    return (
        <div className="HeaderContainer">
            {renderVariant()}    
        </div>
    );
};
export default HeaderComponent;