this.randomtip = function(){

  var pause = 2000; // define the pause for each tip (in milliseconds) Feel free to make the pause longer so users can have time to read the tips :)
  var length = $("#tips li").length; 
  var temp = -1;    

  this.getRan = function(){
    // get the random number
    var ran = Math.floor(Math.random()*length) + 1;
    return ran;
  };
  this.show = function(){
    var ran = getRan();
    // to avoid repeating tips we need to check 
    while (ran == temp){
      ran = getRan();
    }; 
    temp = ran;
    $("#tips li").hide(); 
    $("#tips li:nth-child(" + ran + ")").fadeIn("fast");    
  };
  // initiate the script and also set an interval
  show(); setInterval(show,pause);
  
};

$(document).ready(function(){ 
  randomtip();
});

    $(document).ready(function() {
      $("#menu_btn").click(function(){
      $("#sub_menu").slideToggle("slow");
      });
    
    });

        $(document).ready(function() {

            $(".signin").click(function(e) {          
        e.preventDefault();
                $("fieldset#signin_menu").toggle();
        $(".signin").toggleClass("menu-open");
            });
      
      $("fieldset#signin_menu").mouseup(function() {
        return false
      });
      $(document).mouseup(function(e) {
        if($(e.target).parent("a.signin").length==0) {
          $(".signin").removeClass("menu-open");
          $("fieldset#signin_menu").hide();
        }
      });     
      
        });


                
        var tpj=jQuery;
        tpj.noConflict();
        
        tpj(document).ready(function() {
        
        if (tpj.fn.cssOriginal!=undefined)
          tpj.fn.css = tpj.fn.cssOriginal;

          tpj('.fullwidthbanner').revolution(
            { 
              delay:9000,                       
              startwidth:890,
              startheight:450,
              
              onHoverStop:"on",           // Stop Banner Timet at Hover on Slide on/off
              
              thumbWidth:100,             // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
              thumbHeight:50,
              thumbAmount:4,
              
              hideThumbs:200,
              navigationType:"both",          //bullet, thumb, none, both  (No Shadow in Fullwidth Version !)
              navigationArrows:"verticalcentered",    //nexttobullets, verticalcentered, none
              navigationStyle:"round",        //round,square,navbar
              
              touchenabled:"on",            // Enable Swipe Function : on/off
              
              navOffsetHorizontal:0,
              navOffsetVertical:20,
              
              fullWidth:"on",
              
              shadow:0                //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
                            
            }); 
          
          
          
            
      });



function contact()

{

  document.getElementById("div_success").style.display = "none";
  document.getElementById("div_success").innerHTML = "";
  document.getElementById("error").style.display = "none";
  document.getElementById("error").innerHTML = "";
  var name        = document.getElementById("name");
  var email         = document.getElementById("email");
  var phone       = document.getElementById("phone"); 
  var message       = document.getElementById("message");     
  var errors = "";

  

  if(name.value=="")
  {

    errors+= 'Пожалуйста введите ваше Имя .<br />';

  }


  

  else if(phone.value == "")

  {

    errors+= 'Пожалуйста введите номер.<br />';

  }

  else if(isNaN(phone.value))

  {

    errors+= '<br />';

  }
else if(email.value=="")

  {

    errors+= 'Полайста введите ваш email.<br />';

  } 

  else if(checkcontact(email.value)==false) 

  {

    errors+= '';

  }
  else if(message.value=="")

  {

    errors+= 'Введите сообщение.<br />';

  }



  if(errors)

  { 

    document.getElementById("error").style.display = "block";

    document.getElementById("error").innerHTML = errors;

  } 

  else 

  { 

    document.form.submit();

  }

}

function checkcontact(input)

{

  var pattern1=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

  if(pattern1.test(input))

  {

    return true;

  }

  else

  {

    return false;

  }

}
