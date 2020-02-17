import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friends: state.friends.friendsList,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
      addMessage: () =>  {
          dispatch( addMessageActionCreator() );
          dispatch(updateNewMessageTextActionCreator(''));
      },
      updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text)),
    }
};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;