import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import { useContext } from "react"

function Navbar() {

  const navigate = useNavigate()

  const { isLoggedIn, authenticateUser } = useContext(AuthContext)

  const handleLogout = () => {
    // 1. borrar el token 
    localStorage.removeItem("authToken")

    // 2. validar contra el BE que el token fue borrado
    authenticateUser()

    // 3. redireccionamos a "/"
    navigate("/")

  }

  return (
    
    <nav>

        <Link to="/">Home</Link>

        {isLoggedIn && <Link to="/profile">Profile</Link>}
        {isLoggedIn && <button onClick={handleLogout}>Cerrar sesión</button>}
        {!isLoggedIn && <Link to="/auth/signup">Registro</Link>}
        {!isLoggedIn && <Link to="/auth/login">Acceso</Link>}

    </nav>
  )
}

export default Navbar