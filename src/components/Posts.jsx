import Card from './Card'
import Button from './Button'

export default function Posts({ posts }) {
  return (
    <>
      <h1 className="text-3xl ml-12 font-semibold">Posts</h1>
      <div className="flex flex-wrap mx-8 mb-5">
        {posts.map((post) => (
          <Card key={post.id} header={post.title} content={post.body} />
        ))}
      </div>
      <Button />
    </>
  )
}
