import { signOut } from "firebase/auth"
import { auth } from "./firebase"

function Private() {
  const handleSignout=()=>{
    signOut(auth)
    .than( alert("Signed out Successfully!"))
    .catch(error=>{
      console.log(error)
      alert(error.message)
    })
  }
 

    return (
      <div>
        <h1>Welcome to the Private Page</h1>
        <button onClick={handleSignout}>Signout</button>
      </div>
    )
  }
  
  export default Private