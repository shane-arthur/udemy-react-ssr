import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersListPage extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }
    _renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}> {user.name}</li>;
        });
    }

    head() {
        return (
            <Helmet>
                <title>{`${this.props.users.length} Users Loaded`}</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        )
    }

    render() {
        return (
            <div>
                {this.head()}
                Users List:
                <ul>{this._renderUsers()}</ul>
            </div>
        )
    }
}

const loadData = (serverStore) => {
    return serverStore.dispatch(fetchUsers());
}

function mapStateToProps(state) {
    return { users: state.users };
}

export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage),
    loadData
};