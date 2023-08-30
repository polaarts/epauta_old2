import Link from 'next/link'
import { Card, CardHeader, CardTitle } from '../card'

const RamoCard = ({ ramo, carrera }: { ramo: Ramo, carrera: string }) => {
  const { codigo, nombre } = ramo
  return (
        <Link href={`/${codigo}`}>
            <Card>
                <CardHeader>
                    <div className=''>
                        <CardTitle>{nombre}</CardTitle>
                        <div className='text-gray-400'>
                            <span>{codigo}</span>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </Link>
  )
}

export default RamoCard
