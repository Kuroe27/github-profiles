import React, { useState, Dispatch, SetStateAction } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
interface Props {
  handleSearch: Dispatch<SetStateAction<string>>;
}

function Navigation() {
  const [query, setSearchMovie] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (query && query !== "") {
      navigate(`movies/${query}`);
    }
  }

  function handleHomeClick() {
    navigate("/");
  }

  return (
    <nav className="absolute z-[110] flex w-full h-16 px-8  bg-transparent justify-between items-center shadow-lg">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between">
        <h2
          className="text-2xl font-mono cursor-pointer text-white"
          onClick={handleHomeClick}
        >
          CinePedia
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              className=" w-48 text-1xl h-9 text-[#ffffffd3] bg-gray-200 rounded-full p-2 px-5 bg-transparent border-white"
              type="text"
              placeholder=" Search..."
              value={query}
              onChange={(e) => setSearchMovie(e.target.value)}
            />
            <CiSearch className="absolute top-1/2 transform -translate-y-1/2 right-5 text-gray-400" />
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navigation;
