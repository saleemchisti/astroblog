var images=document.getElementsByClassName("a")
for(i=1;i<=images.length;i++)
{
    images[i-1].setAttribute("src","../asset/images/Planets/"+i+".jpg")
    images[i-1].style.width="220px"
    images[i-1].style.height="220px"
}
console.log(images)
// this is for header
var indval=0;
var imagesarr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"]
 
 function openImg(pic,name,info)
 {
    document.getElementById("subWindow").removeAttribute("style")
    document.getElementById("subWindowImg").src='../asset/images/Planets/'+pic+".jpg"
    document.getElementById("imageHeading").innerHTML=name;
    document.getElementById("imgpara").innerHTML=info;
 }
 function closeImg()
 {
    document.getElementById("subWindow").setAttribute("style","display:none")

 }