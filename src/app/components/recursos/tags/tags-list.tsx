import Tag from './tag'
const TagsList = ({ tags }: { tags: Tags | string }) => {
  if (Array.isArray(tags) && tags.length > 0) {
    return (
    <div className="flex gap-x-2">
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </div>
    )
  }

  return <div className='flex flex-col uppercase bg-red-500 px-3 py-1 text-white rounded'>Sin tags</div>
}

export default TagsList
