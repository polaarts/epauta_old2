export const Card = ({ children }: {
  children: React.ReactNode
}) => {
  return (
        <div className="bg-white p-4 border-2 border-white rounded h-full flex flex-col">
            {children}
        </div>
  )
}

export const CardTitle = ({ children }: {
  children: React.ReactNode
}) => (
    <h2 className="font-semibold uppercase">{children}</h2>
)

export const CardHeader = ({ children }: {
  children: React.ReactNode
}) => (
    <div className='flex justify-between text-xl gap-x-2'>
        {children}
    </div>
)

export const CardBody = ({ children }: {
  children: React.ReactNode
}) => (
        <p className="text-gray-600 mb-4 mt-2">{children}</p>
)

export const CardFooter = ({ children }: {
  children: React.ReactNode
}) => (
          <div className="flex justify-between mt-auto">{children}</div>
)
