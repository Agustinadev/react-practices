import { 
    ADD_ONE, 
    CLEAR, 
    REMOVE_ALL,
     REMOVE_ONE 
    } from "../types"

export const addOne = (product) => ({type: ADD_ONE, payload: product})
export const remove = (id, all) => (all ? {type: REMOVE_ALL, payload: id} : {type: REMOVE_ONE, payload: id})
export const clear = () => ({type: CLEAR})