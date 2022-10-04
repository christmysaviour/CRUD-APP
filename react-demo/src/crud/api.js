import axios from "axios";

export const getNames=async()=>{
     return await axios.get( `${process.env.REACT_APP_API}`)
}
export const getName=async(id)=>{
    return await axios.get( `${process.env.REACT_APP_API}/${id}`)
}
export const createName=async(Name)=>{
    return await axios.post( `${process.env.REACT_APP_API} `,Name)
}

export const removeName=async(id)=>{
    return await axios.delete( `${process.env.REACT_APP_API}/${id}`)
}
export const updateName=async(id,Name)=>{
    return await axios.put( `${process.env.REACT_APP_API}/${id}`,Name)
}