import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import stylesGsap from "../../../assets/styles/Gsap.module.scss";

gsap.registerPlugin(ScrollTrigger);

const GsapVariant1 = () => {
  const clusterGreatRef = useRef(null);
  useEffect(() =>{
    gsap.set(`.${stylesGsap.circle}`,{ yPercent: -5});
    gsap.set(`.${stylesGsap.dotsBlue}`,{ yPercent: 10});
    gsap.set(`.${stylesGsap.owlHorned}`,{ yPercent: -20});

    gsap.to(`.${stylesGsap.circle}`,{
      yPercent: 5,
      ease: "none",
      scrollTrigger: {
        trigger: clusterGreatRef.current,
        scrub: 1,
      },
    });

    gsap.to(`.${stylesGsap.dotsBlue}`,{
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: clusterGreatRef.current,
        scrub: 1,
      },
    });

    gsap.to(`.${stylesGsap.owlHorned}`,{
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: clusterGreatRef.current,
        scrub: 1,
      },
    });

    return () =>{
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);


  return(
    <div className={`${stylesGsap.cluster} ${stylesGsap.clusterGreat}`} >
      <div className={`${stylesGsap.circle} ${stylesGsap.clusterPieces}`}></div>
      <div className={`${stylesGsap.owlHorned} ${stylesGsap.clusterPieces}`} ref={clusterGreatRef}>
        <Image 
          src="https://fakeimg.pl/900x900/000000/ffffff"
          alt="fakeimg"
          width={900}
          height={900}
        />
      </div>
      <div className={`${stylesGsap.dotsBlue} ${stylesGsap.clusterPieces}`} >
        <Image 
          src="https://fakeimg.pl/900x900/000000/ffffff"
          alt="fakeimg"
          width={900}
          height={900}
        />
      </div>
    </div>
  );
}

const GsapVariant2 = () =>{
  const chatRef = useRef(null);
  const mm = gsap.matchMedia();

  useEffect(() => {
    gsap.set(`.${stylesGsap.Gsap_chat_top}`,{ yPercent: 0});
    gsap.set(`.${stylesGsap.Gsap_chat_bottom}`,{yPercent: 30});

    mm.add("(max-width: 1600px)", () => {
      gsap.set(`.${stylesGsap.Gsap_chat_top}`,{ yPercent: 100});
      gsap.set(`.${stylesGsap.Gsap_chat_bottom}`,{yPercent: 70});
      gsap.to(`.${stylesGsap.Gsap_chat_block_top}`,{
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: chatRef.current,
          scrub: 2,
        },
      });
  
      gsap.to(`.${stylesGsap.Gsap_chat_block_bottom}`,{
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: chatRef.current,
          scrub: 2,
        },
      });
    });
    mm.add("(max-width: 414px)", () => {
      gsap.set(`.${stylesGsap.Gsap_chat_top}`,{ yPercent: 120});
      gsap.set(`.${stylesGsap.Gsap_chat_bottom}`,{yPercent: 100});
      gsap.to(`.${stylesGsap.Gsap_chat_block_top}`,{
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: chatRef.current,
          scrub: 2,
        },
      });
  
      gsap.to(`.${stylesGsap.Gsap_chat_block_bottom}`,{
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: chatRef.current,
          scrub: 2,
        },
      });
    });
    gsap.to(`.${stylesGsap.Gsap_chat_block_top}`,{
      yPercent: -90,
      ease: "none",
      scrollTrigger: {
        trigger: chatRef.current,
        scrub: 2,
      },
    });

    gsap.to(`.${stylesGsap.Gsap_chat_block_bottom}`,{
      yPercent: -70,
      ease: "none",
      scrollTrigger: {
        trigger: chatRef.current,
        scrub: 2,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  },[]);
  return(
    <div className={stylesGsap.Gsap_single_perbox} ref={chatRef}>
      <div className={stylesGsap.Gsap_block}>
        <div className={`spcBlock_20 ${stylesGsap.Gsap_single_perblock_left}`}>
          <div className={stylesGsap.Gsap_txtBox_tag}>專案亮點</div>
          <h3 className={`Txt_h3 ${stylesGsap.Gsap_Txt_h3}`}><p>靈感實作</p><p>影響延續</p></h3>
          <div className={stylesGsap.Gsap_txtBox_dec}>探索我的實作歷程 —— 如何解決問題、推動創新、創造成果</div>
        </div>
        <div className={`spcBlock_60 ${stylesGsap.Gsap_single_perblock_right}`}>
          {[
            [
              { text: "", role: {}},
              { text: "", role: {}},
              {
                text: "將專題規格簡化為「無後台、手動更新」，解決更新頻率不高但重複性高的問題，讓工讀生也能協助維護，並同步製作更新說明文件",
                role: { img: "https://fakeimg.pl/30x30/000000/ffffff", description: "遠見on air／用聽的，輕鬆掌握國際、產經、科技新趨勢！"}
              },
              { text: "", role: {}},
              { text: "", role: {}}
            ],
            [
              { text: "", role: {}},
              {
                text: "與後端合作串接資料庫，實作搜尋榜單功能，並參與前期搜尋邏輯的討論與設計",
                role: { img: "https://fakeimg.pl/30x30/000000/ffffff", description: "擺脫教改魔咒！見證大學轉型奇蹟—2024最佳大學排行"}
              },
              {
                text: "結合專題主題設計 loading 動畫倒數，延伸專案視覺風格，強化整體體驗",
                role: { img: "https://fakeimg.pl/30x30/000000/ffffff", description: "台灣癌逝率高於全球！每4分鐘19秒一人罹癌"}
              },
              { text: "", role: {}},
              { text: "", role: {}}
            ]
          ].map((chatGroup, index) => (
            <div key={index} className={`${stylesGsap.Gsap_chat_block} ${index === 0 ? stylesGsap.Gsap_chat_top : stylesGsap.Gsap_chat_bottom}`}>
              {chatGroup.map((chat, idx) => (
                <div key={idx} className={`${stylesGsap.Gsap_chat_box} ${chat.text && stylesGsap.Gsap_chat_box_main}`}>
                  {chat.text && (
                    <div className={stylesGsap.Gsap_chat_dec}>
                      {chat.text}
                      {chat.role.description && (
                        <div className={stylesGsap.Gsap_chat_role}>
                          <div className={stylesGsap.Gsap_chat_role_img} style={{ backgroundImage: `url(${chat.role.img})`}}></div>
                          <div className={stylesGsap.Gsap_chat_role_dec}>{chat.role.description}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const GsapComponent = ({ variant }) => {
  const renderVariant = () => {
    switch (variant) {
      case "variant1":
        return <GsapVariant1 />;
      case "variant2":
        return <GsapVariant2 />;
      default:
        return <GsapVariant1 />;
    }
  };
  return(
    <div className={stylesGsap.Gsap_container}>
      {renderVariant()}
    </div>
  );
};

export default GsapComponent;