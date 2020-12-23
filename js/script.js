const eyes = document.querySelectorAll('.eye-roll');

window.addEventListener('mousemove', (e) => {
    eyes.forEach(el => {
        const x = el.getBoundingClientRect().left + (el.clientWidth / 2);
        const y = el.getBoundingClientRect().top + (el.clientHeight / 2);

        const radian = Math.atan2(e.pageX - x, e.pageY - y);
        const rot = (radian * (180 / Math.PI) * -1) + 90;

        el.style.transform = `rotate(${rot}deg)`;
    })
});
