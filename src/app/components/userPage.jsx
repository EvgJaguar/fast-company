import React, { useState, useEffect } from "react";
import api from "../api";

const UsersPage = (id) => {
    const [users, setUsers] = useState(api.users.fetchAll());
    useEffect(() => {
        api.users.getById(id).then((data) => setUsers(data));
    }, []);
    return (
        <div>
            <h1>{users.name}</h1>
            <h2>{users.profession.name}</h2>
            <h3>
                {users.qualities.map((item) => (
                    <span
                        className={"badge m-1 bg-" + item.color}
                        key={item._id}
                    >
                        {item.name}
                    </span>
                ))}
            </h3>
            <h3>{users.completedMeetings}</h3>
            <h3>{users.rate} /5</h3>
            <button>Все пользователи</button>
        </div>
    );
};

export default UsersPage;
