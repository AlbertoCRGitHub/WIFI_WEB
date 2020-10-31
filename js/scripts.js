

/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);







     
        
//Calculatrice
    $( "#calculatrice" ).submit(function( event ) {
        event.preventDefault();
    });
    $("#calculer").click(function(){
        var etage = $("#etage").val();
        var place = $("#position").val();
        var persons = $('#quantite').val();

        if (etage == 1) {
            
            var total = persons;
            muestra(total);
            
        } else if (etage == 2){
            
            var total = persons * 2;
            muestra(total);

        }else{
            if (place == 1){
                var total = 2 * persons ;
                muestra(total);
            }else{
              
                        var total = "la madre";
                        danger();
               
             
            }       
        };
     function muestra(total){
        $(".container__recommandation").addClass("recommandation__visible");
        var textArea = $("#recommandation").text("Vous avez besoin d'un minimum de: \n " + total + " Mbps \n de vitesse de internet pour éviter les coupures et les ralentissements de votre Wi-Fi"); 
      }
      function danger(){
        $(".container__recommandation").addClass("recommandation__visible");
        var textArea = $("#recommandation").text("Vous besoin relocaliser votre routeur vers le Rez-de-Chaussée ou demander un rende-vous pour optimiser votre Wi-Fi");
      }

      
     




    });
      




})(jQuery); // End of use strict

/** Checkout */
/****Modal1****/ 
(function() {
  var stripe = Stripe('pk_live_51HbWAyDU8E6zoNrNPP3OjJJ3j6ccTEwVR3HLchsWyMJbtP7s6DYzqDdeb9Hdy8pkWG8Rv8FeK3kuZuJD30iD8ROh00ZC0e00oL');

  var checkoutButton = document.getElementById('checkout-button-price_1HiLSxDU8E6zoNrNkdmOMmod');
  checkoutButton.addEventListener('click', function () {

    stripe.redirectToCheckout({
      lineItems: [{price: 'price_1HiLSxDU8E6zoNrNkdmOMmod', quantity: 1}],
      mode: 'payment',

      successUrl: window.location.protocol + '//optiwifi.netlify.app/Succes',
      cancelUrl: window.location.protocol + '//optiwifi.netlify.app/Error',
    })
    .then(function (result) {
      if (result.error) {

        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
})();


/****Modal2****/   


/****Modal3****/    
(function() {
    var stripe = Stripe('pk_live_51HbWAyDU8E6zoNrNPP3OjJJ3j6ccTEwVR3HLchsWyMJbtP7s6DYzqDdeb9Hdy8pkWG8Rv8FeK3kuZuJD30iD8ROh00ZC0e00oL');
    var checkoutButton = document.getElementById('checkout-button-price_1HiLVmDU8E6zoNrN2pP4PSHg');
    checkoutButton.addEventListener('click', function () {
      stripe.redirectToCheckout({
        lineItems: [{price: 'price_1HiLVmDU8E6zoNrN2pP4PSHg', quantity: 1}],
        mode: 'payment',
        successUrl: window.location.protocol + '//optiwifi.netlify.app/Succes',
        cancelUrl: window.location.protocol + '//optiwifi.netlify.app/Error',
      })
      .then(function (result) {
        if (result.error) {
          var displayError = document.getElementById('error-message');
          displayError.textContent = result.error.message;
        }
      });
    });
  })();