import React, { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);


  useEffect(() => {
    const generateAvailableTimes = () => {
      const times = [];
      for (let hour = 10; hour <= 21; hour++) {
        times.push(`${hour}:00`);
        if (hour !== 21) times.push(`${hour}:30`);
      }
      return times;
    };
    setAvailableTimes(generateAvailableTimes());
  }, []);

  const addBooking = (booking) => {
    setBookings(prevBookings => [...prevBookings, { ...booking, id: Date.now() }]);
  };

  const checkAvailability = (date, time, guests) => {

    const existingBooking = bookings.find(
      booking => booking.date === date && booking.time === time
    );
    
    if (existingBooking) {
      return false;
    }

 
    const maxGuestsPerTable = 6;
    const totalTablesNeeded = Math.ceil(guests / maxGuestsPerTable);
    const maxTablesAvailable = 10; 

    return totalTablesNeeded <= maxTablesAvailable;
  };

  const value = {
    bookings,
    availableTimes,
    addBooking,
    checkAvailability
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}; 