'use client'
import { useState } from 'react'
import { useAuth } from '@/app/hooks/useAuth'
import Link from 'next/link'

export default function LoginForm () {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')

  const { handleLogin } = useAuth({ correo, password })

  return (
        <div>
            <div className='flex space-x-2'>
                <h1 className='text-3xl text-white font-bold mb-4'>ePauta</h1>
                <h2 className='text-3xl text-white font-light mb-4'>¡Hola de nuevo!</h2>
            </div>
            <form
                onSubmit={handleLogin}
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
                <button type="submit" className="text-white bg-red-700 p-4 rounded hover:bg-red-800">
                    Iniciar sesión
                </button>
                <div className='flex space-x-2'><p className='text-white font-light'>¿No tienes una cuenta?</p>
                    <Link href="/auth/register" className="text-white hover:underline underline-offset-4">
                        Regístrate
                    </Link></div>
            </form>
        </div>
  )
}
