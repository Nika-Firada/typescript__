import React, {FC, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useActions } from '../hooks/useAction'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { fetchUsers } from '../store/action-creator/user'

const UserList:FC = () => {
    const {users, error, loading} = useTypeSelector(state => state.user)
    const {fetchUsers} = useActions()
    useEffect(() => {
        fetchUsers()
    },[])

    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
  return (
    <div>
        {users.map(user =>(
            <div key={user.id}>{user.name}</div>
        ))}
    </div>
  )
}

export default UserList;

