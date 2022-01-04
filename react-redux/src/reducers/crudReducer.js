import { CREATE_DATA, DELETE_DATA, READ_DATA, UPDATE_DATA, NO_DATA } from "../types"

export const crudInitialState = {db: null}
export const crudReducer = (state = crudInitialState, action) => {
    const {db} = state;
    const {type, payload} = action;
    switch (type) {
        case READ_DATA:
            return {db: payload}

        case CREATE_DATA:
            return {db: [...db, payload]}

        case UPDATE_DATA: 
        const map = db.map((el)=> el.id === payload.id ? payload : el);
        return {db: map}

        case DELETE_DATA:
            const filter = db.filter((el)=> el.id !== payload)
            return {db: filter}
        case NO_DATA:
            return crudInitialState
        default:
            return state
    }
}