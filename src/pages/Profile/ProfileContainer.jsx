import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";
import {setUserProfile} from "../../redux/profileReducer";

class ProfileContainer extends React.Component  {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        debugger;
        if (!userId) {
            userId = 2;
        }
        profileAPI.getUserProfile(userId).then(profileInfo => {
            this.props.setUserProfile(profileInfo);
        })
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}
let profileWithURL = withRouter(ProfileContainer);

let mapStateToProps = (state) => {
      return {profile: state.profilePage.profile}
};

export default connect(mapStateToProps, {setUserProfile} )(profileWithURL);