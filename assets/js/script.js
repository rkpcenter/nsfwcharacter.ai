// header -> nav toggle (button & scroll)
const toggleNav = (e, navId, className) => {
    let nav  = document.getElementById(navId);

    let openNav = () => {
        e.classList.add(className);
        nav.classList.add(className);
        document.body.classList.add('prevent-scroll');
    }

    let closeNav = () => {
        e.classList.remove(className);
        nav.classList.remove(className);
        document.body.classList.remove('prevent-scroll');
    }

    if(e.classList.contains(className)){
        closeNav();
    }else{
        openNav();
    }

    window.addEventListener('scroll', () => {
        if(e.classList.contains(className) || nav.classList.contains(className)){
            closeNav();
        }
    });
}

// header -> hide on bottom
const mainHeader = document.getElementById('mainHeader');

window.addEventListener('scrollend', () => {
    if((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight){
        return mainHeader.classList.add('hide');
    }

    mainHeader.classList.remove('hide');
});

window.addEventListener('resize', () => {
    mainHeader.classList.remove('hide');
});

// linkUpdater
const updateLink = (linkId) => {
    const link = document.getElementById(linkId);

    let currentURL = window.location.href;
    let params = new URL(currentURL).search;
    let newURL = `https://beta.nsfwcharacter.ai/index${params}`;

    link.setAttribute('href', newURL);
}