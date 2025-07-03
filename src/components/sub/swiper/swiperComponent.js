import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from "next/image";
import stylesSwiper from '../../../assets/styles/Swiper.module.scss';
import { motion } from "framer-motion";


const SwiperVariant1 = () =>{
    return (
        <div className={stylesSwiper.SwiperSingle}>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                effect="fade"
                loop={true}
                grabCursor={true}
                speed={1000}
                slidesPerView={1}
                spaceBetween={50}
                pagination={{ clickable: true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Image 
                        src="https://fakeimg.pl/1980x1290/282828/e1dcd6" 
                        alt="Fake Image"
                        width={1980}
                        height={1290}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        src="https://fakeimg.pl/1980x1290/282828/e1dcd6" 
                        alt="Fake Image"
                        width={1980}
                        height={1290}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image 
                        src="https://fakeimg.pl/1980x1290/282828/e1dcd6" 
                        alt="Fake Image"
                        width={1980}
                        height={1290}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
        
    );
};

const SwiperVariant2 = () =>{
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [hoveredSlide, setHoveredSlide] = useState(null);
    const [animatingOutSlide, setAnimatingOutSlide] = useState(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const handleMouseEnter = (id) => {
        setHoveredSlide(id);
        setAnimatingOutSlide(null);
    };

    const handleMouseLeave = (id) =>{
        setHoveredSlide(null);
        setAnimatingOutSlide(id);
    };

    const handleAnimationEnd = (id) => {
        if (animatingOutSlide === id) {
          setAnimatingOutSlide(null); // 出場動畫播完就移除
        }
    };
    const SwiperLink = ({ href, children }) => (
        <div onClick={() => window.open(href, "_blank")}>
            {children}
        </div>
    );
    const slides = [
        {
            id: 1,
            imgSrc: 'images/slide/swiper-perBox-img1.jpg',
            title: 'Loading動畫大膽嘗試以非全版做遮擋，考驗裝置變換時的適應力',
            description: '未來大學新樣貌！非典型校長出線',
            tools : ['Swiper', 'AOS'],
            time: '5 days',
            url: 'https://education.gvm.com.tw/university/2023/'
        },
        {
            id: 2,
            imgSrc: 'images/slide/swiper-perBox-img2.jpg',
            title: '首次嘗試在主視覺中加入3D視覺動態，增添空間錯視感',
            description: '圍繞著NFT起飛的台灣Web3生態圈',
            tools: ['Fixed Header', 'SVG Animation', 'Gsap'],
            time: '1 week',
            url: 'https://event.gvm.com.tw/202204_nft/'
        },
        {
            id: 3,
            imgSrc: 'images/slide/swiper-perBox-img3.jpg',
            title: '首次嘗試綁定使用者滾動事件，實現全頁動畫更替，創新大事記呈現方式',
            description: '遠見揭開30年來的城市轉骨學．從青澀起步到綻放國際',
            tools: ['Scroll Fix Content', 'Swiper', 'Flip Card'],
            time: '1 week',
            url: 'https://city.gvm.com.tw/event/202405_polls/index.html'
        },
        {
            id: 4,
            imgSrc: 'images/slide/swiper-perBox-img4.jpg',
            title: '首次嘗試滾動中加入固定元素，透過配圖強化敘事效果',
            description: '獨家專訪》半導體產業造局者 張忠謀',
            tools: ['Scroll Fix Content', 'Swiper'],
            time: '5 days',
            url: 'https://event.gvm.com.tw/202411_MorrisChang/index.html'
        },
        {
            id: 5,
            imgSrc: 'images/slide/swiper-perBox-img5.jpg',
            title: '將前端可處理的測驗形式模組化，提升重用性',
            description: '川普2.0起風了！2025全球新變局',
            tools: ['Aurora Animation', 'Unscored test', 'Swiper', 'AOS'],
            time: '5 days',
            url: 'https://event.gvm.com.tw/trend/2025/index.html'
        }
    ];
    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <motion.div className={stylesSwiper.SwiperSinglePerbox}
            style={{ willChange: 'transform' }}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0}}
            transition={{ duration: 1}}
            viewport={{ once: false, amount: 0.2 }}
        >
            <Swiper
                slidesPerView="auto"
                centeredSlides={true}
                spaceBetween={20}
                grabCursor={true}
                onSwiper={setSwiperInstance}
                breakpoints={{
                    1100: {
                  
                        spaceBetween: 40,
                    },
                }}
                pagination={{
                    el:".swiper-pagination2",
                    type: "bullets",
                    clickable: true,
                    bulletClass: "swiper-pagination2-bullet swiper-pagination2-bullet",
                    bulletActiveClass: "swiper-pagination2-active",
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                className="SwiperSinglePerbox"
            >
                {slides && slides.length > 0 && slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div 
                            className={`${stylesSwiper.SwiperBlock} ${stylesSwiper.SwiperBlockNoBg}`}
                        >
                    
                        <SwiperLink href={slide.url} target="_blank" rel="noopener noreferrer">
                                <div className={`${stylesSwiper.SwiperSpcBoxTop} ${
                                    hoveredSlide === slide.id ? stylesSwiper.SwiperSinglePerboxHoverActive : ''
                                }`}
                                    onMouseEnter={() => handleMouseEnter(slide.id)}
                                    onMouseLeave={() => handleMouseLeave(slide.id)}
                                >
                                    <div className={`ImgFit9by13 ${stylesSwiper.SwiperImgCenter} ${stylesSwiper.SwiperImgCenterNoBottom}`}>
                                        <Image
                                            onAnimationEnd={() => handleAnimationEnd(slide.id)}
                                            className={`
                                                ${stylesSwiper.imageBase}
                                                ${hoveredSlide === slide.id ? stylesSwiper.imageHover : ''}
                                                ${!hoveredSlide && animatingOutSlide === slide.id ? stylesSwiper.imageOut : ''}
                                            `}
                                            src={slide.imgSrc}
                                            alt=""
                                            fill
                                            style={{ objectFit: 'cover'}}
                                        />
                                        
                                        <div className={`${stylesSwiper.SwiperSinglePerboxHover}`}>
                                            <div className={stylesSwiper.SwiperSinglePerboxHoverBox}>
                                                <div className={stylesSwiper.SwiperSinglePerboxHoverBg}></div>
                                                <div className={stylesSwiper.SwiperTxtBoxTag}>Tools to Use</div>
                                                <div className={stylesSwiper.SwiperTxtBoxTools}>
                                                    {slide.tools && slide.tools.length > 0 && slide.tools.map((tool, index) => (
                                                        <div key={index} className={stylesSwiper.SwiperTxtBoxTool}>
                                                            {tool}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className={`spcBlockW60 ${stylesSwiper.spcBlockW60}`}>
                                                    <div className={stylesSwiper.SwiperTxtBoxTag}>Bulid to launch</div>
                                                    <div className={stylesSwiper.SwiperTxtBoxTime}>{slide.time}</div>
                                                </div>
                                                <div className={`spcBlockW40 ${stylesSwiper.spcBlockW40}`}>
                                                    <div className="BtnSingleSmall">Show case</div>
                                                    <div className="BtnIconRight"></div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                                <div className={stylesSwiper.SwiperSpcBoxBottom}>
                                    <div className={stylesSwiper.SwiperTitleBox}>
                                        <div className={stylesSwiper.SwiperTitle}>{slide.title}</div>
                                        <div className={stylesSwiper.SwiperTitleDec}>{slide.description}</div>
                                    </div>
                                </div>
                            
                        </SwiperLink>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination2 swiper-customVariant2-pagination"></div>
            </Swiper>
            <div className="SwiperSinglePerboxBtnCombin">
                <div className="SwiperSinglePerboxBtnCombinW80"></div>
                    <div className="SwiperSinglePerboxBtnCombinW20">
                        <div className="swiperButtonPrev2" ref={prevRef}>
                            <div className="swiperButtonPrev2Icon"></div>
                        </div>
                        <div className="swiperButtonNext2" ref={nextRef}>
                            <div className="swiperButtonNext2Icon"></div>
                        </div>
                 </div>
                <div className="clear"></div>
             </div>
        </motion.div>
    );
};
        


const SwiperComponent = ({ variant }) => {
    const renderVariant = () => {
        switch (variant) {
            case "variant1":
                return (
                    <div className={stylesSwiper.SwiperSingle}>
                        <Swiper
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false
                            }}
                            effect="fade"
                            loop={true}
                            grabCursor={true}
                            speed={1000}
                            slidesPerView={1}
                            spaceBetween={50}
                            pagination={{
                                el: ".swiper-pagination", // Use a valid DOM element here
                                type: "bullets",
                                clickable: true,
                                bulletClass: "swiper-pagination-bullet swiper-custom-bullet",
                                bulletActiveClass: "swiper-custom-bullet-active",
                            }}
                        >
                            <SwiperSlide>
                                <div className={stylesSwiper.SwiperBlock}>
                                    <motion.div className={`spcBoxW40 ${stylesSwiper.SwiperSpcBoxW40}`}
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity:1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once:false, amount: 0.2 }}
                                    >
                                        <div className={`iconLeft ${stylesSwiper.SwiperIconStyle1}`}>
                                            <Image 
                                                src="images/icon/swiper-spcBox-icon1.png" 
                                                alt="Fale Image"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className={stylesSwiper.SwiperSpcBoxTop}>
                                            <h3 className={`TxtH3 ${stylesSwiper.TxtH3}`}>全頁式圖集</h3>
                                            <p className={`TxtDec ${stylesSwiper.TxtDec}`}>利用上下漸層遮蔽素材限制，製作沉浸式圖集，提升視覺體驗與內容連貫性。</p>
                                            
                                        </div>
                                        <div className="BorderCenter"></div>
                                        <div className={stylesSwiper.SwiperSpcBoxBottom}>
                                            <h4 className={`TxtNormal ${stylesSwiper.TxtNum}`}>Image Gallery</h4>
                                            <h5 className={`TxtH5 ${stylesSwiper.TxtH5}`}>利用 height: vh來拉高滾動區域，並透過display: flex控制內部元素的排列方式。</h5>
                                            <a href="https://event.gvm.com.tw/talented/2025/index.html" target="_blank" className={`BtnSingleSmall ${stylesSwiper.BtnSingleSmall}`}>❭❭ 2025未來人才關鍵報告</a>
                                        </div>
                                    </motion.div>
                                    <div className={`spcBoxW50 ${stylesSwiper.SwiperSpcBoxW50}`}>
                                        <div className={`ImgFit13by9 ${stylesSwiper.SwiperImgCenter}`}>
                                            <Image 
                                                src="images/slide/swiper-spcBox-img1.jpg" 
                                                alt="Fake Image"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={stylesSwiper.SwiperBlock}>
                                    <motion.div className={`spcBoxW40 ${stylesSwiper.SwiperSpcBoxW40}`}
                                        initial={{ opacity: 0, y: 80 }}
                                        whileInView={{ opacity:1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once:false, amount: 0.2 }}
                                    >
                                        <div className={`iconLeft ${stylesSwiper.SwiperIconStyle1}`}>
                                            <Image 
                                                src="images/icon/swiper-spcBox-icon2.png" 
                                                alt="Fale Image"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className={stylesSwiper.SwiperSpcBoxTop}>
                                            <h3 className={`TxtH3 ${stylesSwiper.TxtH3}`}>非計分測驗</h3>
                                            <p className={`TxtDec ${stylesSwiper.TxtDec}`}>開發單一作答的測驗模組，增加用戶互動性，並將該版型加入公版，便於後續專案延續使用。</p>
                                        </div>
                                        <div className="BorderCenter"></div>
                                        <div className={stylesSwiper.SwiperSpcBoxBottom}>
                                            <h4 className={`TxtNormal ${stylesSwiper.TxtNum}`}>Unscored test</h4>
                                            <h5 className={`TxtH5 ${stylesSwiper.TxtH5}`}>主要以Swiper為框架，使用者選定選項後，鎖定其他選項，並反轉顯示【已選擇】與【正確】答案。計時結束後slideNext()，並解鎖所有選項。</h5>
                                            <a href="https://event.gvm.com.tw/trend/2025/index.html" target="_blank" className={`BtnSingleSmall ${stylesSwiper.BtnSingleSmall}`}>❭❭ 川普2.0起風了！2025全球新變局</a>
                                        </div>
                                    </motion.div>
                                    <div className={`spcBoxW50 ${stylesSwiper.SwiperSpcBoxW50}`}>
                                        <div className={`ImgFit13by9 ${stylesSwiper.SwiperImgCenter}`}>
                                            <Image 
                                                src="images/slide/swiper-spcBox-img2.jpg" 
                                                alt="Fake Image"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={stylesSwiper.SwiperBlock}>
                                    <motion.div className={`spcBoxW40 ${stylesSwiper.SwiperSpcBoxW40}`}
                                        initial={{ opacity: 0, y: 80 }}
                                        whileInView={{ opacity:1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once:false, amount: 0.2 }}
                                    >
                                        <div className={`iconLeft ${stylesSwiper.SwiperIconStyle1}`}>
                                            <Image 
                                                src="images/icon/swiper-spcBox-icon3.png" 
                                                alt="Fale Image"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className={stylesSwiper.SwiperSpcBoxTop}>
                                            <h3 className={`TxtH3 ${stylesSwiper.TxtH3}`}>公版與元件庫統整</h3>
                                            <p className={`TxtDec ${stylesSwiper.TxtDec}`}>將常用版型分類為文章形式、多宮格排版、影音內嵌等，降低跨部門溝通成本，提升專案開發效率。</p>
                                        </div>
                                        <div className="BorderCenter"></div>
                                        <div className={stylesSwiper.SwiperSpcBoxBottom}>
                                            <h4 className={`TxtNormal ${stylesSwiper.TxtNum}`}>Component library</h4>
                                            <h5 className={`TxtH5 ${stylesSwiper.TxtH5}`}>由於專題內容以客製化為主，版型尚未落定，且前後台開發成本較高，因此將採用HTML + CSS切版，並建立可重複使用的版型元件，以提升建置效率。</h5>
                                             <div className={`BtnSingleSmall ${stylesSwiper.BtnSingleSmall}`}></div>
                                        </div>
                                    </motion.div>
                                    <div className={`spcBoxW50 ${stylesSwiper.SwiperSpcBoxW50}`}>
                                        <div className={`ImgFit13by9 ${stylesSwiper.SwiperImgCenter}`}>
                                            <Image 
                                                src="images/slide/swiper-spcBox-img3.jpg" 
                                                alt="Fake Image"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                            </SwiperSlide>
                            
                            <div className="swiper-pagination swiper-customVariant1-pagination"></div>
                        </Swiper>
                    </div>
                );
            case "variant2":
                return <SwiperVariant2 />;
            default: 
                return <SwiperVariant1 />;
        }
    };
    return (
        <div className="SwiperContainer">
            {renderVariant()}
        </div>
    );
};

export default SwiperComponent;