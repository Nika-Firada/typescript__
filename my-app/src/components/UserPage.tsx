import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "./List";
import { IUser } from "../types/types";
import UserItem from "./UserItem";
import { useNavigate } from "react-router-dom";


const UserPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem onClick={(user) => navigate(`/users/${user.id}`)} user={user} key={user.id} />}
    />
  );
};

export default UserPage;
