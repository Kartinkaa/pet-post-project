export default function Card({ header, content }) {
  return (
    <div className="w-64 m-3 p-4 bg-yellow-50 rounded-lg">
      <h2 className="text-2xl mb-3">{header}</h2>
      <div>{content}</div>
    </div>
  )
}
