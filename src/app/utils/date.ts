import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

export default function convertirFecha (fechaDb: string): string {
  // Convertir la fecha y hora a un objeto Date
  const fechaObj = parseISO(fechaDb)

  // Obtener el número del día, mes y año
  const numeroDia = fechaObj.getDate()
  const nombreMes = format(fechaObj, 'MMMM', { locale: es })
  const anno = fechaObj.getFullYear()

  // Crear la cadena deseada
  const cadenaResultante = `Creado el ${numeroDia} de ${nombreMes} de ${anno}`

  return cadenaResultante
}
