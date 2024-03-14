import React from 'react'

const Alert = ({onClose}) => {

  return (
    <div className="alert alert-danger alert-dismissible">Alert
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
</div>
  )
}

export default Alert