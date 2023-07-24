let clickUnshow = document.querySelector("#none").value;
let div = document.getElementById("show");
const clear = () => {
   clickUnshow.classList.toggle("none");
};
console.log(clear());
console.log(div);