'use client'
import { useState } from 'react'
import { useAuth } from '@/app/hooks/useAuth'
import Link from 'next/link'

export default function RegisterForm () {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [terminos, setTerminos] = useState(false)

  const { handleSignUp } = useAuth({ correo, password })
  const handleTerminos = () => { setTerminos(!terminos) }

  return (
    <div>
      <div className='flex space-x-2'>
        <h1 className='text-3xl text-white font-bold mb-4'>ePauta</h1>
        <h2 className='text-3xl text-white font-light mb-4'>¡Bienvenido/a!</h2>
      </div>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col w-full mx-auto space-y-4"
      >
        <input
          className="p-4 rounded"
          type="email"
          placeholder="Correo electrónico"
          onChange={e => { setCorreo(e.target.value) }}
        />
        <input
          className="p-4 rounded"
          type="password"
          placeholder="Contraseña"
          onChange={e => { setPassword(e.target.value) }}
        />
        <div className='flex items-center space-x-2'>
          <input
            type="checkbox"
            id="terminos"
            name="terminos"
            value="terminos"
            onChange={handleTerminos}
            className='w-5 h-5'
          />
          <label htmlFor="terminos" className='text-white font-light'>Acepto los <Link href='/terminos-y-condiciones'><span className='underline'>términos y condiciones</span></Link></label>
        </div>
        {terminos
          ? (
          <button type="submit" className="text-white bg-red-700 p-4 rounded hover:bg-red-800">
            Registrarse
          </button>
            )
          : (
          <button type="submit" className="text-white bg-red-400 p-4 rounded" disabled>
            Registrarse
          </button>
            )
        }
        <div className='flex space-x-2'><p className='text-white font-light'>¿Ya tienes una cuenta?</p>
          <Link href="/auth/login" className="text-white hover:underline underline-offset-4">
            Inicia sesión
          </Link></div>
      </form>
    </div>
  )
}
