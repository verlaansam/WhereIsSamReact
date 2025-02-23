import { Trash2, Pencil } from 'lucide-react';

function BlogItemSpecial() {
    return (
        <section className="border-b border-gray-700 w-11/12 flex justify-between m-2">
            <h3 className="text-lg font-roboto-slab text-gray-200">Blog Post 1</h3>
            <p className="text-sm text-gray-600">20 februari 2025</p>
            <button><Pencil /></button>
            <button><Trash2 /></button>
        </section>      
    )
  }
  
  export default BlogItemSpecial