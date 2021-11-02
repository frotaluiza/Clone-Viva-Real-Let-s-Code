
// Tratamento do input que pesquisa a cidade

const formatString = (string)=>{
    const lowerCase = string.toLowerCase();
    
    let removeAc = lowerCase.replace(/ã/g, "a")
    removeAc = removeAc.replace(/á/g, "a")
    removeAc= removeAc.replace(/à/g, "a")
    removeAc= removeAc.replace(/â/g, "a")
    removeAc= removeAc.replace(/é/g, "e")
    removeAc= removeAc.replace(/ó/g, "o")
    removeAc= removeAc.replace(/ô/g, "o")
    removeAc= removeAc.replace(/í/g, "i")
    
    const result =  removeAc.split(" ").join("-");
    return result
}

const PrepositionsToIgnore = ['de','para']

const createsAbreviation = (formatedString)=>{
    const sep = formatedString.split("-")
   
    const filter = []
    sep.forEach((word)=>{
        if (!PrepositionsToIgnore.includes(word)) filter.push(word[0])
      
    })
    return filter.join("")  
}

export {formatString, createsAbreviation} ;