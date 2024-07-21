import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, user}) => {
  return <h1>Private</h1>
      // return user ? children : <Navigate to='/'/> // </Navigate>
    
}

export default ProtectedRoute;