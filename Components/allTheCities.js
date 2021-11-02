import { formatString } from "../dataTreatment.js"
import { mainData } from "./dataCities.js"

const insertsCities = (mainData)=>{
    const mainArray = mainData.estados
    const result = mainArray.reduce((acc,current)=>{
        acc[current.sigla.toLowerCase()]=[]
        acc[current.sigla.toLowerCase()].push(formatString(current.sigla.toLowerCase()))
        
        current.cidades.forEach((cidade)=>{
            acc[current.sigla.toLowerCase()].push(formatString(cidade)) 
        })
        return acc
    },{})
    return result;
}


const array = Object.entries(insertsCities(mainData))

const returnsState = (formatedCity)=>{
    const state= array.map((line)=>{
        if (line[1].includes(formatedCity)){ 
            return line[0]
        }  
    })
    const result = []
    state.forEach((item)=>{
     if (item) result.push(item) 
    })
    return result[0]

}


export {returnsState}

