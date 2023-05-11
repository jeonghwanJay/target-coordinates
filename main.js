const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const coordinates = document.querySelector('.coordinates');
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    target.style.left = `${x}px`
    target.style.top = `${y}px`;
    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    coordinates.style.left = `${x}px`;
    coordinates.style.top = `${y}px`;
    coordinates.innerHTML = `${x}px, ${y}px`
})