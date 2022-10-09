import {_getUsers} from "./_DATA";

export function getInitialData () {
    return Promise.all([
        _getUsers(),
      //  _getQuestions(),
  //  ]).then(([users, questions]) => ({
]).then(([users]) => ({
        users,
       // questions,
    }))
}