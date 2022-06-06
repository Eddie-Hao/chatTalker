$(document).ready(function () {
    //一開始隱藏.back-top
    $(".back-top").hide();
    
    //在畫面上執行滾動時
    $(window).on("scroll", function () {
      //如果滾動超過400則.fadeIn進入否則.fadeOut
      if ($(this).scrollTop() > 100) {
        $(".back-top").fadeIn("fast");
      } else {
        $(".back-top").stop().fadeOut("fast");
      }
    });

    //點擊.back-top-取消a連結的預設，執行動畫滾動至頂部
    $(".back-top").click(function (e) {
        e.preventDefault();
        $("html,body").animate({ scrollTop: 0 }, 600);
    });



    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          //786以上顯示2個
          768: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          //992以上顯示3個
          992: {
            slidesPerView: 3,
            spaceBetween: 16
          }
      
        }
      });
    


  });
  
  $(document).ready(function () {
        //執行收費方案
        $('.plan-btn-item').click(function() {
          //當點擊的按鈕文字相符合時
          if($(this).text()=='10000位'){
            //移除同層的實心樣式，加入外框樣式
            $(this).siblings().removeClass('btn-primary').addClass('outline-primary');
            //刪除本體的樣框樣式，加入實心樣式
            $(this).removeClass('outline-primary').addClass('btn-primary');
            //為該class的內容，覆蓋文字
            $('.num-text1').text('10000');
            $('.num-text2').text('600');
            $('.num-text3').text('10000');
            $('.num-text4').text('1600');
          }else if($(this).text()=='15000位'){
            $(this).siblings().removeClass('btn-primary').addClass('outline-primary');
            $(this).removeClass('outline-primary').addClass('btn-primary');
            $('.num-text1').text('15000');
            $('.num-text2').text('900');
            $('.num-text3').text('15000');
            $('.num-text4').text('2400');
          }else if($(this).text()=='20000位'){
            $(this).siblings().removeClass('btn-primary').addClass('outline-primary');
            $(this).removeClass('outline-primary').addClass('btn-primary');
            $('.num-text1').text('20000');
            $('.num-text2').text('1200');
            $('.num-text3').text('20000');
            $('.num-text4').text('3200');
          }else if($(this).text()=='25000位'){
            $(this).siblings().removeClass('btn-primary').addClass('outline-primary');
            $(this).removeClass('outline-primary').addClass('btn-primary');
            $('.num-text1').text('25000');
            $('.num-text2').text('1500');
            $('.num-text3').text('25000');
            $('.num-text4').text('4000');
          }else if($(this).text()=='>25000位'){
            $(this).siblings().removeClass('btn-primary').addClass('outline-primary');
            $(this).removeClass('outline-primary').addClass('btn-primary');
            $('.num-text1').text('>20000');
            $('.num-text2').text('1800');
            $('.num-text3').text('>25000');
            $('.num-text4').text('4800');
          };
        });

        //常見問題的開合
        $('.qa-item').click(function(e){
          e.preventDefault();
          //點擊本體時其他兩個會變回原型
          $(this).parent().siblings().find('p').slideUp('fast');
          $(this).parent().siblings().find('.qa-item-title').removeClass('text-primary').removeClass('text-bold');
          $(this).parent().siblings().find('.qa-plus').removeClass('d-none');
          $(this).parent().siblings().find('.qa-minus').addClass('d-none');
          //點擊本體會產生的樣式
          $(this).find('.qa-item-title').toggleClass('text-primary').toggleClass('text-bold');
          $(this).find('.qa-plus').toggleClass('d-none');
          $(this).find('.qa-minus').toggleClass('d-none');
          $(this).siblings('p').slideToggle('fast').toggleClass('d-none');

        });
  })      