import Sidebar from "./Sidebar";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
        friends: state.friends,
        myInfo: state.myInfo,
    }
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;