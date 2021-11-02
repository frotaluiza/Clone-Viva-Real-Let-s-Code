import { buttonStyling } from "./styling.js";
import {eventBlur} from "./eventListeners.js"


const data = async()=>{
    const data = await eventBlur()
    return data

}

buttonStyling()


data()   

















