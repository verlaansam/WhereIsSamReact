import { useState } from "react";
import { X } from "lucide-react"; // Close button icon

function BlogItem({ post }) {
  const [isOpen, setIsOpen] = useState(false); // Control popup visibility
  const formattedDate = post.date?.toDate().toLocaleDateString("nl-NL"); // ✅ Convert Firestore timestamp

  return (
    <>
      <section
        className="border-b border-gray-700 p-4 cursor-pointer hover:bg-gray-800 transition duration-200 w-11/12"
        onClick={() => setIsOpen(true)}
      >
        <h3 className="text-lg font-roboto-slab text-gray-200">{post.title}</h3>
        <p className="text-sm text-gray-600">Geplaatst op {formattedDate}</p>
        <p className="mt-2 text-gray-200 truncate">{post.notes}</p>
      </section>

      {/* Popup Modal */}
      {isOpen && (
        <div className="scroll inset-0 bg-black/60 flex justify-center items-center">
          <div className="bg-slate-950 p-6 rounded-lg max-w-lg w-full relative">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-roboto-slab text-gray-200">{post.title}</h3>
            <p className="text-sm text-gray-600">Geplaatst op {formattedDate}</p>
            <p className="mt-4 text-gray-200">{post.notes}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogItem;