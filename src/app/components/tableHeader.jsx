import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };
    const createArrow = () => {
        if (!selectedSort) {
            return "";
        }
        // if (selectedSort && selectedSort.order === "asc") {
        //     console.log("bi bi-caret-down-fill");
        //     return "bi bi-caret-down-fill";
        // }
        // if (selectedSort && selectedSort.order === "desc") {
        //     console.log("bi bi-caret-up-fill");
        //     return "bi bi-caret-up-fill";
        // }
        return selectedSort.order === "asc"
            ? "bi bi-caret-down-fill"
            : "bi bi-caret-up-fill";
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name} <i className={createArrow()}></i>
                    </th>
                ))}
            </tr>
        </thead>
    );
};
TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;