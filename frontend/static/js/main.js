let left = document.getElementById('prev-span')
let right = document.getElementById('next-span')
let images = document.getElementById('image-container')

// function slideLeft(){
//  alert('hello')
//  // images.style.margin="60px"
// }

// function slideRight(){
//  alert('hello')
//  // images.style.margin="60px"
// }


// jquery code for the image slider




// const cheerio = require('cheerio');
// const $ = cheerio.load('<span class="prev-span">');






//  let check="";

// let drops = document.getElementById("drops");


// let bodies = document.getElementById("blury");

//     function redi() {
//         window.location.href="about.html";
// 	}     
	
// 	window.onscroll = function(){
// 	    let scroller = document.getElementById("myLinks");
// 	    scroller.style.display="none";
// 	}
	

// function Dropdown() {
//   let drop = document.getElementById("myLinks");
  
//   if (drop.style.display === "block") {
// 		drop.style.display = "none";
		
// 	  } else { 
// 		drop.style.display = "block";
// 		drop.style.animationName="show";
// 		drop.style.animationDuration="2s";
// 		drop.style.marginBottom="150px";
	
// 	  }
// 	}




$(document).ready(function(){
$("#icon").click(function(){
$("#myLinks").slideToggle(800); //dropdown menu for home page
});
});
    
   
//     let drop = document.getElementById("myLinks");
//     let clicker = document.getElementById("icon");
//      let bodied = document.getElementById("mybody");
   
//     if (check=="" || check=="0"){
//      	drop.style.opacity = "1";
//      	check="1";
     	
//     }
//     else{
//       	drop.style.opacity = "0";  
//       		check="0";
//     }
    
// 	}

// window.onclick=function (event){
//   if (event.target == drop){
//     drop.style.display = "none";
//   }
// }
	  
// 	  {
// 		x.style.display = "none";
// 	  } else {
// 		x.style.display = "block";
// 	  }
	  
// 	}



$(document).ready(function(){
 $(window).scroll(function(){
 if ($(window).scrollTop() > 700) 
 {
  $(".content2").slideDown(1700);
  
 }
 
 if ($(window).scrollTop() > 800) //These are animations for flexed and grid content
 {
   $(".content3").fadeIn(1800);
 }
 
  if ($(window).scrollTop() > 600) 
 {
   $(".content4").slideDown(1500);
 }
 
 });
});
	





// function AHead() {
//     let y = document.getElementById("aboutlinks");
	  
// 	  if (y.style.display === "block") {
// 		y.style.display = "none";
// 	  } else {
// 		y.style.display = "block";
// 	  }
// 	}

$(document).ready(function(){
$("#icon").click(function(){
 $("#aboutlinks").slideToggle(600);  //dropdown menu for about page
});
});

$(document).ready(function(){
$(".services").click(function(){
 $(".spserve").slideToggle(600);  //our services dropdown
});
});



    





$(document).ready(function(){
$('.prev-span').click(function () {
    console.log('ok')
    $('.image-container').animate({
        scrollLeft: '-=510'
    }, 1000);
});
});

$(document).ready(function(){
$('.next-span').click(function () {
    console.log('ok')
    $('.image-container').animate({
        scrollLeft: '+=510'
    }, 1000);
});
});


 //The mailer:

 $(document).ready(function() {

  var form = $('#form'),
      email = $('#email'),
      subject = $('#subject'),
      message = $('#message'),
      info = $('#info'),
      submit = $("#submit");
  
  form.on('input', '#email, #subject, #message', function() {
    $(this).css('border-color', '');
    info.html('').slideUp();
  });
  
  submit.on('click', function(e) {
    e.preventDefault();
    if(validate()) {
      $.ajax({
        type: "POST",
        url: "mailer.php",
        data: form.serialize(),
        dataType: "json"
      }).done(function(data) {
        if(data.success) {
          email.val('');
          subject.val('');
          message.val('');
          info.html('Message sent!').css('color', 'green').slideDown();
        } else {
          info.html('Could not send mail! Sorry!').css('color', 'red').slideDown();
        }
      });
    }
  });
  
  function validate() {
    var valid = true;
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(!regex.test(email.val())) {
      email.css('border-color', 'red');
      valid = false;
    }
    if($.trim(subject.val()) === "") {
      subject.css('border-color', 'red');
      valid = false;
    }
    if($.trim(message.val()) === "") {
      message.css('border-color', 'red');
      valid = false;
    }
    
    return valid;
  }

});
