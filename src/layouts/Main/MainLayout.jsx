import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-zinc-800 min-h-screen text-white flex flex-col justify-between ">
      <div>
        <nav className=" space-x-5 bg-[#3c4043] flex justify-center ">
          <div className="flex space-x-4 p-3">
            {/* <Link to={"/"} className="text-white ">
              Home
            </Link>
            <Link to={"/chat"}>Chats</Link> */}
          </div>
        </nav>
        <div className="max-w-screen-xl mx-auto px-2 py-4">
          <Outlet></Outlet>
        </div>
      </div>
      <footer className="bg-zinc-800">footer...</footer>
    </div>
  );
};

export default MainLayout;
