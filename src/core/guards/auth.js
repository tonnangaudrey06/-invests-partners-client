import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ auth, role, component: Component, ...rest }) => {

    return <Route
        {...rest}
        render={(props) => {
            if (auth.isLoggedIn) {
                if (auth.user?.role === role) {
                    return <Component {...props}/>
                } else {
                    return <Redirect to={{ pathname: "/auth", state: { from: props.location } }} />
                }
            } else {
                return <Redirect to={{ pathname: "/auth", state: { from: props.location } }} />
            }
        }}
    />;
};

const mapStateToProps = (state) => ({ auth: state.auth })

export default connect(mapStateToProps)(ProtectedRoute);