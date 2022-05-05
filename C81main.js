canvas= document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="red"
width=2    
var screenwidth=screen.width
newwidth=screen.width-70
newheight=screen.height-30
if(screenwidth<992){
document.getElementById("myCanvas").width=newwidth
document.getElementById("myCanvas").height=newheight
document.body.style.overflow="hidden"
}
var mouse_event=""
var lastPositionOfX,lastPositionOfY
canvas.addEventListener("touchstart",my_touchstart)
function my_touchstart(e){
mouse_event="touchstart"
color=document.getElementById("color").value
width=document.getElementById("width").value
lastPositionOfX=e.touches[0].clientX-canvas.offsetLeft
lastPositionOfY=e.touches[0].clientY-canvas.offsetTop
}

canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e){
    current_position_of_mouse_x= e.touches[0].clilentX- canvas.offsetLeft;
    current_position_of_mouse_y= e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=width
        ctx.moveTo(lastPositionOfX,lastPositionOfY)
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
        ctx.stroke()
        
    lastPositionOfX=current_position_of_mouse_x
    lastPositionOfY=current_position_of_mouse_y
}
function clear_area(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
