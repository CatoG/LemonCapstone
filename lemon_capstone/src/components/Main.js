import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';

function Main() {
  return (
    <main aria-label="Main content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
    </main>
  );
}

export default Main;