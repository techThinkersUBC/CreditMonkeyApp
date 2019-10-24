import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateSessionToken } from "../actions/auth.js";
import { useLocation } from "react-router-dom";

const AuthContainer = (props) => {
    const {
        email,
        name,
    } = props;

    let query = new URLSearchParams(useLocation().search);

    useEffect(() => {
        let jwt = query.get("jwt");
        props.validateSessionToken(jwt);
    }, []);

    // useEffect(() => {
    //     // TODO: Redirect User
    // }, [email, name]);

    return (
        <div className="AuthContainer">
            Welcome, { name } ({ email })
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        name: state.auth.name,
        email: state.auth.email,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        validateSessionToken,
    }, dispatch);
};

AuthContainer.propTypes = {
    validateSessionToken: PropTypes.func.isRequired,
    name: PropTypes.string,
    email: PropTypes.string,
};

AuthContainer.defautProps = {
    name: "",
    email: "",
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
