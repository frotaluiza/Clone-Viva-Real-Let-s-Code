import { errorScreen } from "./Components/404.js"

const recivesData = async(state,city)=>{
    try {
        const result = await fetch('https://private-9e061d-piweb.apiary-mock.com/venda?state='+state+'&city='+city)
        const dataJsonNotFiltered = await result.json()
        return dataJsonNotFiltered
    } catch (error) {
        console.log("Erro",error)
        errorScreen()
    }
  
}



export {recivesData};