import RecursosCard from './recursos-card'

const RecursosCardList = ({ recursos, grid }: { recursos: Recursos, grid: number }) => {
  return (
        <main className="flex flex-col">
        <div className={`grid md:grid-cols-${grid} grid-cols-${grid - 1} gap-4`}>
            {recursos?.map((recurso) => (
            <RecursosCard key={recurso.id} recurso={recurso} />
            ))}
        </div>
        </main>
  )
}

export default RecursosCardList
