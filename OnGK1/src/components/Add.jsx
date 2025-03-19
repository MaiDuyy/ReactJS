import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBicycleContext } from '../context/BicycleContext';

const FormAdd = () => {
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const { addBicycle, loading } = useBicycleContext();

  const categoriesList = ['Roadbike', 'Mountain'];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!img || !name || !price || !description || selectedCategories.length === 0) {
      alert('All fields are required!');
      return;
    }

    try {
      const newItem = {
        id: Date.now().toString(),
        img,
        name,
        price: parseFloat(price),
        description,
        categories: selectedCategories,
      };

      await addBicycle(newItem);
      navigate('/');
    } catch (error) {
      alert('Failed to add bicycle');
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Add New Bicycle</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Image URL"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            disabled={loading}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            disabled={loading}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            disabled={loading}
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            disabled={loading}
          />
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className="w-full p-2 border border-gray-300 rounded bg-gray-50 text-left"
            disabled={loading}
          >
            {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'Select Categories'}
          </button>

          {dropdownVisible && (
            <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
              {categoriesList.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => selectCategory(category)}
                  className={`w-full p-2 text-left hover:bg-gray-100 ${
                    selectedCategories.includes(category) ? 'bg-blue-50' : ''
                  }`}
                  disabled={loading}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#00C8E8] text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default FormAdd;