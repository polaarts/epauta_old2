import Link from 'next/link'
import { QRIcon, MapIcon, CanvasIcon, SquareIcon, LightIcon } from '../icons'
import LogoutButton from '../logout-button'
// import Image from 'next/image'
// import ep from '@/app/favicon.ico'

const Aside = () => {
  const links = [

    { href: 'https://docencia-eit.udp.cl/salas/', label: 'SalasEIT', icon: <QRIcon /> },
    { href: 'https://malla-fic.surge.sh/#', label: 'Malla interactiva', icon: <MapIcon /> },
    { href: 'https://udp.instructure.com/', label: 'Canvas', icon: <CanvasIcon /> },
    { href: 'http://horariosxdxd.surge.sh/horarios', label: 'Generador de horarios', icon: <SquareIcon /> },
    { href: 'https://chat.openai.com/', label: 'ChatGPT', icon: <LightIcon /> }
  ]

  const carreras = [
    { href: '/carreras/informatica', label: 'Informática' },
    { href: '/carreras/industrial', label: 'Industrial' },
    { href: '/carreras/obras-civiles', label: 'Obras Civiles' }
  ]

  return (
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
            {/* <small className='text-white uppercase'>Anuncio</small>
            <div className='bg-red-400 rounded w-full aspect-square my-2'>
                <Image src={ep} alt="ePAUTA" style={{ objectFit: 'contain' }} />
            </div> */}
            <div className='my-4'>
                <LogoutButton />
            </div>
        </aside>
  )
}

export default Aside
