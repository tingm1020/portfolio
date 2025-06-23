import {React} from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import stylesIndex from "../src/assets/styles/Index.module.scss";
import SwiperComponent from "../src/components/sub/swiper/swiperComponent";
import MarqueeComponent from "../src/components/sub/marquee/marqueeComponent";
// import SmoothScroll from "../src/components/sub/scroll/SmoothScroll";
import GsapComponent from "../src/components/sub/gsap/gsapComponent";
import LoadComponent from "../src/components/sub/load/loadComponent";
import FooterComponent from "../src/components/Footer";
import { motion } from "framer-motion";
import HeaderComponent from "../src/components/Header";


const HomePage = () => {

  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes("#")){
      const anchor = router.asPath.split("#")[1];
      const scrollToAnchor = () => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: "smooth"});
        }
      };
      setTimeout(scrollToAnchor, 1000);
    }
  }, [router.asPath]);

  return(
    <div>
      <div className={stylesIndex.wrapper}>
        <LoadComponent variant="variant1" />
        <HeaderComponent variant="variant1" />
        <div className="Kv_container" id="introProject">
          <div className={`Kv_block Kv_block_center_1100 ${stylesIndex.Kv_spc}`}>
            <h2 className="Txt_h2">See. Explore.</h2>
            <p className="Txt_dec spcBlock_60">探索一系列透過功能性呈現議題內容的前端開發作品。</p>
            <a href="https://github.com/tingm1020?tab=projects" target="_blank" className="Btn_single">Read More</a>
          </div>
        </div>
        <motion.div 
          className="Page_container" 
          id="anchor2"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="block_90">
            <SwiperComponent variant="variant1" />
          </div>
        </motion.div>
        <div className={`Page_container ${stylesIndex.Page_container_black}`} id="introPlugin">
          <MarqueeComponent variant="variant2" />
          <div className="block_90">
            <div className={`Txt_box ${stylesIndex.Txt_box_left}`}>
              <h5 className={`Txt_h5 ${stylesIndex.Txt_box_h5}`}><p>以使用者為中心的開發，像素級精準的設計</p></h5>
              <h2 className={`Txt_h2 ${stylesIndex.Txt_box_h2}`}>寫給使用者看的頁面，也寫給未來的自己看</h2>
              <ul className="List_done">
                <li>
                  <span className="icon_done"><i></i><i></i></span>
                  <p>響應式網頁與行動介面</p>
                </li>
                <li>
                  <span className="icon_done"><i></i><i></i></span>
                  <p>精準臨摹設計，實現一致性網頁呈現</p>
                </li>
                <li>
                  <span className="icon_done"><i></i><i></i></span>
                  <p>模組化開發，加速頁面生成與佈署</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="block_90">
            <div className={stylesIndex.Page_container}>
              <SwiperComponent variant="variant2" />
            </div>
          </div>
        </div>
        <div className={`Page_container ${stylesIndex.Page_dec_mb_black}`}>
          <div className="block_90">
            <div className={`Txt_box ${stylesIndex.Txt_box_top}`}>
            <div className={stylesIndex.Txt_box_h5}>專案亮點</div>
              <h5 className={`Txt_h2 ${stylesIndex.Txt_box_h2}`}><p>靈感實作</p><p>影響延續</p></h5>
              <h2 className={`Txt_dec ${stylesIndex.Txt_box_dec}`}>探索我的實作歷程 —— 如何解決問題、推動創新、創造成果</h2>
            </div>
          </div>
        </div>
        <div className={`Page_container ${stylesIndex.Page_container_black}`} id="introProcess">
          <div className="block_90">
            
            <GsapComponent variant="variant2"/>
          </div>
        </div>
        {/* <div className="Page_container"></div> */}
        <FooterComponent variant="variant1" />
      </div>
    </div>
    
  );
};

export default HomePage;

