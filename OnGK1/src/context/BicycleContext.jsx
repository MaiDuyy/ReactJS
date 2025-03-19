import React, { createContext, useContext, useState } from 'react';

const BicycleContext = createContext();

export const useBicycleContext = () => {
  const context = useContext(BicycleContext);
  if (!context) {
    throw new Error('useBicycleContext must be used within a BicycleProvider');
  }
  return context;
};

export const BicycleProvider = ({ children }) => {
  const [bicycles, setBicycles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredBicycles, setFilteredBicycles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchBicycles = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://6710b499a85f4164ef2ee9b0.mockapi.io/bicycle');
      const data = await response.json();
      setBicycles(data);
      setFilteredBicycles(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const addBicycle = async (newBicycle) => {
    try {
      setLoading(true);
      const response = await fetch('https://6710b499a85f4164ef2ee9b0.mockapi.io/bicycle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBicycle),
      });
      const data = await response.json();
      setBicycles([...bicycles, data]);
      filterBicycles(selectedCategory, [...bicycles, data]);
      setLoading(false);
      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  const deleteBicycle = async (id) => {
    try {
      setLoading(true);
      await fetch(`https://6710b499a85f4164ef2ee9b0.mockapi.io/bicycle/${id}`, {
        method: 'DELETE',
      });
      const updatedBicycles = bicycles.filter(bike => bike.id !== id);
      setBicycles(updatedBicycles);
      filterBicycles(selectedCategory, updatedBicycles);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  const filterBicycles = (category, data = bicycles) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredBicycles(data);
    } else {
      setFilteredBicycles(
        data.filter(item => item.categories && item.categories.includes(category))
      );
    }
  };

  const searchBicycles = (searchTerm) => {
    const results = bicycles.filter(bike => 
      bike.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bike.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBicycles(results);
  };

  const value = {
    bicycles,
    filteredBicycles,
    loading,
    error,
    selectedCategory,
    fetchBicycles,
    addBicycle,
    deleteBicycle,
    filterBicycles,
    searchBicycles,
  };

  return (
    <BicycleContext.Provider value={value}>
      {children}
    </BicycleContext.Provider>
  );
}; 