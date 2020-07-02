/****************
Mobile Navigation
****************/
const toggleNav = document.querySelectorAll('.nav-btn');
const navBtn = document.querySelector('#open-nav');
const exitNav = document.querySelector('#close-nav');
const darkSection = document.querySelector('#dark-section');
const navigation = document.querySelector('.navigation-mobile');

const body = document.querySelector('body');

function onResize() {
    if (body.clientWidth > 774) {
        if (navOpen) {

            toggleHideNav();
            toggleNavBtn();
            navBtn.classList.remove('rotate-nav-animation');
            exitNav.classList.remove('rotate-exit-reverse');

            body.classList.remove('stop-scrolling');
        }
    }
}

let navOpen = false;

toggleNav.forEach(function(button) {
    button.addEventListener('click', function() {

        if (navOpen) {
            
            closeNav();
            rotateReverse();

        } else {

            openNav();
            rotateAnimation();

        }
    });
});

function toggleHideNav() {
    darkSection.classList.toggle('hide-mobile');
    navigation.classList.toggle('hide-mobile');

    extMenu.classList.add('hide-mobile');

    navOpen ? navOpen = false : navOpen = true;
}

function toggleNavBtn() {
    navBtn.classList.toggle('hide-mobile');
    exitNav.classList.toggle('hide-mobile');
};

function rotateAnimation() {

    setTimeout(toggleNavBtn, 100);

    navBtn.classList.remove('rotate-nav-reverse');
    navBtn.classList.add('rotate-nav-animation');

    exitNav.classList.remove('rotate-exit-reverse')
    exitNav.classList.add('rotate-exit-animation');
    
}

function rotateReverse() {
    setTimeout(toggleNavBtn, 100);
    setTimeout(function() {navBtn.classList.remove('rotate-nav-reverse')}, 200);

    navBtn.classList.remove('rotate-nav-animation')
    navBtn.classList.add('rotate-nav-reverse');

    exitNav.classList.remove('rotate-exit-animation')
    exitNav.classList.add('rotate-exit-reverse');
}

function openNav() {
    toggleHideNav();

    navigation.classList.remove('navigation-reverse');
    navigation.classList.add('navigation-animation');

    darkSection.classList.remove('darker-reverse');
    darkSection.classList.add('darker-animation');

    body.classList.toggle('stop-scrolling');
}

function closeNav() {
    setTimeout(toggleHideNav, 300);

    navigation.classList.remove('navigation-animation');
    navigation.classList.add('navigation-reverse');

    darkSection.classList.remove('darker-animation');
    darkSection.classList.add('darker-reverse');

    body.classList.toggle('stop-scrolling');

    extMenu.classList.add('hide-mobile');

}

/****************
Extended Menu
****************/

const extMenuBtn = document.querySelector('#menu-btn');
const exitMenu = document.querySelector('#exit-menu')
const extMenu = document.querySelector('.ext-menu');


extMenuBtn.addEventListener('click', function() {

    toggleHideMenu();

    extMenu.classList.remove('navigation-reverse');
    extMenu.classList.add('navigation-animation');
});

exitMenu.addEventListener('click', function() {

    setTimeout(toggleHideMenu, 300);

    extMenu.classList.remove('navigation-animation');
    extMenu.classList.add('navigation-reverse');
})

function toggleHideMenu() {
    extMenu.classList.toggle('hide-mobile');
}


/****************
Links-Section
****************/


const linkSection = document.querySelectorAll('.link-section');

linkSection.forEach(function(section) {

    //Select the toggle button and the links section for each
    const toggleLink = section.querySelector('.toggle-links');
    const links = section.querySelector('ul');
    const arrow = section.querySelector('.arrow-btn');
    const container = section.querySelector('.links-container');

    let open = false

    //Function to toggle link section
    toggleLink.addEventListener('click', function() {

        if (open) {

            setTimeout(toggleHide, 300);

            arrow.classList.remove('rotate-animation');
            arrow.classList.add('rotate-reverse');

            if (container.classList.contains('134')) {
                links.classList.remove('pushdown-animation134');
                links.classList.add('pushdown-reverse134');

                container.classList.remove('container-animation134');
                container.classList.add('container-reverse134');
            }

            if (container.classList.contains('179')) {
                links.classList.remove('pushdown-animation179');
                links.classList.add('pushdown-reverse179');

                container.classList.remove('container-animation179');
                container.classList.add('container-reverse179');
            }

            if (container.classList.contains('224')) {
                links.classList.remove('pushdown-animation224');
                links.classList.add('pushdown-reverse224');

                container.classList.remove('container-animation224');
                container.classList.add('container-reverse224');
            }

            if (container.classList.contains('269')) {
                links.classList.remove('pushdown-animation269');
                links.classList.add('pushdown-reverse269');

                container.classList.remove('container-animation269');
                container.classList.add('container-reverse269');
            }
            

        } else {

            toggleHide();

            arrow.classList.remove('rotate-reverse');
            arrow.classList.add('rotate-animation');

            if (container.classList.contains('134')) {
                links.classList.remove('pushdown-reverse134');
                links.classList.add('pushdown-animation134');

                container.classList.remove('container-reverse134');
                container.classList.add('container-animation134');
            }

            if (container.classList.contains('179')) {
                links.classList.remove('pushdown-reverse179');
                links.classList.add('pushdown-animation179');

                container.classList.remove('container-reverse179');
                container.classList.add('container-animation179');
            }

            if (container.classList.contains('224')) {
                links.classList.remove('pushdown-reverse224');
                links.classList.add('pushdown-animation224');

                container.classList.remove('container-reverse224');
                container.classList.add('container-animation224');
            }

            if (container.classList.contains('269')) {

                links.classList.remove('pushdown-reverse269');
                links.classList.add('pushdown-animation269');

                container.classList.remove('container-reverse269');
                container.classList.add('container-animation269');
            }

        }

        open ? open = false : open = true;
        
    });

    function toggleHide() {
        container.classList.toggle('hide-mobile');
    }

}); 
