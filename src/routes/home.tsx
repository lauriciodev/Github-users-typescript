import { UserProps } from '../types/user';
import Search from '../components/search';
import { useState } from 'react';
import Container from "./Home.module.css"
import User from '../components/user';
import Error from '../components/erro';


const Home = () =>{
  const [user,setUser] = useState<UserProps | null>(null);
  const [Erro, setErro] = useState(false);
  //função que irá renderizar usuario

  const loadUser = async(userName:string) =>{
      setUser(null);
      setErro(false)

    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json();

    if(res.status === 404){
      setErro(true);
      return;
    }

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
      { user && <User {...user} />}
      {Erro && <Error/>}
    </div>
  )
}

export default Home;