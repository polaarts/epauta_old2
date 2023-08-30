const Container = ({ children }: {
  children: React.ReactNode
}) => (
    <div className="container mx-auto mt-4 px-4 md:p-0">
        {children}
    </div>
)

export default Container
