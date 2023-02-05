import { UserProps } from '../types/user';
import Search from '../components/search';
import { useState } from 'react';
import Container from "./Home.module.css"
const Home = () =>{
  const [user,setUser] = useState<UserProps | null>(null);

  //função que irá renderizar usuario

  const loadUser = async(userName:string) =>{
  
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json();

    console.log(data);
  const{avatar_url, login, location, followers,following} = data;

  const userData:UserProps = {
    avatar_url,
    login,
    location,
    followers,
    following,
  }

  setUser(userData)

  }
  return (
    <div className={Container.Container}>
      <Search loadUser={loadUser} />
      {user && <p className={Container.user}>{user.login}</p>}
    </div>
  )
}

export default Home;