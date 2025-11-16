    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-page-top');
    function handleScroll() {
        if (window.scrollY > 10) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // run once on load