import { useRouter } from "next/router";
import stylesIndex from "../src/assets/styles/Index.module.scss";
import SwiperComponent from "../src/components/sub/swiper/swiperComponent";
import MarqueeComponent from "../src/components/sub/marquee/marqueeComponent";
// import SmoothScroll from "../src/components/sub/scroll/SmoothScroll";
import GsapComponent from "../src/components/sub/gsap/gsapComponent";
import LoadComponent from "../src/components/sub/load/loadComponent";
import FooterComponent from "../src/components/Footer";
import { motion } from "framer-motion";
import HeaderComponent from "../src/components/Header";
import { useEffect, useRef } from "react";



const HomePage = () => {
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

  return(
    <div>
      <div className={stylesIndex.wrapper}>
        <LoadComponent variant="variant1" />
        <HeaderComponent variant="variant1" />
        <div 
          className="KvContainer"
          ref={el => sectionRefs.current['introProject'] = el}
        >
          <div className={`KvBlock KvBlockCenterW1100 ${stylesIndex.KvSpc}`}>
            <h2 className="TxtH2">See. Explore.</h2>
            <p className="TxtDec spcBlockW60">探索一系列透過功能性呈現議題內容的前端開發作品。</p>
            <a href="https://github.com/tingm1020?tab=projects" target="_blank" className="Btn_single">Read More</a>
          </div>
        </div>
        <motion.div 
          className="PageContainer" 
          id="anchor2"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="blockW90">
            <SwiperComponent variant="variant1" />
          </div>
        </motion.div>
        <div 
          className={`PageContainer ${stylesIndex.PageContainerBlack}`} 
          ref={el => sectionRefs.current['introPlugin'] = el}
        >
          <MarqueeComponent variant="variant2" />
          <div className="blockW90">
            <div className={`TxtBox ${stylesIndex.TxtBoxLeft}`}>
              <h5 className={`TxtH5 ${stylesIndex.TxtBoxH5}`}><p>以使用者為中心的開發，像素級精準的設計</p></h5>
              <h2 className={`TxtH2 ${stylesIndex.TxtBoxH2}`}>寫給使用者看的頁面，也寫給未來的自己看</h2>
              <ul className="ListDone">
                <li>
                  <span className="iconDone"><i></i><i></i></span>
                  <p>響應式網頁與行動介面</p>
                </li>
                <li>
                  <span className="iconDone"><i></i><i></i></span>
                  <p>精準臨摹設計，實現一致性網頁呈現</p>
                </li>
                <li>
                  <span className="iconDone"><i></i><i></i></span>
                  <p>模組化開發，加速頁面生成與佈署</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="blockW90">
            <div className={stylesIndex.PageContainer}>
              <SwiperComponent variant="variant2" />
            </div>
          </div>
        </div>
        <div className={`PageContainer ${stylesIndex.PageDecMbBlack}`}>
          <div className="blockW90">
            <div className={`TxtBox ${stylesIndex.TxtBoxTop}`}>
            <div className={stylesIndex.TxtBoxH5}>專案亮點</div>
              <h5 className={`TxtH2 ${stylesIndex.TxtBoxH2}`}><p>靈感實作</p><p>影響延續</p></h5>
              <h2 className={`TxtDec ${stylesIndex.TxtBoxDec}`}>探索我的實作歷程 —— 如何解決問題、推動創新、創造成果</h2>
            </div>
          </div>
        </div>
        <div 
          className={`PageContainer ${stylesIndex.PageContainerBlack}`} 
          ref={el => sectionRefs.current['introProcess'] = el}
        >
          <div className="blockW90">
            
            <GsapComponent variant="variant2"/>
          </div>
        </div>
        {/* <div className="PageContainer"></div> */}
        <FooterComponent variant="variant1" />
      </div>
    </div>
    
  );
};

export default HomePage;

