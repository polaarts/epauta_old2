import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { cache } from 'react'
import 'server-only'

export const getLatestRecursos = cache(async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: latestRecursos } = await supabase
    .from('recursos')
    .select('id, tipo, anio, semestre, descripcion, url, ramo, created, tags(id, tag)')
    .order('created', { ascending: false })
    .range(0, 7)

  return latestRecursos
})

export const getRecursosByRamo = cache(async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: recursos } = await supabase
    .from('recursos')
    .select('id, tipo, anio, semestre, descripcion, url, ramo, created, tags(id, tag)')
    .order('created_at', { ascending: false })

  return recursos
})
