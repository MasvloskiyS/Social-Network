import Posts from "./Posts";
import {addPost, updateNewPostText} from "../../../redux/profileReducer";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }

};


const PostsContainer = connect(mapStateToProps, {  addPost, updateNewPostText, })(Posts);

export default PostsContainer;