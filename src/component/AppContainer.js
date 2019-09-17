import {del, get, getAll, post, put} from "../redux/asyncReducer";
import React from "react";
import {connect} from "react-redux";
import App from "./App";

class AppContainer extends React.Component {

    componentDidMount() {
        this.props.getAll()
    }
    render() {
        return (
            <App status={this.props.status}
                 header={this.props.header}
                 data={this.props.data}
                 getAll={this.props.getAll}
                 get={this.props.get}
                 post={this.props.post}
                 put={this.props.put}
                 del={this.props.del}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        status: state.channel.status,
        header: state.channel.header,
        data: state.channel.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAll: () => getAll()(dispatch),
        get: id => get(id)(dispatch),
        post: (name, num) => post(name, num)(dispatch),
        put: (id, name, num) => put(id, name, num)(dispatch),
        del: id => del(id)(dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);