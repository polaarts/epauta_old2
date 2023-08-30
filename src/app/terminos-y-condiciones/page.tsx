import Link from 'next/link'
import { BackIcon } from '../components/icons'

const TerminosYCondiciones = () => {
  return (
        <div className="min-h-screen p-8">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">

                <div className='flex gap-x-2 mb-4'>
                    <Link href="/auth/register" className='text-black p-1 rounded-md '>
                        <BackIcon />
                    </Link><h1 className="text-2xl font-semibold uppercase">Términos y Condiciones</h1>
                </div>
                <p className="mb-4">
                    Bienvenido/a a ePauta, la Plataforma de Subida de Material de Estudio Universitario entre estudiantes de la Universidad Diego Portales. Antes de utilizar nuestros servicios, te pedimos que leas detenidamente los siguientes términos y condiciones que rigen el uso de ePauta. Al acceder y utilizar la plataforma, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguno de los términos aquí expuestos, te recomendamos que no utilices ePauta.
                </p>
                <h3 className="font-bold mb-2">Subida de Material:</h3>
                <ul className="mb-4 space-y-2">
                    <li>
                        - Los usuarios pueden subir material de estudio universitario, como apuntes y recursos, siempre que tengan el derecho legal de compartir dicho material.
                    </li>
                    <li>
                        - No se pueden subir enlaces ni material relacionado con clases en vivo grabadas, incluyendo clases magistrales, ayudantías, laboratorios u otras instancias similares. Esto se hace en respeto a la integridad y privacidad de las personas presentes en las grabaciones. Cualquier material relacionado será eliminado de manera inmediata.
                    </li>
                </ul>

                <h3 className="font-bold mb-2">
                    Derechos de Autor:</h3>
                <ul className="mb-4 space-y-2">
                    <li>- No se permite la subida de material que infrinja los derechos de autor de terceros, a menos que el material haya sido creado y subido por el mismo usuario.
                    </li>
                    <li>- Si identificas material que infringe los derechos de autor de otra persona, por favor notifícalo a través del correo <a href="mailto:epauta.submit@gmail.com" className="hover:underline italic">epauta.submit@gmail.com</a> para que podamos tomar medidas y eliminarlo de la plataforma.
                    </li></ul>

                <h3 className="font-bold">Responsabilidad del Usuario:</h3>
                <ul className="mb-4 space-y-2">
                    <li>- Los usuarios son responsables del material que suben a ePauta.
                    </li>
                    <li>- En caso de un incumplimiento de los términos y condiciones, el usuario recibirá una notificación por correo electrónico.
                    </li>
                    <li>- En caso de un segundo incumplimiento, el usuario será notificado de que está en riesgo de ser eliminado como usuario de la plataforma y su cuenta podría ser suspendida, dependiendo de la gravedad de la infracción.
                    </li>
                </ul>

                <h3 className="font-bold">Uso de la Plataforma:</h3>
                <ul className="mb-4 space-y-2">
                    <li>- ePauta es una herramienta para compartir material y recursos propios y de terceros libres de derechos de autor entre estudiantes, con el fin de facilitar la vida académica.
                    </li>
                    <li>- Los recursos subidos son identificados por el usuario que los subió, pero no son visibles para otros miembros de la comunidad. Esto permite el seguimiento y cumplimiento de las normas, así como futuras características personalizadas.</li>
                </ul>

                <h3 className="font-bold">Almacenamiento y URLs:</h3>
                <ul className="mb-4 space-y-2">
                    <li>- La plataforma solo permite el almacenamiento de URLs de recursos disponibles en internet para evitar problemas de divulgación de información privada.</li>
                    <li>- En caso de encontrar material que incumpla con los derechos de autor a pesar de estar en la plataforma, notifícalo a través del correo <a href="mailto:epauta.submit@gmail.com" className="hover:underline italic">epauta.submit@gmail.com</a> explicando el caso.</li>
                </ul>
                <p className="">
                    Al utilizar ePauta, aceptas cumplir con estos términos y condiciones. Te recordamos que el incumplimiento de estas normas puede resultar en la eliminación de tu cuenta y acceso a la plataforma.
                </p>
            </div>
        </div>
  )
}

export default TerminosYCondiciones
