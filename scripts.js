    
    $(document).ready(function(){
        var w = $( window ).width();
        var h = $( window ).height();
        var colors = ["pink", "teal", "beige", "LightSlateGrey",  "brown", "#f1f1f1"]
        var names = ["Bernadette Figueroa", "Harrie Park", "Danielle Beatriz Go", "Rebecca D'Agostino", "Aira Patricia Dolfo", "Jizheng Chen", "Shreya Chittaranjan", "Emiliano Flores", "Rebecca Mesonjnik", "Min Jung Park", "Stephanie Lin", "Nika Diomidovskaia", "Sabrina Hang", "Shih-Ju Fu", "Hyun Ji Jo", "Sunayana Bali"]
        var ticker = 0;
        
     $("#circle").mousedown(function(){
         var randomColor = colors[ticker];
         var randomName = names[Math.floor(Math.random()*names.length)]
                $("#circle").css("background-color", randomColor)
                         $("button").css("background-color", randomColor)
                        $(".course").css("background-color", randomColor)
                         $("body").css("background-color", randomColor)
                                  $("#randName").text(randomName)

         ticker+=1;
         if(ticker==colors.length){
             ticker=0;
         }
         })
        
    
        
        $("#studentSites").mousedown(function(){
            $("#students").toggle();
            $("#plus").toggle();
            $("#minus").toggle();

        })

        
        
           function getTime(){
          var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("time").innerHTML =  t  ;
            }
        getTime()
        
       setInterval(function(){
     getTime()
        },1000)
        
     })

//write a script using js only inHTMLing .active p's with random names
