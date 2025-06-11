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
        <div className={stylesSwiper.Swiper_single}>
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
            imgSrc: 'images/slide/swiper_perBox_img1.jpg',
            title: 'Loading動畫大膽嘗試以非全版做遮擋，考驗裝置變換時的適應力',
            description: '未來大學新樣貌！非典型校長出線',
            tools : ['Swiper', 'AOS'],
            time: '5 days',
            url: 'https://education.gvm.com.tw/university/2023/'
        },
        {
            id: 2,
            imgSrc: 'images/slide/swiper_perBox_img2.jpg',
            title: '首次嘗試在主視覺中加入3D視覺動態，增添空間錯視感',
            description: '圍繞著NFT起飛的台灣Web3生態圈',
            tools: ['Fixed Header', 'SVG Animation', 'Gsap'],
            time: '1 week',
            url: 'https://event.gvm.com.tw/202204_nft/'
        },
        {
            id: 3,
            imgSrc: 'images/slide/swiper_perBox_img3.jpg',
            title: '首次嘗試綁定使用者滾動事件，實現全頁動畫更替，創新大事記呈現方式',
            description: '遠見揭開30年來的城市轉骨學．從青澀起步到綻放國際',
            tools: ['Scroll Fix Content', 'Swiper', 'Flip Card'],
            time: '1 week',
            url: 'https://city.gvm.com.tw/event/202405_polls/index.html'
        },
        {
            id: 4,
            imgSrc: 'images/slide/swiper_perBox_img4.jpg',
            title: '首次嘗試滾動中加入固定元素，透過配圖強化敘事效果',
            description: '獨家專訪》半導體產業造局者 張忠謀',
            tools: ['Scroll Fix Content', 'Swiper'],
            time: '5 days',
            url: 'https://event.gvm.com.tw/202411_MorrisChang/index.html'
        },
        {
            id: 5,
            imgSrc: 'images/slide/swiper_perBox_img5.jpg',
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
        <motion.div className={stylesSwiper.Swiper_single_perbox}
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
                className="Swiper_single_perbox"
            >
                {slides && slides.length > 0 && slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div 
                            className={`${stylesSwiper.Swiper_block} ${stylesSwiper.Swiper_block_noBg}`}
                        >
                    
                        <SwiperLink href={slide.url} target="_blank" rel="noopener noreferrer">
                                <div className={`${stylesSwiper.Swiper_spcBox_top} ${
                                    hoveredSlide === slide.id ? stylesSwiper.Swiper_single_perbox_hoverActive : ''
                                }`}
                                    onMouseEnter={() => handleMouseEnter(slide.id)}
                                    onMouseLeave={() => handleMouseLeave(slide.id)}
                                >
                                    <div className={`Img_fit9_13 ${stylesSwiper.Swiper_img_center} ${stylesSwiper.Swiper_img_center_noBottom}`}>
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
                                        
                                        <div className={`${stylesSwiper.Swiper_single_perbox_hover}`}>
                                            <div className={stylesSwiper.Swiper_single_perbox_hover_box}>
                                                <div className={stylesSwiper.Swiper_single_perbox_hover_bg}></div>
                                                <div className={stylesSwiper.Swiper_txtBox_tag}>Tools to Use</div>
                                                <div className={stylesSwiper.Swiper_txtBox_tools}>
                                                    {slide.tools && slide.tools.length > 0 && slide.tools.map((tool, index) => (
                                                        <div key={index} className={stylesSwiper.Swiper_txtBox_tool}>
                                                            {tool}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className={`spcBlock_60 ${stylesSwiper.spcBlock_60}`}>
                                                    <div className={stylesSwiper.Swiper_txtBox_tag}>Bulid to launch</div>
                                                    <div className={stylesSwiper.Swiper_txtBox_time}>{slide.time}</div>
                                                </div>
                                                <div className={`spcBlock_40 ${stylesSwiper.spcBlock_40}`}>
                                                    <div className="Btn_single_small">Show case</div>
                                                    <div className="Btn_icon_right"></div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                                <div className={stylesSwiper.Swiper_spcBox_bottom}>
                                    <div className={stylesSwiper.Swiper_title_box}>
                                        <div className={stylesSwiper.Swiper_title}>{slide.title}</div>
                                        <div className={stylesSwiper.Swiper_title_dec}>{slide.description}</div>
                                    </div>
                                </div>
                            
                        </SwiperLink>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination2 swiper-customVariant2-pagination"></div>
            </Swiper>
            <div className="Swiper_single_perbox_btnCombin">
                <div className="Swiper_single_perbox_btnCombin_80"></div>
                    <div className="Swiper_single_perbox_btnCombin_20">
                        <div className="swiper_button_prev2" ref={prevRef}>
                            <div className="swiper_button_prev2_icon"></div>
                        </div>
                        <div className="swiper_button_next2" ref={nextRef}>
                            <div className="swiper_button_next2_icon"></div>
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
                    <div className={stylesSwiper.Swiper_single}>
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
                                <div className={stylesSwiper.Swiper_block}>
                                    <motion.div className={`spcBox_40 ${stylesSwiper.Swiper_spcBox_40}`}
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity:1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once:false, amount: 0.2 }}
                                    >
                                        <div className={`icon_left ${stylesSwiper.Swiper_icon_style1}`}>
                                            <Image 
                                                src="images/icon/swiper_spcBox_icon1.png" 
                                                alt="Fale Image"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className={stylesSwiper.Swiper_spcBox_top}>
                                            <h3 className={`Txt_h3 ${stylesSwiper.Txt_h3}`}>全頁式圖集</h3>
                                            <p className={`Txt_dec ${stylesSwiper.Txt_dec}`}>利用上下漸層遮蔽素材限制，製作沉浸式圖集，提升視覺體驗與內容連貫性。</p>
                                        </div>
                                        <div className="Border_center"></div>
                                        <div className={stylesSwiper.Swiper_spcBox_bottom}>
                                            <h4 className={`Txt_normal ${stylesSwiper.Txt_num}`}>Image Gallery</h4>
                                            <h5 className={`Txt_h5 ${stylesSwiper.Txt_h5}`}>利用 height: vh來拉高滾動區域，並透過display: flex控制內部元素的排列方式。</h5>
                                        </div>
                                    </motion.div>
                                    <div className={`spcBox_50 ${stylesSwiper.Swiper_spcBox_50}`}>
                                        <div className={`Img_fit13_9 ${stylesSwiper.Swiper_img_center}`}>
                                            <Image 
                                                src="images/slide/swiper_spcBox_img1.jpg" 
                                                alt="Fake Image"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={stylesSwiper.Swiper_block}>
                                    <motion.div className={`spcBox_40 ${stylesSwiper.Swiper_spcBox_40}`}
                                        initial={{ opacity: 0, y: 80 }}
                                        whileInView={{ opacity:1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once:false, amount: 0.2 }}
                                    >
                                        <div className={`icon_left ${stylesSwiper.Swiper_icon_style1}`}>
                                            <Image 
                                                src="images/icon/swiper_spcBox_icon2.png" 
                                                alt="Fale Image"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className={stylesSwiper.Swiper_spcBox_top}>
                                            <h3 className={`Txt_h3 ${stylesSwiper.Txt_h3}`}>非計分測驗</h3>
                                            <p className={`Txt_dec ${stylesSwiper.Txt_dec}`}>開發單一作答的測驗模組，增加用戶互動性，並將該版型加入公版，便於後續專案延續使用。</p>
                                        </div>
                                        <div className="Border_center"></div>
                                        <div className={stylesSwiper.Swiper_spcBox_bottom}>
                                            <h4 className={`Txt_normal ${stylesSwiper.Txt_num}`}>Unscored test</h4>
                                            <h5 className={`Txt_h5 ${stylesSwiper.Txt_h5}`}>主要以Swiper為框架，使用者選定選項後，鎖定其他選項，並反轉顯示【已選擇】與【正確】答案。計時結束後slideNext()，並解鎖所有選項。</h5>
                                        </div>
                                    </motion.div>
                                    <div className={`spcBox_50 ${stylesSwiper.Swiper_spcBox_50}`}>
                                        <div className={`Img_fit13_9 ${stylesSwiper.Swiper_img_center}`}>
                                            <Image 
                                                src="images/slide/swiper_spcBox_img2.jpg" 
                                                alt="Fake Image"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={stylesSwiper.Swiper_block}>
                                    <motion.div className={`spcBox_40 ${stylesSwiper.Swiper_spcBox_40}`}
                                        initial={{ opacity: 0, y: 80 }}
                                        whileInView={{ opacity:1, y: 0 }}
                                        transition={{ duration: 1 }}
                                        viewport={{ once:false, amount: 0.2 }}
                                    >
                                        <div className={`icon_left ${stylesSwiper.Swiper_icon_style1}`}>
                                            <Image 
                                                src="images/icon/swiper_spcBox_icon3.png" 
                                                alt="Fale Image"
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <div className={stylesSwiper.Swiper_spcBox_top}>
                                            <h3 className={`Txt_h3 ${stylesSwiper.Txt_h3}`}>公版與元件庫統整</h3>
                                            <p className={`Txt_dec ${stylesSwiper.Txt_dec}`}>將常用版型分類為文章形式、多宮格排版、影音內嵌等，降低跨部門溝通成本，提升專案開發效率。</p>
                                        </div>
                                        <div className="Border_center"></div>
                                        <div className={stylesSwiper.Swiper_spcBox_bottom}>
                                            <h4 className={`Txt_normal ${stylesSwiper.Txt_num}`}>Component library</h4>
                                            <h5 className={`Txt_h5 ${stylesSwiper.Txt_h5}`}>由於專題內容以客製化為主，版型尚未落定，且前後台開發成本較高，因此將採用HTML + CSS切版，並建立可重複使用的版型元件，以提升建置效率。</h5>
                                        </div>
                                    </motion.div>
                                    <div className={`spcBox_50 ${stylesSwiper.Swiper_spcBox_50}`}>
                                        <div className={`Img_fit13_9 ${stylesSwiper.Swiper_img_center}`}>
                                            <Image 
                                                src="images/slide/swiper_spcBox_img3.jpg" 
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
        <div className="Swiper_container">
            {renderVariant()}
        </div>
    );
};

export default SwiperComponent;