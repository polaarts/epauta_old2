import RamoCard from './ramo-card'

const RamosCardList = ({ ramos, carrera }: { ramos: Ramos, carrera: string }) => {
  return (
        <main className="flex flex-col">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {ramos?.map((ramo) => (
            <RamoCard key={ramo.codigo} ramo={ramo} carrera={carrera}/>
            ))}
        </div>
        </main>
  )
}

export default RamosCardList
