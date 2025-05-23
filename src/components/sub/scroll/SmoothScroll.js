import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const body = document.body;
    const jsScroll = document.getElementsByClassName('js-scroll')[0];
    const speed = 0.07;
    let offset = 0;
    let rafId = null;

    const setBodyHeight = () => {
      const height = jsScroll.getBoundingClientRect().height - 1;
      body.style.height = Math.floor(height) + 90 + 'px';
    };

    const smoothScroll = () => {
      offset += (window.pageYOffset - offset) * speed;
      const scroll = `translateY(-${offset}px) translateZ(0)`;
      jsScroll.style.transform = scroll;
      rafId = requestAnimationFrame(smoothScroll);
    };

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(smoothScroll);
      }
    };

    // 初始化设置高度
    setBodyHeight();
    smoothScroll();

    // 添加事件监听器
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', setBodyHeight); // 监听窗口大小变化

    // 清除事件监听器
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', setBodyHeight);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return null; // 因为这个组件只处理滚动，不渲染任何东西
};

export default SmoothScroll;
