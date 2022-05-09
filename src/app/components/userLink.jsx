import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserLink = ({ name }) => {
    return (
        <>
            <Link className="link-primary" to="/userPage">
                {name}
            </Link>
        </>
    );
};
UserLink.propTypes = {
    name: PropTypes.string
};

export default UserLink;
