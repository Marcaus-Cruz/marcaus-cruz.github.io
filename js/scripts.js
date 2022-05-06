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

function showCaamlDiv() {
    const caamlDiv = document.getElementById("caaml-screenshots");
    const showBtn =  document.getElementById("caaml-see-more");
    // const par1 = document.createElement("h1");

    // if(showBtn.innerHTML === "See More"){
    //     par1.textContent= "Hello world";
    //     par1.setAttribute("color", "black");

    //     caamlDiv.append(par1);
    //     showBtn.innerHTML = "Hide"
    // } else{
    //     while(caamlDiv.firstChild){
    //         caamlDiv.removeChild(caamlDiv.firstChild);
    //     }
    //     showBtn.innerHTML = "See More";
    // }

    if(showBtn.innerHTML === "See More"){
            caamlDiv.style.visibility = "visible"
            caamlDiv.style.height = "500px";
            caamlDiv.style.overflowY = "scroll";
            caamlDiv.style.overflowX = "scroll";
             showBtn.innerHTML = "Hide";
         } else{
             caamlDiv.style.visibility = "hidden";
             caamlDiv.style.height = "0px";
            caamlDiv.style.overflowY = "hidden";
             showBtn.innerHTML = "See More";
        }


}
