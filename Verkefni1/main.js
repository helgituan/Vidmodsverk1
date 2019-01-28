let litir = ["#CFFCFF" , "#AAEFDF", "#9EE37D" , "#63C132" , "#358600" , "#1BE7FF" , "#E4FF1A" , "#FFB800" , "#FF5714" , "#3772FF" , "#F038FF" , "#39A9DB" , "#EF709D" , "#EF709D" , "#E2EF70" , "#70E4EF" ];
//tekur Id og breytir hann i random lit frá listanum "litir"
let litur = window.setInterval(function change(){
TweenMax.to(document.getElementById("pink"), 3, {stroke:litir[Math.floor(Math.random() * litir.length)]});
TweenMax.to(document.getElementById("blue"), 3, {stroke:litir[Math.floor(Math.random() * litir.length)]});
TweenMax.to(document.getElementById("green"), 3, {stroke:litir[Math.floor(Math.random() * litir.length)]});
TweenMax.to(document.getElementById("orange"), 3, {stroke:litir[Math.floor(Math.random() * litir.length)]});
},3000)
//hætta að skipta um litir eftir 15 sek
window.setTimeout(function timeout(){
window.clearTimeout(litur)
},15000)
//hovera músinn yfir þá fer hann í 13/10 scale semsagt stækkar
document.getElementById("hringur").addEventListener("mouseenter", function(e){
	TweenMax.to(document.getElementById("hringur"), 1, {transformOrigin: "center", scale: 13/10})
});
//tekur musin ur hoverinu og breytist i venjulega stærðin aftur
document.getElementById("hringur").addEventListener("mouseout", function(e){
	TweenMax.to(document.getElementById("hringur"), 1, {transformOrigin: "center", scale: 1/1})
});
