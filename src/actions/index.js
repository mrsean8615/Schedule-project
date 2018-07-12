import { FETCH_COURSES } from './types';

function fetchCoures() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                title: "Problem Solving",
                description: "title - his text will be what ever you would like to put into your schedule. change it to what ever is desirered. oof on"
            },
            {
                title: "Problem Solving",
                description: "title - this text will be what ever you would like to put into your schedule. change it to what ever is desirered. oof on"
            },
            {
                title: "Problem Solving",
                description: "title - this text will be what ever you would like to put into your schedule. change it to what ever is desirered. oof on"
            }
            
         ]
    }
}