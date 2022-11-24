$(document).ready(function(){
    $("#button").click(function(){
      $("#paragraph").hide();
    });
  });

//   dblclick
  $(document).ready(function(){
    $("#click-me").dblclick(function(){
      $("#image").hide();
    });
  });

  // mouseenter()
  $(document).ready(function(){
    $(".printing").mouseenter(function(){
      alert("Welcome to my page");
    });
  });

  // mouseleave()
  $(document).ready(function(){
    $(".papa").mouseleave(function(){
      alert("Thank you! for you time.");
    });
  });
 

// hover()

$(document).ready(function(){
  $(".hover-h").hover(function(){
    alert("Entery!");
  },
  function(){
    alert("Exit!");
  }); 
});

// focus

$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});

// The on() Method
$(document).ready(function(){
  $("p").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    }  
  });
});

// jQuery hide() and show()

$(document).ready(function(){
  $("#hide").click(function(){
    $("img").hide();
  });
  $("#show").click(function(){
    $("img").show();
  });
});

// fade in and fade out
$(document).ready(function(){
  $("button").click(function(){
    $(".dive1").fadeIn();
    $(".dive2").fadeIn("slow");
    $(".dive3").fadeIn(3000);
  });
});
$(document).ready(function(){
  $("button").click(function(){
    $(".dive1").fadeOut(7000);
    $(".dive2").fadeOut(7000);
    $(".dive3").fadeOut(7000);
  });
});

// jQuery fadeToggle() Method this both code cant use

$(document).ready(function(){
  $("button").click(function(){
    $("#toggle1").fadeToggle();
    $("#toggle2").fadeToggle("slow");
    $("#toggle3").fadeToggle(3000);
  });
});

// $(document).ready(function(){
//   $("button").click(function(){
//     $("#toggle1").fadeTo("slow", 0.15);
//     $("#toggle2").fadeTo("slow", 0.4);
//     $("#toggle3").fadeTo("slow", 0.7);
//   });
// });


// JQuery slide

$(document).ready(function(){
  $("#clip").click(function(){
    $("#lane").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#clip").click(function(){
    $("#lane").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#lane").stop();
  });
});

// jQuery animate() - Manipulate Multiple Properties
$(document).ready(function(){
  $("button").click(function(){
    $(".nothing").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});


// jQuery animate() - Manipulate Multiple Properties

$(document).ready(function(){
  $("#Start-Animation").click(function(){
    var div = $(".devil");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});

// jQuery Callback Functions

$(document).ready(function(){
  $(".butt").click(function(){
    $(".clas").hide(1000);
    alert("The paragraph is now hidden");
  });
});

// jQuery - Chaining
$(document).ready(function(){
  $("#clickme").click(function(){
    $("#p1").css("color", "red")
      .slideUp(6000)
      .slideDown(6000);
  });
});

// jQuery - Get Content and Attributes
$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
});
// jQuery - Set Content and Attributes
$(document).ready(function(){
  $("#btn4").click(function(){
    $("#test1").text("Love");
  });
  $("#btn5").click(function(){
    $("#test2").html("<b>Your</b>");
  });
  $("#btn6").click(function(){
    $("#test3").val("Self");
  });
});
// Set Attributes - attr()
$(document).ready(function(){
  $("visitme").click(function(){
    $("#ButteCollege").attr({
      "href" : "http://www.butte.edu/departments/cas/tipsheets/grammar/articles.html",
      "title" : "Butte College"
    });
  });
});

// jQuery after() and before() Methods

function afterText() {
  var txt1 = "<b>I </b>";    
  var txt2 = $("<i></i>").text("love ");  
  var txt3 = document.createElement("b");   
  txt3.innerHTML = "One Piece";
  $("img").after(txt1, txt2, txt3);    
}
// jQuery empty() Method & jQuery remove() Method
$(document).ready(function(){
  $("#em").click(function(){
    $("#laptop").empty();
  });
});

$(document).ready(function(){
  $("#rm").click(function(){
    $("#laptop").remove();
  });
});

$(document).ready(function(){
  $("#btb").click(function(){
    $("#h1, #h2, #p").addClass("blue");
    $("#div").addClass("important");
  });
});

$(document).ready(function(){
  $("#bttb").click(function(){
    $("#div").addClass("important green");
  });
});

$(document).ready(function(){
  $("#rv").click(function(){
    $("#h1, #h2, #p").removeClass("blue");
  });
});

$(document).ready(function(){
  $("#tgl").click(function(){
    $("#h1, #h2, #p").toggleClass("blue");
  });
});

//   css() Method
$(document).ready(function(){
  $("#zz").click(function(){
    alert("Background color = " + $("h5").css("background-color"));
  });
});

$(document).ready(function(){
  $("#xy").click(function(){
    $("h5").css("background-color", "yellow");
  });
});

$(document).ready(function(){
  $("#xyz").click(function(){
    $("h5").css({"background-color": "red", "font-size": "200%"});
  });
});

//   Dimensions
$(document).ready(function(){
  $("#dime").click(function(){
    var txt = "";
    txt += "Width of div: " + $("#div11").width() + "</br>";
    txt += "Height of div: " + $("#div1").height() + "</br>";
    txt += "Inner width of div: " + $("#div11").innerWidth() + "</br>";
    txt += "Inner height of div: " + $("#div11").innerHeight()+ "</br>";
    txt += "Outer width of div: " + $("#div11").outerWidth() + "</br>";
    txt += "Outer height of div: " + $("#div11").outerHeight() + "</br>";
    txt += "Outer width of div (margin included): " + $("#div11").outerWidth(true) + "</br>";
    txt += "Outer height of div (margin included): " + $("#div11").outerHeight(true);
    $("#div11").html(txt);
  });
});

$(document).ready(function(){
  $("#dimd").click(function(){
    var txt = "";
    txt += "Document width/height: " + $(document).width();
    txt += "x" + $(document).height() + "\n";
    txt += "Window width/height: " + $(window).width();
    txt += "x" + $(window).height();
    alert(txt);
  });
});

$(document).ready(function(){
  $("#rset").click(function(){
    $("#div11").width(500).height(500);
  });
});