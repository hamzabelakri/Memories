import axios from "axios";
import {GET_ALL, CREATE} from "../types"

export const getPosts=()=> async(dispatch)=>{
try {
    const res= await axios.get('http://localhost:2000/posts')
    dispatch({type: GET_ALL, payload: res})
    console.log(res)
} catch (error) {
    console.log(error)
    
}

}



export const createPost=()=>async(dispatch)=>{
    try {
        const res= await axios.post('http://localhost:2000/posts')
        dispatch({type: CREATE, payload: res.data})
        console.log(res)
    } catch (error) {
        console.log(error)

    }

}

