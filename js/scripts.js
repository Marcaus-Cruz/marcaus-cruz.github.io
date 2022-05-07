/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

function showContent(theDiv, theBtn) {
    const showDiv = document.getElementById(theDiv);
    const showBtn =  document.getElementById(theBtn);

    if(showBtn.innerHTML === "See More"){
            showDiv.style.visibility = "visible"
            showDiv.style.height = "500px";
            showDiv.style.overflowY = "scroll";
            showDiv.style.overflowX = "scroll";
            showDiv.style.marginBottom = "20px";
            showBtn.innerHTML = "Hide";
         } else{
            showDiv.style.visibility = "hidden";
            showDiv.style.height = "0px";
            showDiv.style.overflowY = "hidden";
            showBtn.innerHTML = "See More";
        }

}
