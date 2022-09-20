import React, {FC} from 'react'
import { IUser } from '../types/types'

interface UserItemProps{
  user: IUser
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
  return (
    <div className='list-item' onClick={() => onClick(user)} style={{marginTop: 5, cursor: 'pointer', padding: 15, border: "2px solid gray"}}>
        {user.id}. {user.name} lives in {user.address.city} on street {user.address.street}
    </div>
  )
}

export default UserItem