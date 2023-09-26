window.addEventListener('scroll', () => {
    const docEl = document.documentElement;
    let scrollPosition = docEl.scrollTop;
    let docWidth = docEl.clientWidth;

    const parallaxHight = document.querySelector('.parallax').clientHeight;
    const contentHight = document.querySelector('.content').clientHeight;
    
    let scrollContentPercent = scrollPosition / contentHight * 100;
    let scrollParallaxPercent = scrollPosition / parallaxHight * 100;
    let opacity = 1 - 1/100 * scrollParallaxPercent;

    let zoomFog = 1 + (docWidth / 10000 * scrollParallaxPercent);
    document.querySelector('.parallax__fog').style.transform = `scale(${zoomFog})`;
    document.querySelector('.parallax__fog').style.opacity = `${opacity}`;


    let zoom1 = 1 + (docWidth / 5000000 * scrollContentPercent);
    document.querySelector('.parallax__mountain_1').style.transform = `scale(${zoom1})`;

    let zoom2 = 1 + (docWidth * 0.000005 * scrollContentPercent);
    let horyzontalOffset1 = docWidth / 2000 * scrollParallaxPercent;
    document.querySelector('.parallax__mountain_2').style.transform = `scale(${zoom2}) translate3d(${horyzontalOffset1}px, 0, 0)`;


    let zoom3 = 1 + (docWidth * 0.00001 * scrollContentPercent);
    let horyzontalOffset2 = docWidth / 5000 * scrollParallaxPercent;
    document.querySelector('.parallax__mountain_3').style.transform = `scale(${zoom3}) translate3d(-${horyzontalOffset2}px, 0, 0)`;
});