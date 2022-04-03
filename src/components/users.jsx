import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const [number, setNumber] = useState(users.length)

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId))
    setNumber((prevState) => prevState - 1)
  }

  const renderPhrase = (number) => {
    if (number === 0) {
      return `Никто с тобой не тусанет`
    }
    const words = ['человек', 'человека', 'человек']
    let value = Math.abs(number) % 100
    let num = value % 10

    if (value > 10 && value < 20)
      return `${number} ${words[2]} тусанет с тобой сегодня`
    if (num > 1 && num < 5)
      return `${number} ${words[1]} тусанет с тобой сегодня`
    if (num == 1) return `${number} ${words[0]} тусанет с тобой сегодня`
    return `${number} ${words[2]} тусанет с тобой сегодня`
  }

  return (
    <>
      <h2>
        <span className={number === 0 ? 'badge bg-danger' : 'badge bg-primary'}>
          {renderPhrase(number)}
        </span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Проффесия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>
                {item.qualities.map((qual) => (
                  <span key={qual._id} className={'badge m-2 bg-' + qual.color}>
                    {qual.name}
                  </span>
                ))}
              </td>
              <td>{item.profession.name}</td>
              <td>{item.completedMeetings}</td>
              <td>{item.rate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
export default Users
