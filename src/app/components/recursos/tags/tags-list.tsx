import Tag from './tag'
const TagsList = ({ tags }: { tags: Tags | string }) => {
  if (Array.isArray(tags)) {
    return (
      <div className="flex gap-x-2">
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
    )
  }

  return <div>{tags}</div>
}

export default TagsList
