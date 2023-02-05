type SearchProps = {
  loadUser:(userName:string) => Promise<void>
}


import { useState } from 'react'
import {FaSearch} from "react-icons/fa"
const Search = ({loadUser}:SearchProps) =>{
const [userName,setUserName] =useState("");


  return (
    <div>
      <h2>Busque por um usuário</h2>
      <p>conheça seus melhores repositórios</p>
      <div>
        <input type="text" placeholder='Digite o nome de um usuário' onChange={(e) => setUserName(e.target.value)} />
        <button onClick={() => loadUser(userName)} ><FaSearch/></button>
      </div>
    </div>
  )
}

export default Search;