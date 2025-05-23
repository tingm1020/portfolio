import React, {useEffect, useState} from "react";
import Image from "next/image";
import stylesPage from '../../../assets/styles/Page.module.scss';
import MarqueeComponent from "../marquee/marqueeComponent";
import RadioComponent from "../radio/radioComponent";


const PageComponent = ({ variant }) => {
    const [selectedImage1, setSelectImage1] = useState("https://fakeimg.pl/1600x1600/2b2b29/e1dcd6/?text=slide1");
    const [selectedImage2, setSelectImage2] = useState("https://fakeimg.pl/1600x1600/5a5a5a/cccccc/?text=slide4");
    const [selectedImage3, setSelectImage3] = useState("https://fakeimg.pl/1600x1600/f4f4f4/000000/?text=slide7");
    const [fadeIn1, setFadeIn1] = useState(false);
    const [fadeIn2, setFadeIn2] = useState(false);
    const [fadeIn3, setFadeIn3] = useState(false);

    useEffect(() => {
        setFadeIn1(true);
        const timer1 = setTimeout(() => setFadeIn1(false), 500);
        return () => clearTimeout(timer1);
    }, [selectedImage1]);

    useEffect(() => {
        setFadeIn2(true);
        const timer2 = setTimeout(() => setFadeIn2(false), 500);
        return () => clearTimeout(timer2);
    }, [selectedImage2]);

    useEffect(() => {
        setFadeIn3(true);
        const timer3 = setTimeout(() => setFadeIn3(false), 500);
        return () => clearTimeout(timer3);   
    }, [selectedImage3]);
   

    const handleRadioChange1 = (event) =>{
        const { value } = event.target;
        let imageUrl;
        switch (value) {
            case 'image1':
                imageUrl = 'https://fakeimg.pl/1600x1600/2b2b29/e1dcd6/?text=slide1';
                break;
            case 'image2':
                imageUrl = 'https://fakeimg.pl/1600x1600/5a5a5a/ffffff/?text=slide2';
                break;
            case 'image3':
                imageUrl = 'https://fakeimg.pl/1600x1600/3b3b3b/cccccc/?text=slide3';
                break;
            default:
                imageUrl = 'https://fakeimg.pl/1600x1600/2b2b29/e1dcd6/?text=slide1';
        }
        setSelectImage1(imageUrl);
    };

    const handleRadioChange2 = (event) => {
        const { value } = event.target;
        let imageUrl;
        switch (value) {
            case 'image4':
                imageUrl = 'https://fakeimg.pl/1600x1600/5a5a5a/cccccc/?text=slide4';
                break;
            case 'image5':
                imageUrl = 'https://fakeimg.pl/1600x1600/5a5a5a/ffffff/?text=slide5';
                break;
            case 'image6':
                imageUrl = 'https://fakeimg.pl/1600x1600/3b3b3b/cccccc/?text=slide6';
                break;
            default:
                imageUrl = 'https://fakeimg.pl/1600x1600/5a5a5a/ffffff/?text=slide4';
        }
        setSelectImage2(imageUrl);
    }

    const handleRadioChange3 = (event) => {
        const { value } = event.target;
        let imageUrl;
        switch (value) {
            case 'image7':
                imageUrl = 'https://fakeimg.pl/1600x1600/b18c67/2b2b29/?text=slide7';
                break;
            case 'image8':
                imageUrl = 'https://fakeimg.pl/1600x1600/ccbfb7/2b2b29/?text=slide8';
                break;
            case 'image9':
                imageUrl = 'https://fakeimg.pl/1600x1600/2b2b29/ccbfb7/?text=slide9';
                break;
            default:
                imageUrl = 'https://fakeimg.pl/1600x1600/b18c67/2b2b29/?text=slide7';
        }
        setSelectImage3(imageUrl);
    }
    
    const PageVariant1 = () => {
        return (
            <div className={stylesPage.Page_sticky}>
                <div className={stylesPage.Page_sticky_wrapper}>
                    <div className={stylesPage.Page_sticky_content}>
                        <div className={stylesPage.Page_sticky_section}>
                            <div className={stylesPage.Page_sticky_wrapBox}>
                                <div className={`${stylesPage.Page_sticky_wrap_50} ${stylesPage.Page_sticky_wrap_style1_left}`}>
                                    <div className={stylesPage.Txt_box}>
                                        <div className={`Txt_h3 ${stylesPage.Page_sticky_txt_h3}`}>Web & App</div>
                                        <div className="Txt_dec">Fully branded ordering with innovative guest engagement features to grow loyalty and increase sales.</div>
                                        <button className="Btn_single_page">
                                            <span className="Btn_single_page_non">Learn more about ordering</span>
                                            <span className="Btn_single_page_hover">
                                                <MarqueeComponent variant="variant1" />
                                            </span>
                                        </button>
                                        <RadioComponent 
                                            onChange={handleRadioChange1}
                                            options={[
                                                { value: 'image1', label: 'Web & App Ordering'},
                                                { value: 'image2', label: 'Beautiful Design'},
                                                { value: 'image3', label: 'Branded Guest Experience'}
                                            ]} 
                                            defaultValue="image1"
                                        />
                                    </div>
                                </div>
                                <div className={`${stylesPage.Page_sticky_wrap_50} ${stylesPage.Page_sticky_wrap_style2_right}`}>
                                    <Image 
                                        src={selectedImage1} 
                                        alt="Selected" 
                                        className={fadeIn1 ? stylesPage.fadeIn : ''}
                                        width={1600}
                                        height={1600}
                                    />
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className={`${stylesPage.Page_sticky_section} ${stylesPage.Page_sticky_section_even}`}>
                            <div className={stylesPage.Page_sticky_wrapBox}>
                                <div className={`${stylesPage.Page_sticky_wrap_50} ${stylesPage.Page_sticky_wrap_style2_left}`}>
                                <Image 
                                    src={selectedImage2} 
                                    alt="Selected" 
                                    className={fadeIn2 ? stylesPage.fadeIn : ''}
                                    width={1600}
                                    height={1600}
                                />
                                </div>
                                <div className={`${stylesPage.Page_sticky_wrap_50} ${stylesPage.Page_sticky_wrap_style1_right}`}>
                                    <div className={stylesPage.Txt_box}>
                                        <div className="Txt_h3">Web & App</div>
                                        <div className="Txt_dec">Fully branded ordering with innovative guest engagement features to grow loyalty and increase sales.</div>
                                        <button className="Btn_single_page">
                                            <span className="Btn_single_page_non">Learn more about ordering</span>
                                            <span className="Btn_single_page_hover">
                                                <MarqueeComponent variant="variant1" />
                                            </span>
                                        </button>
                                        <RadioComponent
                                            onChange={handleRadioChange2}
                                            options={[
                                                {value: 'image4', label: 'Enhanced Security'},
                                                {value: 'image5', label: 'Scalability'},
                                                {value: 'image6', label: 'Customer Support'}
                                            ]}
                                            defaultValue="image4"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                        <div className={stylesPage.Page_sticky_section}>  
                            <div className={stylesPage.Page_sticky_wrapBox}>
                                <div className={`${stylesPage.Page_sticky_wrap_50} ${stylesPage.Page_sticky_wrap_style1_left}`}>
                                    <div className={stylesPage.Txt_box}>
                                        <div className={`Txt_h3 ${stylesPage.Page_sticky_txt_h3}`}>Latest News</div>
                                        <div className="Txt_dec">Fully branded ordering with innovative guest engagement features to grow loyalty and increase sales.</div>
                                        <button className="Btn_single_page">
                                            <span className="Btn_single_page_non">Learn more about ordering</span>
                                            <span className="Btn_single_page_hover">
                                                <MarqueeComponent variant="variant1" />
                                            </span>
                                        </button>
                                        <RadioComponent 
                                            onChange={handleRadioChange3}
                                            options={[
                                                { value: 'image7', label: 'Latest News'},
                                                { value: 'image8', label: 'Collections'},
                                                { value: 'image9', label: 'Milestones'}
                                            ]} 
                                            defaultValue="image7"
                                        />
                                    </div>
                                </div>
                                <div className={`${stylesPage.Page_sticky_wrap_50} ${stylesPage.Page_sticky_wrap_style2_right}`}>
                                    <Image 
                                        src={selectedImage3} 
                                        alt="Selected" 
                                        className={fadeIn3 ? stylesPage.fadeIn : ''}
                                        width={1600}
                                        height={1600}
                                    />
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    const renderVariant = () => {
        switch (variant) {
            case "variant1":
                return (
                    <div className={stylesPage.Page_sticky}></div>
                );
            default:
                return <PageVariant1 />;
        }
    };
    return (
        <div className="Page_content">
            {renderVariant()}
        </div>
    );
};

export default PageComponent;