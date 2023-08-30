const Tag = ({ tag }: { tag: Tag }) => {
  return (
        <div className="flex flex-col uppercase bg-red-500 px-3 py-1 text-white rounded">
        <h1>{tag.tag}</h1>
        </div>
  )
}

export default Tag
