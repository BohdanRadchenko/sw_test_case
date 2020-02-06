import { combineReducers } from 'redux';
import { ActionType } from '../actionType';

const modalHandlerReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionType.HANDLE_MODAL_OPEN:
      return true;

    case ActionType.HANDLE_MODAL_CLOSE:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  modalHandler : modalHandlerReducer,
});