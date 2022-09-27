import React, { useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../modals/modals";

const RepoCard = ({ repo }: { repo: IRepo }) => {


  const {addFav, removeFav} = useActions()
  const {favourites} = useAppSelector(state => state.github)

  const [isFav,setIsFav] = useState(favourites.includes(repo.html_url))

  const addToFav = (e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    addFav(repo.html_url)
    setIsFav(true)
  }
  const removeFromFav = (e:React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    removeFav(repo.html_url)
    setIsFav(false)
  }
  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.fork}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
      </a>
      {!isFav && <button onClick={addToFav} className="m-2 py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all">Add</button>}
      {isFav && <button onClick={removeFromFav} className="m-2 py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all">Remove</button>}
    </div>
  );
};

export default RepoCard;
