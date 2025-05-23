import React from "react";
import stylesFooter from '../assets/styles/Footer.module.scss';

const FooterVariant1 = () => {
    return (
        <div className={stylesFooter.Footer_perbox}>
            <div className="block_90">
                <div className={stylesFooter.menu_posTop}>
                    <div className={stylesFooter.menu_spc_20}>
                        <div className={stylesFooter.menu_url_title}>
                            <div className={stylesFooter.menu_url_main}>MENU</div>
                        </div>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menu_link_btn}>Project</a>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menu_link_btn}>Github</a>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menu_link_btn}>Highlights</a>
                    </div>
                    <div className={stylesFooter.menu_spc_20}>
                        <div className={stylesFooter.menu_url_title}>
                        <div className={stylesFooter.menu_url_main}></div>
                        </div>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menu_link_btn}>UI Kit</a>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menu_link_btn}>Experiments</a>
                    </div>
                    <div className={stylesFooter.menu_spc_50}>
                        <div className={stylesFooter.menu_url_title}>
                            <div className={stylesFooter.menu_url_main}>LATEST ARTICLES</div>
                        </div>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menu_link_event}>
                            <p>Menu選單大集合！結合視覺元素的延伸創作</p>
                            <span>UI Kit</span>
                        </a>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menu_link_event}>
                            <p>主視覺進場動畫的構思：結合loading的svg及animate</p>
                            <span>Animation</span>
                        </a>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menu_link_more}>
                            <p>More Articles</p>
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FooterComponent = ({ variant }) => {
    const renderVariant = () => {
        switch (variant) {
            case "variant1": 
                return <FooterVariant1 />;
            default:
                return <FooterVariant1 />;
        }
    };
    return (
        <div className={stylesFooter.Footer_container}>
            {renderVariant()}
        </div>
    );
};

export default FooterComponent;