//https://cdn.pixabay.com/photo/2024/04/05/17/47/ai-generated-8677874_960_720.jpg--dark land
//https://cdn.pixabay.com/photo/2018/08/29/13/15/landscape-3639879_960_720.jpg --water mountain
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

lightBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
});

darkBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});