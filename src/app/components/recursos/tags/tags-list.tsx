import Tag from './tag'
const TagsList = ({ tags }: { tags: Tags }) => {
  return (
        <div className="flex gap-x-2">
        {tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
        ))}
        </div>
  )
}

export default TagsList
