(function () {
    
    // =====бургер меню====

    const burger = document.querySelector('.burger-icon');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.getElementById('closeBtn');
    const sidebarLinks = sidebar.querySelectorAll('a');

    function closeSidebar() {
        burger.classList.remove('active');
        sidebar.classList.remove('active');
    }

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });


    // =====поиск=======


    const searchLink = document.querySelector('.user-menu__link--search');
    const searchLabel = document.querySelector('.user-menu__label');
    const searchInput = document.querySelector('.user-menu__search');

    searchLink.addEventListener('click', (e) => {
        e.preventDefault();
        searchLabel.classList.toggle('user-menu__label--active');
        searchInput.classList.toggle('user-menu__search--active');
    });

    // ====модалка====


    const modal = document.querySelector('.modal-account')
    const modalButton = document.querySelector('.user-menu__link--account')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal-account__cancel') || target.classList.contains('modal-account')) {
            document.body.classList.remove('body--opened-modal')
        }

    }

    // ===размер обуви=====

    const sizeBtn = document.getElementById('sizeBtn');
    const dropdown = document.getElementById('dropdown');
    const sizeItems = dropdown.querySelectorAll('div');

    sizeBtn.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });

    sizeItems.forEach(item => {
        item.addEventListener('click', () => {
            sizeBtn.innerHTML = item.textContent + ' <img class="hero__size-img" src="img/icons/ect/arrow-down.svg" alt="">';
            dropdown.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.hero__size-selector')) {
            dropdown.classList.remove('active');
        }
    });

    // ========


    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 40,
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        },
    });

})()