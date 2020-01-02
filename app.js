let lightOff = document.querySelector("#lmp_off")
let lightOn = document.querySelector("#lmp_on")
let swtOff = document.querySelector("#swt_off")
let swtOn = document.querySelector("#swt_on")
lightOn.style.display = "none";
swtOff.style.display = "none";


swtOn.addEventListener('click', function(){
  lightOff.style.display="none";
  lightOn.style.display = "block";
  swtOn.style.display="none";
  swtOff.style.display="block";

})

swtOff.addEventListener('click', function(){
  lightOff.style.display="block";
  lightOn.style.display = "none";
  swtOn.style.display="block";
  swtOff.style.display="none";
})