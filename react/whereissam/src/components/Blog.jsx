import BlogItem from "./BlogItem"

function Blog() {


  return (
    <div className="w-screen flex flex-col items-center justify-center border-b border-gray-700 p-2">
        <h2 className="text-2xl font-roboto-slab  text-gray-200 pl-2 w-screen">Het Logboek</h2>
        <h4 className="text-sm text-gray-600 border-b border-gray-700 pl-2 w-screen">Op spelfouten voorbehouden</h4>
        <ul className="p-2 w-screen flex flex-col items-center">
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
        </ul>
        <button className="text-sm text-white font-roboto-slab border p-2 ml-4 w-3/4 hover:bg-white hover:text-black">Meer Blogs...</button>
      </div>
  )
}

export default Blog