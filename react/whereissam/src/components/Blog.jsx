import BlogItem from "./BlogItem"

function Blog() {


  return (
    <div className="bg-white p-6 border rounded-lg shadow-md w-96 border-2 border-black">
        <h2 className="text-xl font-bold mb-4 text-black underline">Recente Blog Posts</h2>
        <ul>
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
        </ul>
        <p className="text-sm text-gray-600 underline">Meer Blogs...</p>
      </div>
  )
}

export default Blog