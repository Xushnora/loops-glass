let imgs = document.querySelector('.imgBig');
let elLoop = document.querySelector('.lopa');
let imgSmall = document.querySelector('.imgSmall');

imgs.addEventListener('mousemove', (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    imgs.style.cursor = 'zoom-in';

    console.log(x, y);
    imgSmall.style.transform = `translate(-${x}px, -${y}px) scale(2)`;
});



