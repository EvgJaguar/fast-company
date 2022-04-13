import React from 'react'

const BookMark = ({ status, ...rest }) => {
  return (
    <i
      className={status === false ? 'bi bi-bookmark' : 'bi bi-bookmark-fill'}
    ></i>
  )
}

export default BookMark
