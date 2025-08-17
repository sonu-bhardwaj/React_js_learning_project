
import React,{useContext} from 'react'
import UserContext from '../context/userContext'

function Profile() {


    
const {user} =useContext(UserContext)
    if(!user) return <div>please login </div>
    return <div className='w-50 text-red-800 text-center -m-50'>Welcome {user.username}</div>





}

export default Profile
