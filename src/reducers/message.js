import * as Types from '../constants/ActionTypes';
import * as Message from '../constants/Message';
var initialState = Message.MSG_WELCOME;

var message = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            state = action.message;
            return [...state];
        default:
            return state
    }
}

export default message;