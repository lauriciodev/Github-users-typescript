type SearchProps = {
  loadUser:(userName:string) => Promise<void>
}

import SearchContainer from "./Search.module.css"
import { useState, KeyboardEvent } from 'react'
import {FaSearch} from "react-icons/fa"
const Search = ({loadUser}:SearchProps) =>{
const [userName,setUserName] =useState("");

const handleKeyDown = (e:KeyboardEvent) =>{

if(e.key === "Enter"){
  loadUser(userName)
}

}


  return (
    <div className={SearchContainer.searchContainer}>
      <h2>Busque por um usuário</h2>
      <p>conheça seus melhores repositórios</p>
      <div className={SearchContainer.inputContainer}>
        <input type="text" placeholder='Digite o nome de um usuário' onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)} ><FaSearch/></button>
      </div>
    </div>
  )
}

export default Search;