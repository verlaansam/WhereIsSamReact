import BlogItem from "../components/BlogItem"
import Header from "../components/Header"

function Blogs() {
  return (
    <div className="w-screen flex flex-col items-center  border-b border-gray-700 p-2 bg-slate-950 h-screen">
        <Header title="Logboek"/>
        <h2 className="text-2xl font-roboto-slab  text-gray-200 pl-2 w-screen">Het Logboek</h2>
        <h4 className="text-sm text-gray-600 border-b border-gray-700 pl-2 w-screen">Op spelfouten voorbehouden</h4>
        <ul className="p-2 w-screen flex flex-col items-center">
          <BlogItem/>
          <BlogItem/>
          <BlogItem/>
        </ul>
      </div>
  )
}

export default Blogs