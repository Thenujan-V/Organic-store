const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/2228306/pexels-photo-2228306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];



let image = document.getElementById('pic');
let nextArrow = document.getElementById('rightArrow');
let previousArrow = document.getElementById('leftArrow');
let index = 0;

window.addEventListener("DOMContentLoaded",function(){
    let testimonial = data[0];
    loadedTestimonial(testimonial);;
});
function loadedTestimonial(ele){
    image.src = ele.img;
}

nextArrow.addEventListener('click',() => {
    index++;
    if(index > data.length-1){
        index = 0;
    }
    loadedTestimonial(data[index]);
})
previousArrow.addEventListener('click',() => {
    index--;
    if(index < 0){
        index = data.length-1;
    }
    loadedTestimonial(data[index]);
})
function autoload(){
    index++;
    if(index > data.length-1){
        index = 0;
    }
    else if(index < 0){
        index = data.length-1;
    }
    loadedTestimonial(data[index]);
}
setInterval(autoload,3000)
