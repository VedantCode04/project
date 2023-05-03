let slider = document.querySelector('.password-box input');
let button = document.querySelector('.generate');
let password = document.querySelector('.inputbox input');
let options = document.querySelectorAll('.options input');
let text = document.querySelector('.inputbox input');
let copy = document.getElementById('copy');
let weak = document.querySelector('#weak');
let medium = document.querySelector('#medium');
let strong = document.querySelector('#strong');
var length;

slider.addEventListener("input", () => {
     document.querySelector('.passlength span').textContent = slider.value;
     generate();
     slideColor();
})

const characters = {
     lowercase: "abcdefghijklmopqrstuvwxyz",
     uppercase: "ABCDEFGHIJKLMOPQRSTUVWXYZ",
     numbers: "1234567890",
     specialcharacters: "!#%&)*+,-./:;<=>?@[\]^_\{|}~"
}

button.addEventListener("click", generate);

function generate() {
     let result = "";
     let final = ""
     length = slider.value;
     copy.innerText = "content_copy";

     const changeColor = () => {
          let slideColor = document.querySelector('.strength');

          if (length <= 8) {
               slideColor.id = "weak";
          } else if (length <= 15) {
               slideColor.id = "medium";
          } else {
               slideColor.id = "strong";
          }
     }

     options.forEach(list => {
          if (list.checked) {
               result = result + characters[list.id];
          }
     });

     for (let i = 0; i < slider.value; i++) {
          final = final + result[Math.floor(Math.random() * result.length)];
     }

     console.log(final);

     text.value = `${final}`;

}


copy.onclick = function () {

     navigator.clipboard.writeText(`${text.value}`);
     copy.textContent = "done_all";

     setTimeout(() => {
          copy.textContent = "content_copy";
     }, 3000);
}

function slideColor() {
     weak.style.visibility = "hidden";
     medium.style.visibility = "hidden";
     strong.style.visibility= "hidden";
     
     if (slider.value <= 8) {
          weak.style.visibility = "visible";
     } else if (slider.value <= 15) {
          medium.style.visibility = "visible";

     } else {
          strong.style.visibility = "visible";
     }
}