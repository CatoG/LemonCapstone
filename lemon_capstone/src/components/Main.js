import { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

export const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00'];

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Returns the same times for now; swap in real API logic here later
      return initializeTimes();
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

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
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;