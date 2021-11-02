import {recivesData} from "./Requests.js";
import {formatString} from "./dataTreatment.js"
import { creatingCards } from "./Components/card.js";
import { creatingHeader } from "./Components/header.js";
import { returnsState } from "./Components/allTheCities.js";

const cityStr = (value)=>{
    if (value === 'rj' || value ==='RJ') return 'rio-de-janeiro'
    else if (value === 'sp'|| value ==='SP') return 'sao-paulo'
    else return formatString(value)
}
const eventBlur = () =>{
   const input = document.querySelector('#search')
    input.addEventListener('blur',async (evt)=>{
    evt.preventDefault()
    const city = cityStr(evt.target.value)
    const state = returnsState(city)
    const result =  await recivesData(state,city)
    const insertDiv = document.querySelector("#insertCards")
    const checkIfAlreadyExists = document.querySelectorAll(".card")
    if (result) {
        insertDiv.innerHTML = ""
    }
    creatingHeader(result)
    creatingCards(result)
    
    } )
 
}

export {eventBlur};

