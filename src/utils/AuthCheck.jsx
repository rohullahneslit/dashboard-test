import {Navigate} from 'react-router-dom'
const AuthCheck = ({isLoggedIn, children}) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  return children
}
export default AuthCheck
