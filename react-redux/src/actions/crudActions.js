import { 
    CREATE_DATA,
    READ_DATA,
    DELETE_DATA,
    NO_DATA,
    UPDATE_DATA
    } from "../types";

export const readData = (res) => ({type: READ_DATA, payload: res})
export const deleteChampion = (id) => ({type: DELETE_DATA, payload: id})
export const updateChampion = (data) => ({type: UPDATE_DATA, payload: data})
export const createChampion = (res) => ({type: CREATE_DATA, payload: res})
export const noData = () => ({type: NO_DATA})