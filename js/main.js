$(document).ready(function(){
	

var rand_num = [
	"001",
	"002",
	"003",
	"004",
	"005",
	"006",
	"007",
	"008",
	"009",
	"010",
	"011",
	"012",
	"013",
	"014",
	"015",
	"016",
	"017",
	"018",
	"019",
	"020",
	"021",
	"022",
	"023",
	"024",
	"025",
	"026",
	"027",
	"028",
	"029",
	"030",
	"031",
	"032",
	"033",
	"034",
	"035",
	"036",
	"037",
	"038",
	"039",
	"040",
	"041",
	"042",
	"043",
	"044",
	"045",
	"046",
	"047",
	"048",
	"049",
	"050"
];
var element_hide = Math.random();
var bg_num=[
    '01',
    '02',
    '03',
    '04'
];
var getRandom = function (min, max) {
	return Math.floor(Math.random() * (max - min)) + min+'px';
};
// random background
   // var randon_bg = $('.randon_bg');
    var bg_background = $('.page-id-homepage');
   /* randon_bg.each(function(){
        $(this).attr( 'src', 'http://animals.dbrqx.com/index1/img/desktop/bg/brqx_animals_clean_v'+bg_num[(Math.floor(Math.random() * (4 - 1)) )]+'_2017.svg' );
    });
*/  
    bg_background.each( function(){
        $(this).css('background', 'url(http://animals.dbrqx.com/index1/img/desktop/bg/brqx_animals_clean_v'+bg_num[(Math.floor(Math.random() * (4 - 1)) )]+'_2017.svg');
        $(this).css('background-size', 'cover');
    } );
  
    
//reload on resize window
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      $(window).resize(function(){
          
          if( windowWidth !=  $(window).width() || windowHeight != $(window).height() ){
              location.reload();
              return;
          }
          
      });
    
 
    
//random image load   
    if( element_hide > .5 ){
        $('.left_tree,.animal_head,.right_tree,.snake_1,.footer_bg').show();
        $('.hippopotamus').show();
        $('.snake_light_17').hide();
        $('.tiger_light_top,.hippopotamus_light_top,.lion_light_top_06,.snake_light_top_40').hide();
    }else{
        $('.left_tree,.animal_head,.right_tree,.snake_1,.footer_bg').hide();
        $('.hippopotamus,.lion_2').hide();
        $('.snake_light_17').show();
        $('.tiger_light_top,.hippopotamus_light_top,.lion_light_top_06,.snake_light_top_40').show();
    }
    if( element_hide >= .6 ){
        $('.zebra_light_37').show();
        $('.animal_003').show();
    }else{
        $('.zebra_light_37').hide();
        $('.animal_003').hide();
    }
    if( element_hide < .6 && element_hide >=.4 ){
        $('.zebra_light_36').show();
        $('.animal_022').show();
    }else{
        $('.zebra_light_36').hide();
        $('.animal_022').hide();
    }
        
    if( element_hide < .4 ){
        $('.zebra_light_24').show();
        $('.animal_022').show();
    }else{
        $('.zebra_light_24').hide();
        $('.animal_022').hide();
    }
    
    
 /* 
  var images = [
  'http://animals.dbrqx.com/index1/img/desktop/bg/brqx_animals_clean_v03_2017.png',
  'http://animals.dbrqx.com/index1/img/desktop/bg/brqx_animals_clean_v03_2017.png',
  'http://animals.dbrqx.com/index1/img/desktop/bg/brqx_animals_clean_v01_2017.png'
]

var which = Math.floor(Math.random() * images.length);
var img = document.getElementById('theimage');
img.src = images[which];
img.title = images[which];  
 
 //$('.left_tree,.left_tree').hide();   

var classes = [
  'class_1',
  'class_2',
  'class_1'
]
var cls= classes[Math.floor(Math.random()*classes.length)]
    
$(function() {
    $('.left_tree,.bird_1,.animal_head').addClass(cls);
});
var classe_right = [
  'class_Right_1',
  'class_right_2'
]
var clss= classe_right[Math.floor(Math.random()*classe_right.length)]
    
$(function() {
    $('.right_tree,.parrot,.snake_1').addClass(clss);
});
  /*  
var bgcolorlist = [
    'http://animals.dbrqx.com/index1/img/desktop/bg/brqx_animals_clean_v03_2017.png',
    'http://animals.dbrqx.com/index1/img/desktop/bg/brqx_animals_clean_v03_2017.png'
];

$(function() {
    $('.bg_desktop').css({
        background: url(bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)])
    });
});    
  */  
    
    
    
 //preloader-active
    $('body').addClass('preloader_active');
    
    
 /*    
  //background change  
   $('.bg_4k').hide(); 
   $('.bg_desktop').hide();
   $('.bg_tablet').hide();
    
    
   if( $(window).width() < 767 ){
            $('.bg_tablet').show();
            $('.bg_4k').hide(); 
            $('.bg_desktop').hide();
    }
    
    if( $(window).width() >= 768 && $(window).width() <= 991 ){
            $('.bg_tablet').show();
            $('.bg_4k').hide(); 
            $('.bg_desktop').hide();
    }
     
   
    if( $(window).width() >= 992 && $(window).width() <= 1920 ){
            $('.bg_tablet').hide();
            $('.bg_4k').hide(); 
            $('.bg_desktop').show();
    }
    if( $(window).width() >= 1921 && $(window).width() <= 3840 ){
            $('.bg_tablet').hide();
            $('.bg_4k').show(); 
            $('.bg_desktop').hide();
    }
          if (screen.width < 767) {
            $('.mobile').removeClass('hide');
        }else if (screen.width > 768 && screen.width < 1024) {
            $('.tablet').removeClass('hide');
        } if (screen.width > 1080 && screen.width < 1920) {
            $('.desktop').removeClass('hide');
        }
    
 $(window).on('resize', function(){
    $('.desktop,.tablet,.mobile').addClass('hide');
        if ($(window).width() < 767) {
            $('.mobile').removeClass('hide');
            //$('.tablet').addClass('hide');
            //$('.desktop').addClass('hide');
        }
     if( $(window).width() < 1024 ){
           // $('.mobile').addClass('hide');
            $('.tablet').removeClass('hide');
            //('.desktop').addClass('hide');
        }
     if( $(window).width() < 1920){
            //$('.mobile').addClass('hide');
            //$('.tablet').addClass('hide');
            $('.desktop').removeClass('hide');
        }
   
});
    
    
    
    // Adds and removes body class depending on screen width.
function screenClass() {
    if($(window).innerWidth() < 767) {
        $('.mobile').removeClass('hide');
    }
    if( $(window).innerWidth() < 1025 && $(window).innerWidth() > 767 ){
        $('.tablet').removeClass('hide');
    }
    if( $(window).innerWidth() < 1921 && $(window).innerWidth() > 1081 ){
        $('.desktop').removeClass('hide');
    }
    if( $(window).innerWidth() > 1922 ){
        $('.4k').removeClass('hide');
    }
}

// Fire.
screenClass();

// And recheck when window gets resized.
$(window).bind('resize',function(){
    screenClass();
});
    
    
//filter
  /*  $('.lion_2').mouseenter(function(){
        $(this).css('filter','brightness(1)');
    });
    $('.lion_2').mouseleave(function(){
        $(this).css('filter','brightness(.5)');
    }); 
    
    
  jQuery('img.svg').each(function(){
     var $img = jQuery(this);
      var imgID =$img.attr('id');
      var imgClass= $img.attr('class');
      var imgURL=$img.attr('src');
      jQuery.*/
 //info show
    $('#page_info').hide();
    $('.loading_lion_bg').hide();
    $('.loading_elephant').hide();
    $('.flag_area').hide();
    $('.lag_dark_hover').hide();
    $('.page_information').hide();
    $('.page_information_2').hide();
    $('.page_info_ziraph_kid').hide();
    $('.icon_shape').hide();
    
    
    $('.info_btn').mouseenter(function(){
        $('#page_info').toggle();
        $('.page_info_area').css('opacity', '1');
        //$('.loading_lion_bg').hide();
        //$('.loading_elephant').hide();
        //$('.page_info_area').css('opacity', 1);
    });
    $('.page_info_area').mouseenter(function(){
        $('.loading_lion_bg').show();
        $('.loading_elephant').show();
        $('.icon_shape').show();
        $('.page_information').show();
        $('.page_information_2').show();
        $('.page_info_ziraph_kid').show();
        $(this).css('opacity', '0');
        $('.elephant').css('z-index', 9999);
        $('.lion_light').css('z-index', 9999);
        $('.left_animal_plant,.right_animal_plant').css('z-index', 9999);
    });
    
    $('.page_information').mouseenter(function(){
        $('#page_info').hide();
        $('.loading_lion_bg').hide();
        $('.icon_shape').hide();
        $('.page_information_2').hide();
        $('.page_info_ziraph_kid').hide();
        $('.loading_elephant').hide();
        //$('.page_info_area').hide();
        //$('.flag_area').hide();
        $(this).hide();
        $('.elephant').css('z-index', 999999);
        $('.lion_light').css('z-index', 999999);
        $('.left_animal_plant,.right_animal_plant').css('z-index', 99999999);
    });
    $('.flag_lang').mouseenter(function(){
        $('.flag_area').fadeIn(500);
        $('.lag_dark_hover').show();
        $(this).fadeOut();
    });
    $('.flag_position').mouseleave(function(){
        $('.flag_lang').fadeIn(500);
        $('.lag_dark_hover').hide();
        //$(this).hide(500);
        $('.flag_area').fadeOut(500);
    });
    //$('.flag_go').click(function(){
        //$('.flag_position').fadeOut();
   // });
    

    
    
    
 //marquee effect for links 
    
    
$('.fotosia_tolpit,.morelinks_tolpit').hide();
//fotosia
    $('.fotosia').mouseenter(function(){
        $('.fotosia_tolpit').fadeIn(500);
    });
    $('.fotosia_tolpit').mouseenter(function(){
        $('.fotosia_tolpit').fadeIn(500);
    });
    $('.fotosia_tolpit').mouseleave(function(){
        $('.fotosia_tolpit').fadeOut(500);
    });
    $('.fotosia').mouseleave(function(){
        $('.fotosia_tolpit').fadeOut(500);
    });
//morelinks
    $('.more_links').mouseenter(function(){
        $('.morelinks_tolpit').fadeIn(500);
    });
    $('.morelinks_tolpit').mouseenter(function(){
        $('.morelinks_tolpit').fadeIn(500);
    });
    $('.morelinks_tolpit').mouseleave(function(){
        $('.morelinks_tolpit').fadeOut(500);
    });
    $('.more_links').mouseleave(function(){
        $('.morelinks_tolpit').fadeOut(500);
    });
 /* 
  $('.fotosia_link,.other_links').hide();
//fotosia
    $('.fotosia').mouseenter(function(){
        $('.fotosia_link').fadeIn();
        $('.fotosia p').hide();
    });
    $('.fotosia_link').mouseleave(function(){
        $('.fotosia_link').fadeOut();
        $('.fotosia p').show();
    });
    
 //more links
    $('.more_links').mouseenter(function(){
        $('.other_links').fadeIn();
        $('.more_links p').hide();
    });
    $('.other_links').mouseleave(function(){
        $('.other_links').fadeOut();
        $('.more_links p').show();
    });
    
   $('.right_arrow').mouseenter(function(){
       $('.fotosia_link_text').animate({
            left: '200px'
       
       },5000);
   });
   $('.right_arrow').mouseleave(function(){
       $('.fotosia_link_text').stop();
   });
   $('.left_arrow').mouseenter(function(){
       $('.fotosia_link_text').animate({
            left: '-200px'
       
       },5000);
   });
   $('.left_arrow').mouseleave(function(){
       $('.fotosia_link_text').stop();
   });
   */ 
  /*    //caption hover
    $('.position').mouseenter(function(){
        $('.slider_caption_area').addClass('active');
    });
    $('.slider_caption_area').mouseleave(function(){
        $('.slider_caption_area').removeClass('active');
    });  
  
   //toolpit
       $('.email_toolpit').hide();
       $('.phone_toolpit').hide();
    
       $('.email').hover(
        function(){
            $('.email_toolpit').next().show();
        },
        function(){
            $('.email_toolpit').next().hide();   
        }
    );
    
       $('.phone').mouseenter(
        function(){
            $('.email_toolpit').show();
        }
    );
       $('.phone').mouseleave(
        function(){
            $('.email_toolpit').hide();
        }
    );
    
 */   

    
    $('.de_flag,.en_flag,.es_flag,.fr_flag,.in_flag,.it_flag,.ja_flag,.pt_flag,.ru_flag,.us_flag,.zh_flag').hide();
    
    
    $('.flag_1').click(function(){
        $('.br_flag').fadeIn(500);
        $('.de_flag,.en_flag,.es_flag,.fr_flag,.in_flag,.it_flag,.ja_flag,.pt_flag,.ru_flag,.us_flag,.zh_flag').hide();
        $('.flag_area').fadeOut(500);
    });
    $('.flag_2').click(function(){
        $('.de_flag').fadeIn(500);
        $('.br_flag,.en_flag,.es_flag,.fr_flag,.in_flag,.it_flag,.ja_flag,.pt_flag,.ru_flag,.us_flag,.zh_flag').hide();
        $('.flag_area').fadeOut(500);
    });
    $('.flag_3').click(function(){
        $('.en_flag').fadeIn(500);
        $('.br_flag,.de_flag,.es_flag,.fr_flag,.in_flag,.it_flag,.ja_flag,.pt_flag,.ru_flag,.us_flag,.zh_flag').hide();
        $('.flag_area').fadeOut(500);
    });
    $('.flag_4').click(function(){
        $('.es_flag').fadeIn(500);
        $('.br_flag,.de_flag,.en_flag,.fr_flag,.in_flag,.it_flag,.ja_flag,.pt_flag,.ru_flag,.us_flag,.zh_flag').hide();
        $('.flag_area').fadeOut(500);
    });
    $('.flag_5').click(function(){
        $('.fr_flag').fadeIn(500);
        $('.br_flag,.de_flag,.en_flag,.es_flag,.in_flag,.it_flag,.ja_flag,.pt_flag,.ru_flag,.us_flag,.zh_flag').hide();
        $('.flag_area').fadeOut(500);
    });
    $('.flag_6').click(function(){
        $('.in_flag').fadeIn(500);
        $('.br_flag,.de_flag,.en_flag,.es_flag,.fr_flag,.it_flag,.ja_flag,.pt_flag,.ru_flag,.us_flag,.zh_flag').hide();
        $('.flag_area').fadeOut(500);
    });
    $('.flag_7').click(function(){
        $('.it_flag').fadeIn(500);
        $('.br_flag,.de_flag,.en_flag,.es_flag,.fr_flag,.in_flag,.ja_flag,.pt_flag,.ru_flag,.us_flag,.zh_flag').hide();
        $('.flag_area').fadeOut(500);
    });
    $('.flag_8').click(function(){
        $('.ja_flag').fadeIn(500);
        $('.br_flag,.de_flag,.en_flag,.es_flag,.fr_flag,.in_flag,.it_flag,.pt_flag,.ru_flag,.us_flag,.zh_flag').hide();
        $('.flag_area').fadeOut(500);
    });
    $('.flag_9').click(function(){
        $('.pt_flag').fadeIn(500);
        $('.br_flag,.de_flag,.en_flag,.es_flag,.fr_flag,.in_flag,.it_flag,.ja_flag,.ru_flag,.us_flag,.zh_flag').hide();
        $('.flag_area').fadeOut(500);
    });
    $('.flag_10').click(function(){
        $('.ru_flag').fadeIn(500);
        $('.br_flag,.de_flag,.en_flag,.es_flag,.fr_flag,.in_flag,.it_flag,.ja_flag,.pt_flag,.us_flag,.zh_flag').hide();
        $('.flag_area').fadeOut(500);
    });
    $('.flag_11').click(function(){
        $('.us_flag').fadeIn(500);
        $('.br_flag,.de_flag,.en_flag,.es_flag,.fr_flag,.in_flag,.it_flag,.ja_flag,.pt_flag,.ru_flag,.zh_flag').hide();
        $('.flag_area').fadeOut(500);
    });
    $('.flag_12').click(function(){
        $('.zh_flag').fadeIn(500);
        $('.br_flag,.de_flag,.en_flag,.es_flag,.fr_flag,.in_flag,.it_flag,.ja_flag,.pt_flag,.ru_flag,.us_flag').hide();
        $('.flag_area').fadeOut(500);
    });
    
    
    
    
    
    $('.india').hide();
    $('.square-button img').click(
        function(){
            $('.india').show();
        }
    );

  //carousel
   $('.image_1').mouseenter(function(){
        $('.item_1').addClass('current');
        $('.item_2,.item_3,.item_4,.item_5,.item_6,.item_7,.item_8').removeClass('current');
    });
    $('.image_2').mouseenter(function(){
        $('.item_1,.item_3,.item_4,.item_5,.item_6,.item_7,.item_8').removeClass('current');
        $('.item_2').addClass('current');
    });
    $('.image_3').mouseenter(function(){
        $('.item_1,.item_2,.item_4,.item_5,.item_6,.item_7,.item_8').removeClass('current');
        $('.item_3').addClass('current');
    });
    $('.image_4').mouseenter(function(){
        $('.item_1,.item_2,.item_3,.item_5,.item_6,.item_7,.item_8').removeClass('current');
        $('.item_4').addClass('current');
    });
    $('.image_5').mouseenter(function(){
        $('.item_1,.item_2,.item_3,.item_4,.item_6,.item_7,.item_8').removeClass('current');
        $('.item_5').addClass('current');
    });
    $('.image_6').mouseenter(function(){
        $('.item_1,.item_2,.item_3,.item_4,.item_5,.item_7,.item_8').removeClass('current');
        $('.item_6').addClass('current');
    });
    $('.image_7').mouseenter(function(){
        $('.item_1,.item_2,.item_3,.item_4,.item_5,.item_6,.item_8').removeClass('current');
        $('.item_7').addClass('current');
    });
    $('.image_8').mouseenter(function(){
        $('.item_1,.item_2,.item_3,.item_4,.item_5,.item_6,.item_7').removeClass('current');
        $('.item_8').addClass('current');
    });
    
    //animal_pic_sound
    
    $('.elephant_img').hide();
    $('.lion_img').hide();
    
    $('.elephant img').hover(function(){
        $('.elephant_img').show();
        $('.elephant_img').delay(5000).fadeOut('slow');
        $('.lion_img').hide();
    });
    $('.lion_2 img').hover(function(){
        $('.lion_img').show();
        $('.lion_img').delay(5000).fadeOut('slow');
        $('.elephant_img').hide();
    });
  //blazy

               ;(function() {
	            // Initialize
	            var bLazy = new Blazy({
					breakpoints: [{
					    width: 767, // max-width
						src: 'data-src-small'
					     },
					     {
					    width: 1024, // max-width
						src: 'data-src-medium'
					     },

				        {
					     width: 1920, // max-width
					     src: 'data-src-desktop'
					},

				        {
					     width: 3840, // max-width
					     src: 'data-src-large'
					}]
	            });
	        })();  
    
 //group_animals
 $('.left_animal_plant').mouseenter(function(){
     $('.group_left').css('z-index', '99999999');
 });   
 $('.right_animal_plant').mouseenter(function(){
     $('.group_right').css('z-index', '99999999');
 });   
    
 $('.group_left').mouseout(function(){
     $('.group_left').css('z-index', '99');
 }); 
 $('.group_right').mouseout(function(){
     $('.group_right').css('z-index', '99');
 });  
    
//hover animals
 $('.elephant_comic_info').hide();
 $('.monkey_comic_info').hide();
 $('.lion_comic_info').hide();
 $('.bird_1_comic_info').hide();
 $('.bird_2_comic_info').hide();
 $('.zebra_1_comic_info').hide();
 $('.panda_head_comic_info').hide();
 $('.ziraph_comic_info').hide();
 $('.lion_kid_comic_info').hide();
 $('.deer_light_comic_info').hide();
 $('.aligator_light_comic_info').hide();
 $('.parrot_light_comic_info').hide();
 $('.ziraph_kid_comic_info').hide();
 $('.snake_1_comic_info').hide();
 $('.zebra_kid_comic_info').hide();
 $('.hippopotamus_comic_info').hide();
 $('.tiger_head_comic_info').hide();
 $('.buffalo_right_comic_info').hide();
 $('.animal_head_comic_info').hide();
 $('.snake_2_comic_info').hide();
 $('.ostrich_comic_info').hide();
 $('.butterfly_light_comic_info').hide();
 $('.lion_2_comic_info').hide();
 $('.butterfly_light_2_comic_info').hide();
 $('.elephant_top_comic_info').hide();
 $('.lion_top_comic_info').hide();
 //$('.left_animal_group_comic_4').hide();
  
 $('.right_lion_comic_info').hide();
 $('.right_gorilla_comic_info').hide();
 $('.right_ziraph_comic_info').hide();
 //$('.right_animal_group_comic_4').hide();
 //$('.right_animal_group_comic_5').hide();
    
 $('.elephant_left').hover(function(){
     $('.elephant_comic_info').toggle();
 });   
//$('.elephant_left').hover(function(){
     //$('.left_animal_group_comic_2').toggle();
 //});   
$('.monkey_light').hover(function(){
     $('.monkey_comic_info').toggle();
 });   
$('.lion_left').hover(function(){
     $('.lion_comic_info').toggle();
 }); 
    
$('.lion_right').hover(function(){
     $('.right_lion_comic_info').toggle();
    $('.right_animal_plant').css('z-index', '9');
 }); 
$('.lion_right').mouseleave(function(){
    $('.right_animal_plant').css('z-index', '9999999');
 });  
$('.gorilla_right').hover(function(){
     $('.right_gorilla_comic_info').toggle();
 });     
$('.ziraph_right').hover(function(){
     $('.right_ziraph_comic_info').toggle();
     $('.right_animal_plant').css('z-index', '9');
 });
$('.ziraph_right').mouseleave(function(){
    $('.right_animal_plant').css('z-index', '99999');
})
$('.bird_2').hover(function(){
     $('.bird_1_comic_info').toggle();
 });    
$('.bird_1').hover(function(){
     $('.bird_2_comic_info').toggle();
 });   
$('.zebra_1').hover(function(){
     $('.zebra_1_comic_info').toggle();
 });  
$('.panda_head').hover(function(){
     $('.panda_head_comic_info').toggle();
 });  
$('.ziraph').hover(function(){
     $('.ziraph_comic_info').toggle();
 }); 
$('.lion_kid').hover(function(){
     $('.lion_kid_comic_info').toggle();
 });
$('.deer_light').hover(function(){
     $('.deer_light_comic_info').toggle();
 }); 
$('.aligator').hover(function(){
     $('.aligator_light_comic_info').toggle();
 });
$('.parrot_light').hover(function(){
     $('.parrot_light_comic_info').toggle();
 });
$('.ziraph_kid').hover(function(){
     $('.ziraph_kid_comic_info').toggle();
 }); 
$('.snake_1').hover(function(){
     $('.snake_1_comic_info').toggle();
 });
$('.zebra_kid').hover(function(){
     $('.zebra_kid_comic_info').toggle();
 });
$('.hippopotamus').hover(function(){
     $('.hippopotamus_comic_info').toggle();
 }); 
$('.tiger_head').hover(function(){
     $('.tiger_head_comic_info').toggle();
 }); 
$('.buffalo_right').hover(function(){
     $('.buffalo_right_comic_info').toggle();
 });  
$('.animal_head').hover(function(){
     $('.animal_head_comic_info').toggle();
 });  
$('.snake_2').hover(function(){
     $('.snake_2_comic_info').toggle();
 });  
$('.left_animal_group_3').hover(function(){
     $('.ostrich_comic_info').toggle();
 }); 
$('.butterfly_light_2').hover(function(){
     $('.butterfly_light_2_comic_info').toggle();
 }); 
$('.lion_2').hover(function(){
     $('.lion_2_comic_info').toggle();
 });
$('.butterfly_light').hover(function(){
     $('.butterfly_light_comic_info').toggle();
 }); 
$('.elephant').hover(function(){
     $('.elephant_top_comic_info').toggle();
 });  
$('.lion_light').hover(function(){
     $('.lion_top_comic_info').toggle();
 }); 
    
 /*    
$('.lion_right').mouseleave(function(){
     $('.right_animal_group_comic_1').hide();
 });     
$('.deer_right').hover(function(){
     $('.right_animal_group_comic_3').toggle();
 });     
$('.buffalo_right').hover(function(){
     $('.right_animal_group_comic_5').toggle();
 });   
 */   
  
    
        // Custom cookie global object to store all cookie related stuff
        var cookie = function() {
            function setCookie(name, value, expires, path, domain) {
                //value MUST NOT BE encoded and expires must me of UTC/GMT format
                var cookie = name + "=" + encodeURIComponent(value) + ";";
                if (!!expires) {
                    cookie += "expires=" + expires + ";";
                }
                if (!!path) {
                    cookie += "path=" + path + ";";
                }
                if (domain) {
                    cookie += "domain=" + domain + ";";
                }
                document.cookie = cookie;
            };

            function getCookie(cname) {
                var name = cname + "=";
                //cookie value must alwasy be encoded with uriEncodeComponent
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }

            return {
                setCookie: setCookie,
                getCookie: getCookie
            }

        }();   
    
        //cookie banner to show for first time visitor
        //must be at last of every thing
      ! function() {

            if ($("body").hasClass("page-id-homepage")) {
                if ( !cookie.getCookie("ever_visited_animal") ) {

                    var expires = new Date();
                    expires.setFullYear(expires.getFullYear() + 1);
                    expires = expires.toUTCString();

                    cookie.setCookie("ever_visited_animal", "NO", expires);
                    //alert("set cookie for first visit");

                    $(".cookies").show();

                    $(".cookies").addClass("fadein");

                    var hasrun = false;

                    function cookieHider() {
                        $(document).off(allEvents, cookieHider);
                        if (!hasrun) {
                            hasrun = false;
                            $(".cookies").delay(5000).queue(function() {
                                console.log("2 sec passed");
                                $(this).addClass("fadeout").dequeue();
                            }).delay(3000).queue(function() {
                                console.log("5 sec passed");
                                $(this).hide().dequeue();
                            });
                        }
                    }

                    //all events exept onload ready etc
                    var allEvents = 'blur change click contextmenu dblclick error focus focusin focusout hover keydown keyup keypress mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup scroll select submit touchstart wheel';
                    $(document).one(allEvents, cookieHider);
                }else{
                    $(".cookies").hide();
                }

            }
        }(); 
    
    
    //setTimeout('$(".cookies").addClass("fadein")',3000);
   
/*
   //brightness settup
        function moveSlider(e){
           
           var pos = $(e.currentTarget).offset();
           var posX = e.pageX - pos.left;
           var value = posX+100/$(e.currentTarget).outerWidth();
        
           if( posX >=0 && posX<= $(e.currentTarget).outerWidth() ){

               $('.progress').css('width', posX+'px');
               $('.indicator').css('left', posX+'px'); 
               $('#valueSlider').val(value);
                    if( posX+100/$(e.currentTarget).outerWidth() > 0 && posX+100/$(e.currentTarget).outerWidth() < 50 ){
                           $('.lag_dark').show();
                           $('.lag_dark_2').hide();
                           $('.lag_dark_3').hide();
                           $('.lag_dark_4').hide();
                    }
                    if( posX+100/$(e.currentTarget).outerWidth() > 50 && posX+100/$(e.currentTarget).outerWidth() < 105 ){
                           $('.lag_dark').hide();
                           $('.lag_dark_2').show();
                           $('.lag_dark_3').hide();
                           $('.lag_dark_4').hide();
                    }
                    if( posX+100/$(e.currentTarget).outerWidth() > 105 && posX+100/$(e.currentTarget).outerWidth() < 150 ){
                           $('.lag_dark').hide();
                           $('.lag_dark_2').hide();
                           $('.lag_dark_3').show();
                           $('.lag_dark_4').hide();
                    }
                    if( posX+100/$(e.currentTarget).outerWidth() > 150 && posX+100/$(e.currentTarget).outerWidth() < 201 ){
                           $('.lag_dark').hide();
                           $('.lag_dark_2').hide();
                           $('.lag_dark_3').hide();
                           $('.lag_dark_4').show();
                    }

           }
       }

	
   $('.br_slider').on('mousedown', function(e){
       
       moveSlider(e);
       $(this).on('mousemove', function(e){
          moveSlider(e); 
       });

   }).on('mouseup', function(){
       $(this).off('mousemove');
   });
*/  
 });

$('.bright_bg').hide(500);
$('.brightness_icon').on('mouseenter', function(){
    $('.bright_bg').fadeIn(500);
});
$('.bright_bg').on('mouseleave', function(){
    $('.bright_bg').fadeOut(500);
});








  //sound   
 /*           var Lion_bleep = new Audio();
            var eliphant_bleep = new Audio();
            var toucan_sound = new Audio();
            var pig_sound = new Audio();
            var parrot_sound = new Audio();
            var aligator_sound = new Audio();
            var monkey_sound = new Audio();
            var tiger_sound = new Audio();
            var zebra_sound = new Audio();
            var rhinoceros_sound = new Audio();
            var panda_bear_sound = new Audio();
            var deer_sound = new Audio();
            var snake_sound = new Audio();
            var ziraph_sound = new Audio();
            var buffalo_sound = new Audio();
            var gorilla_sound = new Audio();

            Lion_bleep.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_lion_sound.mp3";
            eliphant_bleep.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_elephant_sound.mp3";
            toucan_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_toucan_sound.mp3";
            pig_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_hippopotamus_sound.mp3";
            parrot_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_parrot_sound.mp3";
            aligator_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_aligator_sound.mp3";
            monkey_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_monkey_sound.mp3";
            tiger_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_tiger_sound.mp3";
            zebra_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_zebra_sound.mp3";
            rhinoceros_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_rhinoceros_sound.mp3";
            panda_bear_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_panda_bear_sound.mp3";
            deer_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_deer_sound.mp3";
            snake_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_snake_sound.mp3";
            ziraph_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_ziraph_sound_1.mp3";
            buffalo_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_buffalo_sound.mp3";
            gorilla_sound.src ="http://animals.dbrqx.com/index1/sounds/brqx_animals_gorilla_sound.mp3";

            function playSound(){
                Lion_bleep.play();
            }  

            function elephantSound(){
                eliphant_bleep.play();
            } 
            function toucanSound(){
                toucan_sound.play();
            }
            function pigSound(){
                pig_sound.play();
            }
            function parrotSound(){
                parrot_sound.play();
            } 
            function aligatorSound(){
                aligator_sound.play();
            }
            function monkeySound(){
                monkey_sound.play();
            } 
            function tigerSound(){
                tiger_sound.play();
            } 
            function zebraSound(){
                zebra_sound.play();
            }
            function rhinocerosSound(){
                rhinoceros_sound.play();
            } 
            function pandaBearSound(){
                panda_bear_sound.play();
            } 

            function deerSound(){
                deer_sound.play();
            } 
            function snakeSound(){
                snake_sound.play();
            } 
            function ziraphSound(){
                ziraph_sound.play();
            } 
            function buffaloSound(){
                buffalo_sound.play();
            } 
            function gorillaSound(){
                gorilla_sound.play();
            } */

//animal sound control
  
        var btnWrapper = document.getElementById('btnWrapper');
        var main_btn = document.getElementById('main_btn');
        var box = document.getElementById('box');
        var status = false;


    var Lion_bleep = document.createElement('audio');
    var eliphant_bleep = document.createElement('audio');
    var toucan_sound = document.createElement('audio');
    var pig_sound = document.createElement('audio');
    var parrot_sound = document.createElement('audio');
    var aligator_sound = document.createElement('audio');
    var monkey_sound = document.createElement('audio');
    var tiger_sound = document.createElement('audio');
    var zebra_sound = document.createElement('audio');
    var rhinoceros_sound = document.createElement('audio');
    var panda_bear_sound = document.createElement('audio');
    var deer_sound = document.createElement('audio');
    var snake_sound = document.createElement('audio');
    var ziraph_sound = document.createElement('audio');
    var buffalo_sound = document.createElement('audio');
    var gorilla_sound = document.createElement('audio');


    Lion_bleep.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_lion_sound.mp3');
    eliphant_bleep.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_elephant_sound.mp3');
    toucan_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_toucan_sound.mp3');
    pig_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_hippopotamus_sound.mp3');
    parrot_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_parrot_sound.mp3');
    aligator_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_aligator_sound.mp3');
    monkey_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_monkey_sound.mp3');
    tiger_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_tiger_sound.mp3');
    zebra_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_zebra_sound.mp3');
    rhinoceros_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_rhinoceros_sound.mp3');
    panda_bear_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_panda_bear_sound.mp3');
    deer_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_deer_sound.mp3');
    snake_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_snake_sound.mp3');
    ziraph_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_ziraph_sound_1.mp3');
    buffalo_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_buffalo_sound.mp3');
    gorilla_sound.setAttribute('src', 'http://animals.dbrqx.com/index1/sounds/brqx_animals_gorilla_sound.mp3');
    
  /*  audioElement.addEventListener('ended', function() {
        this.play();
    }, false);*/
    
  /*  audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });
    
    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });*/
               
  
        
 main_btn.addEventListener('click', function(){
            
            if(status == 'true'){// if status = true
                 main_btn.style.left = '0px';
                 btnWrapper.style.background = 'lightgrey';
                 btnWrapper.style.border = '1px solid lightgrey';
                 status = false;
                  //lion
                $('.lion_2,.lion_light,.lion_kid,.lion_right,.lion_left').mouseenter(function() {
                    Lion_bleep.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.lion_2,.lion_light,.lion_kid,.lion_right,.lion_left').mouseleave(function() {
                    Lion_bleep.pause();
                    Lion_bleep.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //elephant
                $('.elephant,.elephant_left').mouseenter(function() {
                    eliphant_bleep.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.elephant,.elephant_left').mouseleave(function() {
                    eliphant_bleep.pause();
                    eliphant_bleep.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //toucan
                $('.bird_1,.bird_2').mouseenter(function() {
                    toucan_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.bird_1,.bird_2').mouseleave(function() {
                    toucan_sound.pause();
                    toucan_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //pig
                $('.hippopotamus').mouseenter(function() {
                    pig_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.hippopotamus').mouseleave(function() {
                    pig_sound.pause();
                    pig_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //parrot
                $('.parrot_light').mouseenter(function() {
                    parrot_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.parrot_light').mouseleave(function() {
                    parrot_sound.pause();
                    parrot_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //aligator_sound
                $('.aligator').mouseenter(function() {
                    aligator_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.aligator').mouseleave(function() {
                    aligator_sound.pause();
                    aligator_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //monkey_sound
                $('.monkey_light').mouseenter(function() {
                    monkey_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.monkey_light').mouseleave(function() {
                    monkey_sound.pause();
                    monkey_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //tiger_sound
                $('.tiger_head').mouseenter(function() {
                    tiger_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.tiger_head').mouseleave(function() {
                    tiger_sound.pause();
                    tiger_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //zebra_sound
                $('.zebra_1,.zebra_kid').mouseenter(function() {
                    zebra_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.zebra_1,.zebra_kid').mouseleave(function() {
                    zebra_sound.pause();
                    zebra_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //rhinoceros_sound
                $('.animal_head').mouseenter(function() {
                    rhinoceros_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.animal_head').mouseleave(function() {
                    rhinoceros_sound.pause();
                    rhinoceros_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //panda_bear_sound
                $('.panda_head').mouseenter(function() {
                    panda_bear_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.panda_head').mouseleave(function() {
                    panda_bear_sound.pause();
                    panda_bear_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //deer_sound
                $('.deer_light,.deer_right').mouseenter(function() {
                    deer_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.deer_light,.deer_right').mouseleave(function() {
                    deer_sound.pause();
                    deer_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //snake_sound
                $('.snake_1').mouseenter(function() {
                    snake_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.snake_1').mouseleave(function() {
                    snake_sound.pause();
                    snake_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //ziraph_sound
                $('.ziraph,.ziraph_kid,.ziraph_right').mouseenter(function() {
                    ziraph_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.ziraph,.ziraph_kid,.ziraph_right').mouseleave(function() {
                    ziraph_sound.pause();
                    ziraph_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //buffalo_sound
                $('.buffalo_left,.buffalo_right').mouseenter(function() {
                    buffalo_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.buffalo_left,.buffalo_right').mouseleave(function() {
                    buffalo_sound.pause();
                    buffalo_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //gorilla_sound
                $('.gorilla_right').mouseenter(function() {
                    gorilla_sound.pause();
                    //$("#status").text("Status: Playing");
                });
                $('.gorilla_right').mouseleave(function() {
                    gorilla_sound.pause();
                    gorilla_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

              /*  $('#restart').click(function() {
                    audioElement.currentTime = 0;
                });*/ 
            
                
                
               }else{
                 main_btn.style.left = (btnWrapper.offsetWidth - main_btn.offsetWidth -2)+'px';
                 btnWrapper.style.background = '#7bc77b';
                 btnWrapper.style.border = '1px solid #7bc77b';
                 status = true;  //lion
                $('.lion_2,.lion_light,.lion_kid,.lion_right,.lion_left').mouseenter(function() {
                    Lion_bleep.play();
                    //$("#status").text("Status: Playing");
                });
                $('.lion_2,.lion_light,.lion_kid,.lion_right,.lion_left').mouseleave(function() {
                    Lion_bleep.pause();
                    Lion_bleep.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //elephant
                $('.elephant,.elephant_left').mouseenter(function() {
                    eliphant_bleep.play();
                    //$("#status").text("Status: Playing");
                });
                $('.elephant,.elephant_left').mouseleave(function() {
                    eliphant_bleep.pause();
                    eliphant_bleep.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //toucan
                $('.bird_1,.bird_2').mouseenter(function() {
                    toucan_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.bird_1,.bird_2').mouseleave(function() {
                    toucan_sound.pause();
                    toucan_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //pig
                $('.hippopotamus').mouseenter(function() {
                    pig_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.hippopotamus').mouseleave(function() {
                    pig_sound.pause();
                    pig_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //parrot
                $('.parrot_light').mouseenter(function() {
                    parrot_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.parrot_light').mouseleave(function() {
                    parrot_sound.pause();
                    parrot_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //aligator_sound
                $('.aligator').mouseenter(function() {
                    aligator_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.aligator').mouseleave(function() {
                    aligator_sound.pause();
                    aligator_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //monkey_sound
                $('.monkey_light').mouseenter(function() {
                    monkey_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.monkey_light').mouseleave(function() {
                    monkey_sound.pause();
                    monkey_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

            //tiger_sound
                $('.tiger_head').mouseenter(function() {
                    tiger_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.tiger_head').mouseleave(function() {
                    tiger_sound.pause();
                    tiger_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //zebra_sound
                $('.zebra_1,.zebra_kid').mouseenter(function() {
                    zebra_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.zebra_1,.zebra_kid').mouseleave(function() {
                    zebra_sound.pause();
                    zebra_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //rhinoceros_sound
                $('.animal_head').mouseenter(function() {
                    rhinoceros_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.animal_head').mouseleave(function() {
                    rhinoceros_sound.pause();
                    rhinoceros_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //panda_bear_sound
                $('.panda_head').mouseenter(function() {
                    panda_bear_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.panda_head').mouseleave(function() {
                    panda_bear_sound.pause();
                    panda_bear_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //deer_sound
                $('.deer_light,.deer_right').mouseenter(function() {
                    deer_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.deer_light,.deer_right').mouseleave(function() {
                    deer_sound.pause();
                    deer_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //snake_sound
                $('.snake_1').mouseenter(function() {
                    snake_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.snake_1').mouseleave(function() {
                    snake_sound.pause();
                    snake_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //ziraph_sound
                $('.ziraph,.ziraph_kid,.ziraph_right').mouseenter(function() {
                    ziraph_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.ziraph,.ziraph_kid,.ziraph_right').mouseleave(function() {
                    ziraph_sound.pause();
                    ziraph_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //buffalo_sound
                $('.buffalo_left,.buffalo_right').mouseenter(function() {
                    buffalo_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.buffalo_left,.buffalo_right').mouseleave(function() {
                    buffalo_sound.pause();
                    buffalo_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });
            //gorilla_sound
                $('.gorilla_right').mouseenter(function() {
                    gorilla_sound.play();
                    //$("#status").text("Status: Playing");
                });
                $('.gorilla_right').mouseleave(function() {
                    gorilla_sound.pause();
                    gorilla_sound.currentTime = 0;
                    //$("#status").text("Status: Paused");
                });

              /*  $('#restart').click(function() {
                    audioElement.currentTime = 0;
                });*/ 
               }

        });
$('.sound_tolpt').hide();
$('#btnWrapper').hover(function(){
    $('.sound_tolpt').toggle();
});

//animal sound control ends


 //flag_area   
 $(window).load(function() {

  //policy fadeout   
//$('.cookies').addClass('fadeout');  
     
//preloader
    $('#preloader').fadeOut(350);
    $('.animal_preloader').fadeOut(350);
    $('body').removeClass('preloader_active');



/* randomAnimals start */
    let randomAnimals = $('.randomAnimals');
    console.log(randomAnimals);


/* randomAnimals end */
});




/* randomAnimals start */

    allAnimals = [
        'bg_animal_001_lion_light',
        'bg_animal_002_giraffe_light',
	'bg_animal_003_deer_light',
	'bg_animal_004_elephant_light',
	'bg_animal_005_lion_light',
	'bg_animal_006_lion_light',
	'bg_animal_007_hippopotamus_light',   
	'bg_animal_008_rhino_light',
	'bg_animal_009_toucan_light',
	'bg_animal_010_lion_light',
	'bg_animal_011_lion_light',
	'bg_animal_012_monkey_light',
	'bg_animal_013_elephant_light',
	'bg_animal_014_monkey_light',
	'bg_animal_015_ostrich_light',
	'bg_animal_016_snake_light',
	'bg_animal_017_snake_light',
	'bg_animal_018_tiger_light',
	'bg_animal_019_lion_light',
	'bg_animal_020_giraffe_light',
	'bg_animal_021_antelope_light',
	'bg_animal_022_antelope_light',
	'bg_animal_023_zebra_light',
	'bg_animal_024_zebra_light',
	'bg_animal_025_buffalo_light',
	'bg_animal_026_buffalo_light',
	'bg_animal_027_buffalo_light',
	'bg_animal_028_buffalo_light',
	'bg_animal_029_gorilla_light',
	'bg_animal_030_gorilla_light',
	'bg_animal_031_giraffe_light',
	'bg_animal_032_toucan_light',
	'bg_animal_033_parrot_light',
	'bg_animal_034_panda_bear_light',
	'bg_animal_035_giraffe_light',
	'bg_animal_036_zebra_light',
	'bg_animal_037_zebra_light',
	'bg_animal_038_tiger_light',
	'bg_animal_039_snake_light',
	'bg_animal_040_snake_light',
	'bg_animal_041_butterfly_light',
	'bg_animal_042_butterfly_light',
	'bg_animal_043_aligator_light'
    ];

    let randomAnimals = $('.randomAnimals');
    randomAnimals.each(function(){
        
    })


/* randomAnimals end */
