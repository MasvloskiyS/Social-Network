import {addMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friends: state.friends.friendsList,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

const DialogsContainer = connect(mapStateToProps, { addMessage, updateNewMessageText } )(Dialogs);
export default DialogsContainer;