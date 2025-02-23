import BlogItemSpecial from "../components/BlogItemSpecial";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="w-screen h-full flex flex-col items-center justify-start bg-slate-950 text-gray-200">
      <Header title="dashboard"/>
      <h1 className="text-xl font-roboto-slab p-2 ">Welcome, {user.email}!</h1>
      <Form/>
      <ul className="p-2 w-screen">
        <li>
          <BlogItemSpecial></BlogItemSpecial>
        </li>
        <li>
          <BlogItemSpecial></BlogItemSpecial>
        </li>
        <li>
          <BlogItemSpecial></BlogItemSpecial>
        </li>
      </ul>
      <button className="text-sm text-white font-roboto-slab border p-2 ml-4 w-3/4 hover:bg-white hover:text-black m-4" onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
