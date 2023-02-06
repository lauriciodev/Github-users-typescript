import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProfileProps } from '../types/user';
import userStyles from "./User.module.css";

const UserPage = () =>{

  const {user} = useParams();
  const [userRepo, setUserRepo] = useState <ProfileProps[]>([]);

  useEffect(() =>{
   const  loadRepositories = async () =>{
    const res = fetch(`https://api.github.com/users/${user}/repos`)
    .then(data =>{
       data.json()
       .then(res => {
         setUserRepo(res)
       })
    }).catch(erro =>{
      console.log(erro);
    })

  }
   loadRepositories()
  },[])



  return(
    <>
      <a href='/' className={userStyles.button}>voltar</a>

    <div className={userStyles.MasterContainer}>
    {
      userRepo.map(repo =>{
        return(
          <div key={repo.id} className={userStyles.Container}>

            <div className={userStyles.InfoContainer}>
            <p>
            { repo.full_name }
          </p>
          <a href={repo.html_url}>
            ver Repositório
          </a>
            </div>
          
          </div>
        )
      })

    }
    </div>
    </>
  )
}

export default UserPage;