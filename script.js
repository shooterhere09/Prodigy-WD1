document.addEventListener('DOMContentLoaded', () => {
    const Links = document.querySelectorAll('.link');
    const Sections = document.querySelectorAll('section');

    let dynamicOffset = window.innerHeight * 0.1; // 10% of the viewport height

    window.addEventListener('resize', () => {
        dynamicOffset = window.innerHeight * 0.1; // Recalculate on resize
    });

    window.addEventListener('scroll', () => {
        let current = '';

        Sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - dynamicOffset) {
                current = section.getAttribute('id');
            }
        });

        Links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
