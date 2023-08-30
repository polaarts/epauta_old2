'use client'
import { useAuth } from '../hooks/useAuth'

const LogoutButton = () => {
  const { handleLogout } = useAuth({ correo: '', password: '' })

  return (

    <button className='uppercase w-full bg-red-700 text-white p-4 hover:bg-red-800' onClick={handleLogout}>Cerrar sesión</button>
  )
}

export default LogoutButton
