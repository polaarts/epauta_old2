import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const getRamos = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: ramos } = await supabase
    .from('ramos')
    .select('*')

  return ramos
}

export const getRamosInformatica = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: informatica } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%CIT%')

  const { data: optimizacion } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%CII-2750%')

  const { data: intro } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%CII-2100%')

  const { data: contabilidad } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%CII-1000%')

  const { data: matematica } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%CBM%')

  const { data: fisica } = await supabase

    .from('ramos')
    .select('*')
    .like('codigo', '%CBF%')

  const { data: quimica } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%CBQ%')

  const ramos: Ramos = []

  if (matematica != null) ramos.push(...matematica)
  if (fisica != null) ramos.push(...fisica)
  if (quimica != null) ramos.push(...quimica)
  if (optimizacion != null) ramos.push(...optimizacion)
  if (intro != null) ramos.push(...intro)
  if (contabilidad != null) ramos.push(...contabilidad)
  if (informatica != null) ramos.push(...informatica)

  return ramos
}

export const getRamosObras = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: obras } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%COC%')

  const { data: matematica } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%CBM%')

  const { data: fisica } = await supabase

    .from('ramos')
    .select('*')
    .like('codigo', '%CBF%')

  const { data: quimica } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%CBQ%')

  const ramos: Ramos = []

  if (matematica != null) ramos.push(...matematica)
  if (fisica != null) ramos.push(...fisica)
  if (quimica != null) ramos.push(...quimica)
  if (obras != null) ramos.push(...obras)

  return ramos
}

export const getRamosIndustrial = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: industrial } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%CII%')

  const { data: matematica } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%CBM%')

  const { data: fisica } = await supabase

    .from('ramos')
    .select('*')
    .like('codigo', '%CBF%')

  const { data: quimica } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%CBQ%')

  const ramos: Ramos = []

  if (matematica != null) ramos.push(...matematica)
  if (fisica != null) ramos.push(...fisica)
  if (quimica != null) ramos.push(...quimica)
  if (industrial != null) ramos.push(...industrial)

  return ramos
}

export const getRamosPlanComun = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: matematica } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%CBM%')

  const { data: fisica } = await supabase

    .from('ramos')
    .select('*')
    .like('codigo', '%CBF%')

  const { data: quimica } = await supabase
    .from('ramos')
    .select('*')
    .like('codigo', '%CBQ%')

  const ramos: Ramos = []

  if (matematica != null) ramos.push(...matematica)
  if (fisica != null) ramos.push(...fisica)
  if (quimica != null) ramos.push(...quimica)

  return ramos
}
