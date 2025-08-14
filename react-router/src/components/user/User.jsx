import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div>
      <div> user:{userid}</div>
    </div>
  )
}

export default User
