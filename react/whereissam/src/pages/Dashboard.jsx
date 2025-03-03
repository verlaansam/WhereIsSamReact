import { useState, useEffect } from "react";
import { db, collection, getDocs, query, orderBy } from "../firebase";
import BlogItemSpecial from "../components/BlogItemSpecial";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);

  const ALLOWED_UID = import.meta.env.VITE_ALLOWED_UID; 
  const ALLOWED_EMAIL = import.meta.env.VITE_ALLOWED_EMAIL;

  // Redirect if not logged in
  if (!user) {
    navigate("/login");
    return null;
  }

  if (user.uid !== ALLOWED_UID && user.email !== ALLOWED_EMAIL) {
    navigate("/");
    return null;
  }

  // Fetch blog posts from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogQuery = query(collection(db, "logEntries"), orderBy("date", "desc"));
        const querySnapshot = await getDocs(blogQuery);
        const posts = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-screen h-full flex flex-col items-center justify-start bg-slate-950 text-gray-200">
      <Header title="Dashboard" />
      <h1 className="text-xl font-roboto-slab p-2">Welcome, {user.email}!</h1>
      <Form />

      <ul className="p-2 w-screen">
        {blogPosts.length > 0 ? (
          blogPosts.map((post) => <BlogItemSpecial key={post.id} post={post} />)
        ) : (
          <p className="text-gray-500 text-center mt-4">Geen blogposts beschikbaar.</p>
        )}
      </ul>

      <button
        className="text-sm text-white font-roboto-slab border p-2 ml-4 w-3/4 hover:bg-white hover:text-black m-4"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

