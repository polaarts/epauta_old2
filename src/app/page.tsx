import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { CanvasIcon, MapIcon, LightIcon, SquareIcon } from './components/icons'
import Link from 'next/link'
import { getLatestRecursos } from './utils/queries/archivos'
import RecursosCardList from './components/recursos/recursos-card-list'
import LogoutButton from './components/logout-button'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  const latestRecursos = await getLatestRecursos()

  if (session === null) redirect('/auth/login')

  const links = [
    { href: '/', label: 'Malla interactiva', icon: <MapIcon /> },
    { href: '/', label: 'Canvas', icon: <CanvasIcon /> },
    { href: '/', label: 'Generador de horarios', icon: <SquareIcon /> },
    { href: '/', label: 'ChatGPT', icon: <LightIcon /> }
  ]

  const carreras = [
    { href: '/carreras/informatica', label: 'Informática' },
    { href: '/carreras/industrial', label: 'Industrial' },
    { href: '/carreras/obras-civiles', label: 'Obras Civiles' }
  ]

  return (
    <main className="grid lg:grid-cols-3 gap-8 grid-cols-1 mt-4">
      <section className='lg:col-span-2'>
        <div className='flex flex-row gap-x-2'>
          <h1 className='text-2xl font-bold mb-3 text-white'>ePAUTA</h1>
          <h3 className='uppercase text-2xl font-light mb-3 text-white'>- Últimos recursos agregados</h3>
        </div>
        <RecursosCardList recursos={latestRecursos} grid={2} />
      </section>
      <aside className='md:my-0 my-4 lg:my-0'>
        <small className='text-white uppercase'>Carreras</small>
        <div className='grid grid-cols-1 gap-4 my-2'>
          {carreras.map(({ href, label }) => (
            <Link href={href} key={`${href}`}>
              <div className="bg-white p-4 rounded h-full flex flex-col">
                <div className='flex flex-row space-x-3'>
                  <h3>{label}</h3>
                </div>
              </div>
            </Link>))}
        </div>

        <small className='text-white uppercase'>Otras herramientas</small>
        <div className='grid grid-cols-1 gap-y-4 my-2'>
          {links.map(({ href, label, icon }) => (
            <Link href={href} key={`${label}`}>
              <div className="bg-white p-4 rounded h-full flex flex-col">
                <div className='flex flex-row space-x-3'>
                  {icon}
                  <h3>{label}</h3>
                </div>
              </div>
            </Link>))}
        </div>
        <div className='my-4'>
          <LogoutButton />
        </div>
      </aside>
    </main>
  )
}
