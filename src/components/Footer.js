import { useEffect, useState } from 'react';
import stylesFooter from '../assets/styles/Footer.module.scss';

const FooterVariant1 = () => {
    return (
        <div className={stylesFooter.FooterPerbox}>
            <div className="blockW90">
                <div className={stylesFooter.menuPosTop}>
                    <div className={stylesFooter.menuSpcW20}>
                        <div className={stylesFooter.menuUrlTitle}>
                            <div className={stylesFooter.menuUrlMain}>MENU</div>
                        </div>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menuLinkBtn}>Project</a>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menuLinkBtn}>Github</a>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menuLinkBtn}>Highlights</a>
                    </div>
                    <div className={stylesFooter.menuSpcW20}>
                        <div className={stylesFooter.menuUrlTitle}>
                        <div className={stylesFooter.menuUrlMain}></div>
                        </div>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menuLinkBtn}>UI Kit</a>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menuLinkBtn}>Experiments</a>
                    </div>
                    <div className={stylesFooter.menuSpcW50}>
                        <div className={stylesFooter.menuUrlTitle}>
                            <div className={stylesFooter.menuUrlMain}>LATEST ARTICLES</div>
                        </div>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menuLinkEvent}>
                            <p>Menu選單大集合！結合視覺元素的延伸創作</p>
                            <span>UI Kit</span>
                        </a>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menuLinkEvent}>
                            <p>主視覺進場動畫的構思：結合loading的svg及animate</p>
                            <span>Animation</span>
                        </a>
                        <a href="https://github.com/tingm1020?tab=projects" target="_blank" className={stylesFooter.menuLinkMore}>
                            <p>More Articles</p>
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FooterVariant2 = () => {
    const [year, setYear] = useState('');
    
    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return(
        <div className={stylesFooter.FooterSinglebox}>
            <div className='blockW90'>
                <p className={stylesFooter.txtCopyright}>© {year} Riva Hsu. All rights reserved.</p>
            </div>
        </div>
    )
}

const FooterComponent = ({ variant }) => {
    const renderVariant = () => {
        switch (variant) {
            case "variant1": 
                return <FooterVariant1 />;
            case "variant2":
                return <FooterVariant2 />;
            default:
                return <FooterVariant1 />;
        }
    };
    return (
        <div className={stylesFooter.FooterContainer}>
            {renderVariant()}
        </div>
    );
};

export default FooterComponent;