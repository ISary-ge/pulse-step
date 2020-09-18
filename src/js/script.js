
    'use strict';
    let slides = document.querySelectorAll(".carousel__item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        slideIndex = 1;

    function showSlides(n){
        if(n > slides.length){
            slideIndex = 1;
        }else if(n < 1){
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = "none");
        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click',() => plusSlides(-1));
    next.addEventListener('click',() => plusSlides(1));
    showSlides(slideIndex);

    document.querySelectorAll('.catalog-item__link').forEach(function(item){
        item.addEventListener('click',function(e){
            e.preventDefault();
            this.parentNode.style.display = 'none';
            this.parentNode.parentNode.querySelector('.catalog-item__more').style.display = 'block';
        })
    })

    document.querySelectorAll('.link_back').forEach(function(item){
        item.addEventListener('click',function(e){
            e.preventDefault();
        this.parentNode.parentNode.querySelector('.catalog-item__more').style.display = 'none';
        this.parentNode.parentNode.querySelector('.catalog-item__main').style.display = 'block';
        })
    })

    document.querySelectorAll('.catalog__tab').forEach(function(item,i){
        item.addEventListener('click', function(){
            document.querySelectorAll('.catalog__tab').forEach(function(item){
                item.classList.remove('catalog__tab_active');
            })
            document.querySelectorAll('.catalog__content').forEach(function(item){
                item.classList.remove('catalog__content_active');})
            this.classList.add("catalog__tab_active");
            document.querySelectorAll('.catalog__content')[i].classList.add("catalog__content_active");
        })
    })

    const FadeModal = function(btn ,modalType){
        document.querySelectorAll(btn).forEach(function(item,i){
            item.addEventListener('click',function(){
                document.querySelector('.overlay').style.display = 'block';
                document.querySelector(modalType).style.display = 'block';
                if(modalType === '#order'){ 
                    document.querySelectorAll('.modal__descr')[1].innerHTML = document.querySelectorAll('.catalog-item__subtitle')[i].textContent;
                }
            })
        })
    }

    const closeModal = function(){
        document.querySelectorAll('.modal__close').forEach(function(item){
            item.addEventListener('click',function(){
                document.querySelector('.overlay').style.display = 'none';
                this.parentNode.style.display = 'none';
            })
        })
    }

    FadeModal('.btn_consult','#consultation');
    FadeModal('.button__mini', '#order');
    closeModal();
    
    // document.querySelectorAll('.btn_consult').forEach(function(item){
    //     item.addEventListener('click',function(){
    //         document.querySelector('.overlay').style.display = 'block';
    //         document.querySelector('#consultation').style.display = 'block';
    //     })
    // })

    // document.querySelectorAll('.button__mini').forEach(function(item,i){
    //     item.addEventListener('click',function(){
    //         document.querySelector('.overlay').style.display = 'block';
    //         document.querySelector('#order').style.display = 'block';
    //         document.querySelectorAll('.modal__descr')[1].innerHTML = document.querySelectorAll('.catalog-item__subtitle')[i].textContent;

    //     })
    // })



    
   