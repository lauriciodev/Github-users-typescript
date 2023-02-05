import { FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UserProps } from '../types/user';
import UserStyle from "./User.module.css" 

const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}:UserProps) =>{
return (
  <div className={UserStyle.Container}>
    <img src={avatar_url} alt={login} />
    <h3>{login}</h3>
     <p className={UserStyle.location}>
      <FaLocationArrow/>
      <span>{location}</span>
     </p>
     <div className={UserStyle.ContainerFollow}>
      <div>
        <p>seguidores:</p>
        <h3>{followers}</h3>
      </div>
      <div>
        <p>seguindo:</p>
        <h3>{following}</h3>
      </div>
     </div>
     <Link className={UserStyle.button}  to={`/repos/${login}`}>Ver Melhores repositórios</Link>
  </div>
)
}


export default User;