document.addEventListener("DOMContentLoaded", function() {
    const galleryGrid = document.querySelector('.gallery-grid');
    const galleryData = document.getElementById('gallery-images');

    if (galleryGrid && galleryData) {
        const galleryGroups = JSON.parse(galleryData.textContent);

        galleryGrid.innerHTML = galleryGroups
            .flatMap(group => group.images.map(imagePath => `
                <div class="col-sm-6 col-lg-4 gallery-item ${group.category}">
                    <a href="${imagePath}" class="glightbox" data-gallery="portfolio" data-description="${group.label}">
                        <div class="gallery-card overflow-hidden rounded-custom shadow-soft">
                            <img src="${imagePath}" alt="${group.label}" class="img-fluid gallery-img">
                            <div class="gallery-overlay">
                                <i class="bi bi-zoom-in fs-2 text-white"></i>
                            </div>
                        </div>
                    </a>
                </div>`))
            .join('');
    }

    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        zoomable: true,
        descPosition: 'bottom',
        openEffect: 'zoom',
        closeEffect: 'fade'
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.classList.remove('hide');
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.classList.add('hide');
                    }, 400);
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    if (cookieBanner && acceptCookiesBtn) {
        if (!localStorage.getItem('cookiesAccepted_PormiArt')) {
            setTimeout(() => {
                cookieBanner.classList.add('show');
            }, 1500);
        }

        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted_PormiArt', 'true');
            cookieBanner.classList.remove('show');
        });
    }
});
