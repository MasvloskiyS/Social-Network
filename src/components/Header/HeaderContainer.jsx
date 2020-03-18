import React from "react";
import Header from "./Header";
import {authAPI} from "../../api/api";
import {setAuthUserData} from "../../redux/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getLogin().then(loginData => {
            console.log(loginData.resultCode);
            if (loginData.resultCode === 0) {
                let {id, email, login} = loginData.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);