import {getInitialData} from "../utils/api";
import {receiveUsers} from "./users";
//import {receiveQuestions} from "./questions";


export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users}) => {
            dispatch(receiveUsers(users));
          //  dispatch(receiveQuestions(questions));
        });
    };
}