type Semestre = 1 | 2 | 3

type Recursos = Recurso[] | null

interface Recurso {
  id?: string
  tipo: string
  anio: number | string
  semestre: Semestre | string
  descripcion?: string
  url: string
  ramo: string
  tags: Tags | string
}

type Tags = Tag[] | string

interface Tag {
  id: string
  tag: string
}

type Ramos = Ramo[] | null

interface Ramo {
  codigo: string
  nombre: string
}
