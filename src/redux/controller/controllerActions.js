import { ActionType } from "../actionType";

// OPEN MODAL
export const modalOnOpen = () => ({
  type: ActionType.HANDLE_MODAL_OPEN,
  payload : true
});

// OPEN CLOSE
export const modalOnClose = () => ({
  type: ActionType.HANDLE_MODAL_CLOSE,
  payload : true
});
