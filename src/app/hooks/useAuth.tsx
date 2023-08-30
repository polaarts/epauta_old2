'use client'

import { useRouter } from 'next/navigation'
import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { type FormEvent, useState, useEffect } from 'react'

export const useAuth = ({ correo, password }: { correo: string, password: string }) => {
  const [session, setSession] = useState<Session | null>()

  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    router.push('/auth/login')
    console.log(error)
  }

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.auth.signUp({
      email: correo,
      password
    })

    router.push('/')
    console.log(error)
  }

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.auth.signInWithPassword({
      email: correo,
      password
    })

    router.push('/')
    console.log(error)
  }

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      setSession(data.session)
    }

    getSession()
  }, [])

  return {
    session,
    handleLogout,
    handleSignUp,
    handleLogin
  }
}
