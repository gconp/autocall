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
         $("#slide").html('<img src=' + app.UrlArr[app.counter]+ ' class="imgStyle"></img>');
     },

     show_next: function() {
         if (app.counter <= 4) {
                app.counter++;               			
                 $("#slide").html('<img src=' + app.UrlArr[app.counter]+ ' id="lavi" class="imgStyle"></img>');
              			   
             }
      },
     show_pre: function() {
         if (app.counter > 0) {		     
             $("#slide").html('<img src=' + app.UrlArr[app.counter - 1] + ' class="imgStyle"></img>');			 	
             app.counter--;
         }
		  else{
		  location. reload(true);
		 }
     }
	}

 $(window).load(function() {
     app.init();
 });