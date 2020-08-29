import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addStudent = (student) => ({
    type: ActionTypes.ADD_STUDENT,
    payload: student
});

export const postStudent = (studentId, studentName) => (dispatch) => {
    const newStudent =  {
        studentId: studentId,
        studentName: studentName
    }
    return fetch(baseUrl + 'addStudent', {
        method: 'POST',
        body: JSON.stringify(newStudent),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "same-origin"
        })
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess
        })
        .then(response => response.json())
        .then(response => dispatch(addStudent(response)))
        .catch(error => { console.log('Post comments ', error.message);
        alert('Error: ' + error.message);});
}

export const fetchStudents = () => (dispatch) => {
    dispatch(studentsLoading(true));
    return fetch(baseUrl)
        .then(response => {
            // check if request was successful
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess
        })
        .then(response => response.json())
        .then(students => dispatch(renderStudents(students)))
        .catch(error => dispatch(studentsFailed(error.message)));
}

export const studentsLoading = () => ({
    type: ActionTypes.STUDENTS_LOADING
});

export const studentsFailed = (errmess) => ({
    type: ActionTypes.STDUENTS_FAILED,
    payload: errmess
});

export const renderStudents = (students) => ({
    type: ActionTypes.RENDER_STUDENTS,
    payload: students
});
