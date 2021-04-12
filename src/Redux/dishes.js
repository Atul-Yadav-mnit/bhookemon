import { DISHES } from '../shared/Dishes'

export const Dishes = (state = DISHES , action) => {
    switch(action.types){
        default:
            return state;
    }
}