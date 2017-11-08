$(document).ready(function(){
  /*
  you have to include this in html
  //div for different filter
  
          <div class="lag_dark"></div>
          <div class="lag_dark_2"></div>
          <div class="lag_dark_3"></div>
          <div class="lag_dark_4"></div> 
css for filter div

    .lag_dark{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(2, 13, 25, 0.20);
    display: none;
}
.lag_dark_2{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(2, 13, 25, 0.50);
    display: none;
}
.lag_dark_3{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(2, 13, 25, 0.70);
    display: block;
}
.lag_dark_4{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(2, 13, 25, 1);
    display: none;
}
          
//brightness label switch
        <div class="bright_bg"> 
          <div class="br_slider">
              <div class="emptyprogress"></div>
              <div class="progress"></div>
              <div class="indicator"></div>
          </div> 
        </div>
    and css for label switch

.bright_bg {
    display: inline-block;
    position: absolute;
    top: 29%;
    left: 41%;
    z-index: 99999999;
    background: #fff;
    width: 250px;
    height: 50px;
    padding: 15px 25px;
}
.br_slider{
    position: relative;
    width: 200px;
    height: 20px;
    display: inline-block;
    background: url(http://animals.dbrqx.com/index1/img/grid.png) center center;
    background-size: contain;
}
.progress{
    background: #14aaf6;
    position: absolute;
    height: 60%;
    top: 4px;
    width: 50%;
}
.emptyprogress{
    background: #97d9fb;
    position: absolute;
    height: 60%;
    top: 4px;
    width: 100%;
}
.indicator{
    background: url(http://animals.dbrqx.com/index1/img/pointer_1.png) no-repeat;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 10%;
    left: 50%;
    margin-left: -5%;
}
*/
    
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



});