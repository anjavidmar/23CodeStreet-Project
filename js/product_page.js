// colour change:

$("#colourOne").click(function(){
  $('.mainimg').css("background-color", "#C9CBA3");
  $('.chooseimg').css("background-color", "#C9CBA3");
});

$("#colourTwo").click(function(){
  $('.mainimg').css("background-color", "#FFE1A8");
  $('.chooseimg').css("background-color", "#FFE1A8");
});

$("#colourThree").click(function(){
  $('.mainimg').css("background-color", "#E26D5C");
  $('.chooseimg').css("background-color", "#E26D5C");
});

$("#colourFour").click(function(){
  $('.mainimg').css("background-color", "#723D46");
  $('.chooseimg').css("background-color", "#723D46");
});

$("#colourFive").click(function(){
  $('.mainimg').css("background-color", "#472D30");
  $('.chooseimg').css("background-color", "#472D30");
});

// image change:

$("#imageOne").click(function(){
  $('#mainImage').attr("src", "images/PP/camera_logo_1.png");
});

$("#imageTwo").click(function(){
  $('#mainImage').attr("src", "images/PP/camera_logo_2.png");
});

$("#imageThree").click(function(){
  $('#mainImage').attr("src", "images/PP/camera_logo_3.png");
});

$("#imageFour").click(function(){
  $('#mainImage').attr("src", "images/PP/camera_logo_4.png");
});

$("#imageFive").click(function(){
  $('#mainImage').attr("src", "images/PP/camera_logo_5.png");
});
