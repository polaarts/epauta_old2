import Link from 'next/link'
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from '../card'
import { LinkIcon } from '../icons'
import TagsList from './tags/tags-list'
import convertirFecha from '@/app/utils/date'

const RecursosCard = ({ recurso }: { recurso: Recurso }) => {
  const { tipo, anio, semestre, descripcion, url, tags, ramo, created } = recurso
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
                <CardBody>
                    {descripcion !== null && descripcion !== ''
                      ? (
                          descripcion
                        )
                      : (
                            <span className='text-gray-400'>Sin descripción</span>
                        )}
                </CardBody>
            </CardBody>
            <CardFooter>
                <TagsList tags={tags} />
                <Link href={url} target="_blank"
                    rel="noopener noreferrer">
                    <LinkIcon />
                </Link>
            </CardFooter>
            <small className='mt-3 text-gray-400'>{convertirFecha(created)}</small>
        </Card>
  )
}

export default RecursosCard
