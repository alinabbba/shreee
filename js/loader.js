function closePreloader() {
    const preloader = document.querySelector('.loader_bg');
    const mainContent = document.querySelector('.allContent');
    preloader.style.opacity = 0;
    preloader.style.width = 0;
    mainContent.style.opacity = 1;

}

setTimeout(closePreloader, 1000);

// export {closePreloader}
