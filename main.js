var current_postion_of_mouse_x;
var current_postion_of_mouse_y;
var current_postion_of_touch_x;
var current_postion_of_touch_y;
var mouseEvent;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "";
var radius = "";
var width = "";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
  color = document.getElementById("color").value;
  width = document.getElementById("width").value;
  radius = document.getElementById("radius").value;
  mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
  mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
  mouseEvent = "mouseLeave";
}

  canvas.addEventListener("mousemove", my_touchmove);

function my_touchmove(e){
  current_position_of_touches_x = e.touches - canvas.offsetLeft;
  current_position_of_touches_y = e.touches - canvas.offsetTop;
  

    console.log("current postion x and y is")
    console.log("x = " + current_postion_of_touch_x + " y = " + current_postion_of_touch_y );
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(current_postion_of_touch_x, current_postion_of_touch_y, radius, 0, 2*Math.PI);
    ctx.stroke();
}
  
  canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  current_position_of_mouse_y = e.clientY - canvas.offsetTop;
  
  if (mouseEvent == "mouseDown") {
    console.log("current postion x and y is")
    console.log("x = " + current_position_of_mouse_x + " y = " + current_position_of_mouse_y );
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
    ctx.stroke();
  }
}

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=4;
ctx.rect(0, 0, 400, 300);
ctx.fillStyle = "#BDBDBD";
ctx.fill();
ctx.stroke();
