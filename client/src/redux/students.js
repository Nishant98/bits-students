import * as ActionTypes from './ActionTypes';

export const Students = (state = {
        isLoading: true,
        errMess: null,
        students: []
    }, action) => {
    
    switch(action.type){
        case ActionTypes.RENDER_STUDENTS:
            return {...state, isLoading: false, errMess: null, students: action.payload};
        
        case ActionTypes.STUDENTS_LOADING:
            return {...state, isLoading: true, errMess: null, students: []};
            
        case ActionTypes.STDUENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, students: []};

        case ActionTypes.ADD_STUDENT:
            console.log(action.payload)
            return {...state, isLoading: false, errMess: null, students: state.students.concat(action.payload)};

        default:
            return state;
    }
}