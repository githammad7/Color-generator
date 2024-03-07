
const getcolor=() =>{
    const randomNumber = Math.floor(Math.random()*16777215);
    const hammad= "#"+ randomNumber.toString(16);
    document.body.style.backgroundColor=hammad;
    document.getElementById('randomcode').innerText=hammad;
    navigator.clipboard.writeText(hammad);
    
   }
document.getElementById("btn").addEventListener("click",getcolor);
getcolor();