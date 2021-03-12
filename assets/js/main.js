$(document).ready(function(){
    //Fade Out Loader
    setTimeout(function(){ 
        $(".loader").delay(700).fadeOut("700"); 
    });   
    
    //Fade In Modal
    setTimeout(function() {
        $("#modal").modal('show', {}, 500);
    }, 2000);
    
    //Check Box
    $('.modal__main-check').click(function(){
        $('.modal__main-check').toggleClass('checked');
    });  

    $('.actions__remember').click(function(){
        $(this).toggleClass('checked');
    })

    $('.main__checkbox').click(function(){
        $(this).toggleClass('checked');
    })

    $('.payment__item-checkbox').click(function(){
        $(this).addClass('checked');
        $('.payment__item-checkbox').not(this).removeClass('checked');

        $(this).siblings().slideDown();
        $('.payment__item-checkbox').not(this).siblings().slideUp();
    })
    
      //Scroll Up
      $(window).on('scroll', function() {
		if ($(this).scrollTop() > 150) {
			$('.scroll').fadeIn();
		} else {
			$('.scroll').fadeOut();
		}
    });
    
    $(".scroll").on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 600);
    });

    //Dropdown Menu
    let icon =  document.querySelector(".ti-menu");
    $('.icon__item-btn').click(function(){
        $('.icon__item-menu').slideToggle();
        if(icon.classList.contains("ti-menu")){
            icon.classList.remove("ti-menu");
            icon.classList.add("ti-close");
        }else{
            icon.classList.remove("ti-close");
            icon.classList.add("ti-menu");
        }
    });

    

    // Fixed Menu
    let header = document.querySelector(".header");
    window.addEventListener('scroll', () => {
        header.classList.toggle('fixed', window.scrollY > 119);
    });

    //Open Search
    $('#search').click(function(){
        $('.icon__item-search, .icon__item-layout').addClass('open');
    })

    //Close Search
    $('.search__close').click(function(){
        $('.icon__item-search, .icon__item-layout').removeClass('open');
    });

    //Dropdown Menu
    let menuItem = document.querySelectorAll(".menu__item");
   
    menuItem.forEach(function(item){
        item.addEventListener('click', function(){
        $('.menu__item').not(this).children('.menu__item-dropdown').removeClass('show');
        this.lastElementChild.classList.toggle('show');
        })
    })

    // Open Answer
    $('.faq__list-item').click(function(){
            $(this).children('.item__answer').slideToggle(); 
            $('.faq__list-item').not(this).children('.item__answer').hide();
            $(this).children('.item__faq').children('.item__faq-icon').children('.ti-plus').toggleClass('hide');
            $(this).children('.item__faq').children('.item__faq-icon').children('.ti-minus').toggleClass('hide');
            $('.faq__list-item').not(this).children('.item__faq').children('.item__faq-icon').children('.ti-plus').removeClass('hide');
            $('.faq__list-item').not(this).children('.item__faq').children('.item__faq-icon').children('.ti-minus').addClass('hide');

    })

    //Active Menu
    $('.dropdown__item-link').click(function(){
        if($(this).attr('href') == window.location.pathname.split('/').pop()){
            $(this).addClass('active');
        }
    })


  
    

    let cart = document.querySelectorAll(".icon__item-link");
    cart.forEach(function(item){
        item.addEventListener('click', function(){
            this.nextElementSibling.classList.toggle('show')
            
        })
    })

    let menuSelect = document.querySelectorAll(".top__items-item");
    menuSelect.forEach(function(item){
        item.addEventListener('click', function(){
            this.lastElementChild.classList.toggle('show')
        })
    })

    //Open Checkout Dropdown
    $('.main__info-btn').click(function(){
        $(this).parent().parent().siblings().slideToggle();
    })

    $('.main__checkbox').click(function(){
        $(this).siblings('.main__form').slideToggle();
    })


    //Select Dropdown Menu
    // let menuSelectItem = document.querySelectorAll(".item__link");
    
    // menuSelectItem.forEach(function(item){
    //     item.addEventListener('click', function(){
    //        this.parentElement.parentElement.parentElement.firstElementChild.innerHTML = item.innerHTML;
    //         console.log(item.innerText);
    //     })
    // })

    let select = document.querySelectorAll(".top__items-item");
    select.forEach(function(item){
        item.querySelectorAll('.item__link').forEach(function(itemLink) {
            itemLink.addEventListener('click', function() {
                item.querySelector('.item__text').innerHTML = this.innerHTML;
            })
        })
    })

    //Choose Product Image
    // let productImg = document.querySelector(".product__image");
    // productImg.querySelectorAll(".gallery__link").forEach(function(item){
    //     item.addEventListener('click', function(){
    //         $(".item").not(this).children(".gallery__link").removeClass('active');
    //         this.classList.add("active");
    //         productImg.querySelector(".product__image-box").innerHTML = this.innerHTML;
    //     })
    // })

    //Choose Product Color
    let color = document.querySelectorAll(".switch__item");
    color.forEach(function(item){
        item.addEventListener('click', function(){
            $(".info__color-switch").not(this).children(".switch__item").removeClass('active');
            this.classList.add('active');
        })
    })

    let color2 = document.querySelectorAll(".content__color");
    color2.forEach(function(item){    
        item.querySelectorAll(".content__color-span").forEach(function(span){
            span.addEventListener('click', function(){
                
                for(let i = 0; i < item.querySelectorAll(".content__color-span").length; i++) {
                    item.querySelectorAll(".content__color-span")[i].classList.remove('active');
                    this.classList.add('active');
                }
            })
        })
    })


    //Choose Product Size
    let size = document.querySelectorAll(".switch__item1");
    size.forEach(function(item){
        item.addEventListener('click', function(){
            $(".info__size-switch").not(this).children(".switch__item1").removeClass('active');
            this.classList.add('active');
        })
    })

    


    // Banner Slide
    $('.banner__slide').owlCarousel({
        loop:true,
        mouseDrag:false,
        touchDrag:false,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Trending Slide
    $('.trending__slide').owlCarousel({
        loop:true,
        margin:30,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },

            767:{
                items:3
            },  
            
            1000:{
                items:4
            }
        }
    });

    // Instagram Slide
    $('.instagram__slide').owlCarousel({
        loop:true,
        dots:false,
        autoplay: true,
        responsive:{ 
            0:{
                items:2
            },
            480:{
                items:3
            },

            767:{
                items:4
            },

            991:{
                items:6
            },
            1000:{
                items:6
            }
        }
    });

    // Client Slide
    $('.client__slide').owlCarousel({
        loop:true,
        dots:false,
        margin:30,
        autoplay: true,
        responsive:{ 
            0:{
                items:2
            },
            480:{
                items:3
            },
            767:{
                items:3
            },
            991:{
                items:4
            },
            1000:{
                items:5
            }
        }
    });

    // Product Image Slide
    $('.product__image-gallery').owlCarousel({
        dots:false,
        
        margin: 10,
        responsive:{ 
            0:{
                items:4
            },
            
            1000:{
                items:4
            }
        }
    });

    // $('.product__image-gallery2').owlCarousel({
    //     dots:false,
    //     nav:true,
    //     margin:10,

    //     responsive:{ 
    //         0:{
    //             items:4
    //         },
            
    //         1000:{
    //             items:4
    //         }
    //     }
    // });

    //Related Product
    $('.relate__slide').owlCarousel({
        loop:true,
        dots:true,
        margin:20,
        responsive:{ 
            0:{
                items:1
            },

            445:{
                items:2
            },

            767:{
                items:2
            },
            
            991:{
                items:3
            },

            1000:{
                items:4
            }
        }
    });

    //Client Slide
    $('.client2__slide').owlCarousel({
        dots:false,
        loop:true,
        autoplay:true,
        nav:true,
        responsive:{ 
            0:{
                items:1
            },
            
            1000:{
                items:1
            }
        }
    });

    // Owl Carousel Previous Button
    $("span[aria-label*='Previous']").html("<i class='ti-arrow-left'></i>");
    // Owl Carousel Next Button
    $("span[aria-label*='Next']").html("<i class='ti-arrow-right'></i>");


    // Close Zoom
    let close = document.querySelectorAll('.close-zoom');
    close.forEach(function(item){
        item.addEventListener('click', function(){
            $('.zoomContainer').remove();
        })
    })

    // let modal = document.querySelectorAll('.modal-dialog');
    //     modal.forEach(function(item){
    //         item.addEventListener('click', function(){
    //             $('.zoomContainer').remove();
    //         })
    //     })
    
    

    //Zoom
    $("#zoomModal").on('shown.bs.modal', function (){
        $("#zoompro").elevateZoom({
            gallery: "gallery",
            galleryActiveClass: "active",
            
            easing: true,
            zoomType: 'inner',
            cursor: 'crosshair',
        });
    });

    $("#zoompro2").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        easing: true,
        zoomType: 'inner',
        cursor: 'crosshair',
    });

    //Rate
    let star = document.querySelectorAll(".star__item");
    star.forEach(function(item){
        item.addEventListener('click', function(){
            this.classList.add('active');
            this.previousElementSibling.classList.add('active');
            this.nextElementSibling.classList.remove('active');
        })
    })

    // //Fancy Box
    // $(".box__btn").on("click", function () {
    //     // set gallery targets
    //     var gallery = [{
    //         href: "assets/images/product_img1.jpg"
    //     }, {
    //         href: "assets/images/product_img1-2.jpg"
    //     }, {
    //         href: "assets/images/product_img1-3.jpg"
    //     }, {
    //         href: "assets/images/product_img1-4.jpg"
    //     }];
    //     // triggers fancybox programmatically
    //     $.fancybox(gallery, {
    //         // API options here
    //     });
    //     return false; // prevents default and stops propagation 
    // });



    //Plus and Minus Product
    let plusBtn = document.querySelector(".quantity__plus");
    let minusBtn = document.querySelector(".quantity__minus");
    let input = document.querySelector(".quantity__qtn");
    plusBtn.addEventListener('click', function(){
        input.value = parseInt(input.value) + 1;   
    })

    minusBtn.addEventListener('click', function(){
        if(parseInt(input.value) > 1){
            input.value = parseInt(input.value) - 1;   
        }else{
            input.value = parseInt(input.value) - 0; 
        }   
    })

});