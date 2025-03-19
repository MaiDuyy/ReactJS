import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useBicycleContext } from "../context/BicycleContext";

const S2 = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const {
    filteredBicycles,
    loading,
    selectedCategory,
    fetchBicycles,
    filterBicycles,
    deleteBicycle,
    searchBicycles,
  } = useBicycleContext();

  useEffect(() => {
    fetchBicycles();
  }, []);

  const handleFilterChange = (category) => {
    filterBicycles(category);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    searchBicycles(value);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this bicycle?')) {
      try {
        await deleteBicycle(id);
      } catch (error) {
        alert('Failed to delete bicycle');
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">The World's Best Bike</h1>
      
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-[#00C8E8] text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/add")}
        >
          ADD
        </button>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search bicycles..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded w-64"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "All"
              ? "bg-[#FFA500]"
              : "bg-[#FFD700]"
          }`}
          onClick={() => handleFilterChange("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "Roadbike"
              ? "bg-[#FFA500]"
              : "bg-[#FFD700]"
          }`}
          onClick={() => handleFilterChange("Roadbike")}
        >
          Roadbike
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === "Mountain"
              ? "bg-[#FFA500]"
              : "bg-[#FFD700]"
          }`}
          onClick={() => handleFilterChange("Mountain")}
        >
          Mountain
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {filteredBicycles.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4 shadow">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-[#FF4500]">${item.price}</p>
              <div className="flex gap-4 mt-2">
                <button 
                  className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center"
                  onClick={() => navigate(`/edit/${item.id}`)}
                >
                  <FontAwesomeIcon icon={faPencil} />
                </button>
                <button 
                  className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center"
                  onClick={() => handleDelete(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default S2;