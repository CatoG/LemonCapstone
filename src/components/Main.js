import { useReducer, useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import About from './About';
import Menu from './Menu';
import OrderOnline from './OrderOnline';
import Login from './Login';

const defaultTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

export const initializeTimes = () => {
  if (typeof window.fetchAPI === 'function') {
    return window.fetchAPI(new Date());
  }
  return defaultTimes;
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (typeof window.fetchAPI === 'function') {
        return window.fetchAPI(new Date(action.payload));
      }
      return state;
    default:
      return state;
  }
};

function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const [bookingData, setBookingData] = useState(() => {
    try {
      const stored = localStorage.getItem('bookingData');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('bookingData', JSON.stringify(bookingData));
  }, [bookingData]);

  const submitForm = (formData) => {
    const success =
      typeof window.submitAPI === 'function'
        ? window.submitAPI(formData)
        : true;
    if (success) {
      setBookingData((prev) => [...prev, formData]);
      navigate('/confirmed');
    }
    return success;
  };

  return (
    <main aria-label="Main content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservations"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              bookingData={bookingData}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default Main;