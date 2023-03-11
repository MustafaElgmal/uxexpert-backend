export const searchValidation=(sentence:string)=>{
    const errors:{message:string}[]=[]
    if(!sentence){
        errors.push({message:'Sentence is required!'})
    }
    return errors

}