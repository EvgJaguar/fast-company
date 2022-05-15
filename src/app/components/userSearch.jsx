import React from "react";
import PropTypes from "prop-types";

const UserSearch = ({ value, onChange, placeholder }) => {
    return (
        <form>
            <div>
                <input
                    type="text"
                    className="form-control"
                    id="userSearch"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </form>
    );
};
UserSearch.defaultProps = {
    placeholder: "Search..."
};
UserSearch.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};
export default UserSearch;
