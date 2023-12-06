//sticky nav

const headerRow=document.querySelector(".container-fluid");

window.addEventListener("scroll",function(e){
   
if(65 < window.scrollY){
    headerRow.classList.add("sticky");

}else{
    headerRow.classList.remove("sticky");
}
})