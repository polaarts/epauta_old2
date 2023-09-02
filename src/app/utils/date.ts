import { format, parseISO } from 'date-fns'

export default function convertirFecha (fechaDb: string): string {
  // Convertir la fecha y hora a un objeto Date
  const fechaObj = parseISO(fechaDb)

  // Obtener el número del día, mes y año
  const numeroDia = fechaObj.getDate()
  const nombreMes = format(fechaObj, 'MMMM')
  const anio = fechaObj.getFullYear()

  // Crear la cadena deseada
  const cadenaResultante = `Subido el ${numeroDia} de ${nombreMes} de ${anio}`

  return cadenaResultante
}
