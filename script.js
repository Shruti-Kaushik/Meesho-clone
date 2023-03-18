import beauty from "./data/beauty.js"
import electronics from "./data/electronics.js"
import footwear from "./data/footwear.js"
import homekitchen from "./data/homekitchen.js"
import jwellerybags from "./data/jwellerybags.js"
import kids from "./data/kids.js"
import men from "./data/men.js"
import womenethnic from "./data/womenethnic.js"





let inputsearchel=document.querySelector(".inputsearch");

//for storing the recent inputs
let recentinput=[]
let forminputel=document.getElementById("inputForm");
const listofrecentel=document.querySelector(".listofrecent")




inputsearchel.addEventListener("keydown", ()=>{
    if(inputsearchel.value){
document.getElementById("closeserach").style.display="block";
    }else{
document.getElementById("closeserach").style.display="none"

    }
})
forminputel.addEventListener("submit",(e)=>{
    e.preventDefault()
    let listofrecenthtmlel=""
    recentinput.unshift(inputsearchel.value)
    
   
    if(recentinput.length>0){
        for(let i=0; i<recentinput.length;i++){
        listofrecenthtmlel +=`
        <div class="recentitem">
            <div class="recenticon">
                <img src="./images/recent.png"/>
                </div>
                <p>${recentinput[i]}</p>
            </div>`
}
listofrecentel.innerHTML=listofrecenthtmlel;
}

})
// womenethnic

let womenethic=document.getElementById("womenethic");


function womenethicf(){
    return womenethnic.map(el=>{
        let list=""
           list=el.data.map(element=> `<p> ${element}</p>`).join("")
       return `<div className="column">
       <h3>${el.heading}</h3>
       ${list}
    </div>`
    }).join("")
}
womenethic.innerHTML=womenethicf()

let menss=document.getElementById("menss");


function menssf(){
    return men.map(el=>{
        let list=""
           list=el.data.map(element=> `<p> ${element}</p>`).join("")
       return `<div className="column">
       <h3>${el.heading}</h3>
       ${list}
    </div>`
    }).join("")
}
menss.innerHTML=menssf()

let kidss=document.getElementById("kidss");


function kidssf(){
    return kids.map(el=>{
        let list=""
           list=el.data.map(element=> `<p> ${element}</p>`).join("")
       return `<div className="column">
       <h3>${el.heading}</h3>
       ${list}
    </div>`
    }).join("")
}
kidss.innerHTML=kidssf()

let homes=document.getElementById("homes");


function homekitchenf(){
    return homekitchen.map(el=>{
        let list=""
           list=el.data.map(element=> `<p> ${element}</p>`).join("")
       return `<div className="column">
       <h3>${el.heading}</h3>
       ${list}
    </div>`
    }).join("")
}
homes.innerHTML= homekitchenf()

let jwellery=document.getElementById("jwellery");


function jwellerybagsf(){
    return jwellerybags.map(el=>{
        let list=""
           list=el.data.map(element=> `<p> ${element}</p>`).join("")
       return `<div className="column">
       <h3>${el.heading}</h3>
       ${list}
    </div>`
    }).join("")
}
jwellery.innerHTML=jwellerybagsf()

let beautyy=document.getElementById("beautyy");


function beautyf(){
    return beauty.map(el=>{
        let list=""
           list=el.data.map(element=> `<p> ${element}</p>`).join("")
       return `<div className="column">
       <h3>${el.heading}</h3>
       ${list}
    </div>`
    }).join("")
}
beautyy.innerHTML=beautyf()
    

let acc=document.getElementById("acc");


function accf(){
    return electronics.map(el=>{
        let list=""
           list=el.data.map(element=> `<p> ${element}</p>`).join("")
       return `<div className="column">
       <h3>${el.heading}</h3>
       ${list}
    </div>`
    }).join("")
}
acc.innerHTML=accf()


let foot=document.getElementById("foot");


function footf(){
    return footwear.map(el=>{
        let list=""
           list=el.data.map(element=> `<p> ${element}</p>`).join("")
       return `<div className="column">
       <h3>${el.heading}</h3>
       ${list}
    </div>`
    }).join("")
}
foot.innerHTML=footf()
