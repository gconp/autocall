 var app = {
      UrlArr: [
         "img/slide1.png",
         "img/slide2.png",
         "img/slide3.png",
         "img/slide4.png",
         "img/slide5.png",
		 "img/slideg.gif"
		 ],
     counter: 0,
     init: function() {
         $('body').show();
         $('body').bind('contextmenu', function(e) {
             return false;
         });
          $("#slide").html('<img src=' + app.UrlArr[app.counter]+ ' class="imgStyle"/>');
     },

     show_next: function() {
         if (app.counter <= 4) {
                 app.counter++;               			
                 $(".imgStyle").attr('src',app.UrlArr[app.counter]);              			   
             }
			 if(app.counter==5){
			 setInterval(function(){
	          app.show_pre()},3000);
			 }
      },
     show_pre: function() {
         if (app.counter > 0) {		     
             // $("#slide").html('<img src=' + app.UrlArr[app.counter - 1] + ' class="imgStyle"/>');	
             $(".imgStyle").attr('src',app.UrlArr[app.counter - 1]);  			 
             app.counter--;
         }
		 
        if(app.counter==1) {
		 setInterval(function(){
	 app.show_next()},3000);
		 }
     }
	}

 $(window).load(function() {
     app.init();
	 setInterval(function(){
	 app.show_next()},3000);
 });