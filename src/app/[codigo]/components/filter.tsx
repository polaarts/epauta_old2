const Filter = () => {
  const tipos = ['Ayudantías', 'Controles', 'Solemnes', 'Exámenes', 'Otros']
  return (
    <>
      {
        tipos.map((tipo: string) => (
          <div key={tipo} className="flex flex-row">
            <input
              type="checkbox"
              name="tipo"
              id={tipo}
              className="mr-2"
              value={tipo}
            />
            <label htmlFor={tipo}>{tipo}</label>
          </div>
        ))
      }
    </>

  )
}

export default Filter
