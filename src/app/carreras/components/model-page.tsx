import RamosCardList from '@/app/components/ramos/ramos-card-list'
import Link from 'next/link'

const ModelPage = async ({ ramos, malla }: { ramos: Ramos, malla: string }) => {
  return (
        <main className="flex flex-col space-y-8 mt-4">
            <section className=''>
                <div className='flex flex-row gap-x-2'>
                    <Link href={'/'} className='text-2xl font-bold mb-3 text-white'>ePAUTA</Link>
                    <h3 className='uppercase text-2xl font-light mb-3 text-white'>- {malla}</h3>
                </div>
                <RamosCardList ramos={ramos} carrera={malla} />

            </section>
        </main>
  )
}

export default ModelPage
