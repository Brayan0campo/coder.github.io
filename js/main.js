window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.courses');

    items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;

        if (isVisible) {
            item.classList.add('animate');
        } else {
            item.classList.remove('animate');
        }
    });
});