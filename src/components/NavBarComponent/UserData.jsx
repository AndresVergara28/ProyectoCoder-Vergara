import { prototype } from "file-loader";
import { propTypes } from "react-bootstrap/esm/Image";

const UserData = ({firstName,lastName,age,birthDate}) => {

  const newAge = age + 1;
  return (
    <div>
        <ul>
            <li style={{color:'white'}}>{firstName}</li>
            <li style={{color:'white'}}>{lastName}</li>
            <li style={{color:'white'}}>{newAge}</li>
            <li style={{color:'white'}}>{birthDate}</li>
        </ul>
      
    </div>
  )
}

export default UserData

/* ProTypes */
/* 
UserData.propTypes = {
  lastName: 

}
 */