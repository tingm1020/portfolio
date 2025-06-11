import { useState } from "react";
import Image from "next/image";
import stylesHeader from "../assets/styles/Header.module.scss";


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
        <div className={`${stylesHeader.Header_singleEquallyLine} ${stylesHeader.Header_style1}`}>
            <div className={stylesHeader.Header_style1_block}>
                <div className={stylesHeader.menu_posLeft}>
                    <a 
                        href="https://github.com/tingm1020?tab=projects" 
                        target="_blank" 
                        className={stylesHeader.menu_logo_img}
                    >
                        <Image 
                            src="/images/menu_logo.svg" 
                            alt="menu_logo"
                            width={50}
                            height={50}
                        />
                    </a>
                    <p className={stylesHeader.menu_logo_name}>R.</p>
                </div>
                <div className={stylesHeader.menu_PC}>
                    <div className={stylesHeader.menu_posCenter}>
                        <div className={stylesHeader.menu_block}>
                            <button
                                className={stylesHeader.menu_menuBtn}
                                onClick={() => scrollToPage("anchor1")}
                            >
                            專案介紹
                            </button>
                            <button
                                className={stylesHeader.menu_menuBtn}
                                onClick={() => scrollToPage("anchor2")}
                            >
                            技能專長
                            </button>
                            <button
                                className={stylesHeader.menu_menuBtn}
                                onClick={() => scrollToPage("anchor3")}
                            >
                            專案拆解
                            </button>
                            <button
                                className={stylesHeader.menu_menuBtn}
                                onClick={() => scrollToPage("anchor4")}
                            >
                            深入歷程
                            </button>
                        </div>
                    </div>
                    <div className={stylesHeader.menu_posRight}>
                        <button 
                            className={stylesHeader.menu_menuBtnSingle}
                            onClick={() =>{window.location.href = 'mailto:tingm1020@icloud.com'}}
                        >
                        Contact
                        </button>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className={`menu_MB ${isMenuOpen ? 'on': ''}`}>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="menu_MB_Btn"
                        aria-label="切換選單"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="clear"></div>
            </div>
            <div className={`menu_MB_Wrap ${isMenuOpen ? 'on' : ''} ${stylesHeader.menu_MB_Wrap_Black}`}>
                <div className={`${stylesHeader.menu_posCenter} ${stylesHeader.menu_MB_posCenter} ${stylesHeader.menu_MB_style1}`}>
                    <div className={stylesHeader.menu_MB_block}>
                        <button
                            className={stylesHeader.menu_menuBtn}
                            onClick={() => scrollToPage("anchor1")}
                        >
                        專案介紹
                        </button>
                        <button
                            className={stylesHeader.menu_menuBtn}
                            onClick={() => scrollToPage("anchor2")}
                        >
                        技能專長
                        </button>
                        <button
                            className={stylesHeader.menu_menuBtn}
                            onClick={() => scrollToPage("anchor3")}
                        >
                        專案拆解
                        </button>
                        <button
                            className={stylesHeader.menu_menuBtn}
                            onClick={() => scrollToPage("anchor4")}
                        >
                        深入歷程
                        </button>
                        <button
                            className={`${stylesHeader.menu_posBottom} ${stylesHeader.menu_menuBtnSingle}`}
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
    const [showSubmenu, setShowSubmenu] = useState(false);
    return (
        <div 
            onMouseEnter={() => setShowSubmenu(true)}
            onMouseLeave={() => setShowSubmenu(false)}
            className={stylesHeader.Header_style1}
        >
            <div className={stylesHeader.Header_style1_block}>
                <div className={stylesHeader.menu_posLeft}>
                    <a
                        href="https://github.com/tingm1020?tab=projects"
                        target="_blank"
                        className={stylesHeader.menu_logo_img}
                    >
                        <Image
                            src="/image/menu_logo.svg"
                            alt="menu_logo"
                            width={50}
                            height={50}
                        />
                    </a>
                    <p className={stylesHeader.menu_logo_name}>R.</p>
                </div>
                <div className={stylesHeader.menu_PC}>
                    <div className={stylesHeader.menu_posCenter}>
                        <div className={stylesHeader.menu_block}>
                            <button
                                className={stylesHeader.menu_menuBtn}
                                onMouseEnter={() => setHoveredBtn("intro")}
                                onMouseLeave={() => setHoveredBtn(null)}
                            >
                            深入歷程
                            {showSubmenu && 
                                <div className={stylesHeader.menu_hoverMenu}>
                                </div>
                            }
                            </button>
                        </div>
                    </div>
                </div>
                <button className={stylesHeader.menu_menuBtnSingle}></button>
                
            </div>
        
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
        <div className="Header_container">
            {renderVariant()}    
        </div>
    );
};
export default HeaderComponent;