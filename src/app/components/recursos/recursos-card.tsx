import Link from 'next/link'
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from '../card'
import { LinkIcon } from '../icons'
import TagsList from './tags/tags-list'

const RecursosCard = ({ recurso }: { recurso: Recurso }) => {
  const { tipo, anio, semestre, descripcion, url, tags, ramo } = recurso
  return (

        <Card>
            <CardHeader>
                <div className='flex flex-row gap-x-2'>
                    <CardTitle>{tipo}</CardTitle>
                    <div className='text-gray-400 font-semibold'>
                        <span>{anio}-</span>
                        <span>{semestre}</span>
                    </div>
                </div>
                <Link href={`/${ramo}`}>
                    <span className='text-gray-300 hover:text-gray-400'>{ramo}</span>
                </Link>
            </CardHeader>
            <CardBody>
                {descripcion ?? <span className='text-gray-400'>Sin descripción</span>}
            </CardBody>
            <CardFooter>
                <TagsList tags={tags} />
                <Link href={url}>
                    <LinkIcon />
                </Link>
            </CardFooter>
        </Card>
  )
}

export default RecursosCard
