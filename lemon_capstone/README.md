# Reactive Lemon Restaurant — Capstone Project

A React web application for the **Reactive Lemon** Mediterranean restaurant in Chicago. The app allows customers to browse the menu, learn about the restaurant, and reserve a table online.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Running the App](#running-the-app)
- [Running Tests](#running-tests)
- [Building for Production](#building-for-production)
- [Key Implementation Details](#key-implementation-details)

---

## Features

- **Homepage** — hero section, weekly specials, customer testimonials, and restaurant story
- **Table reservations** — date/time picker driven by a live availability API, controlled form with full client-side validation
- **Booking confirmation** — dedicated confirmation page after a successful reservation
- **Confirmed reservations table** — persisted to `localStorage` across sessions
- **Menu page** — full menu grouped by category
- **About, Order Online & Login pages** — complete navigation with no broken links
- **Accessibility** — semantic HTML5, ARIA labels, `aria-invalid`/`aria-describedby` on form fields, keyboard-navigable

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI framework |
| react-router-dom | 6.x | Client-side routing |
| react-scripts (CRA) | 5.0.1 | Build tooling |
| Jest + React Testing Library | 27 / 16.x | Unit testing |
| @testing-library/jest-dom | 6.x | Custom DOM matchers |

---

## Project Structure

```
src/
  App.js                  # Root component — BrowserRouter + layout
  App.css                 # Global styles
  components/
    Header.js             # Site logo and branding
    Nav.js                # Main navigation (react-router Links)
    Footer.js             # Footer nav, contact, social links
    Main.js               # Route definitions + shared state (useReducer, useState)
    Homepage.js           # Composes CallToAction, Specials, CustomersSay, Chicago
    CallToAction.js       # Hero section with Reserve-a-Table CTA
    Specials.js           # Weekly specials card grid
    CustomersSay.js       # Customer testimonials
    Chicago.js            # Restaurant backstory section
    BookingPage.js        # Reservation page wrapper + confirmed bookings table
    BookingForm.js        # Controlled form with validation (validate() exported)
    ConfirmedBooking.js   # Post-submission confirmation page
    About.js              # About the restaurant
    Menu.js               # Full menu by category
    OrderOnline.js        # Order-online coming-soon page
    Login.js              # Login form
public/
  index.html              # HTML entry point
  api.js                  # window.fetchAPI and window.submitAPI (course-provided)
```

---

## Prerequisites

- **Node.js** 16 or higher — [download](https://nodejs.org/)
- **npm** 7 or higher (bundled with Node.js)

Verify your versions:

```bash
node --version
npm --version
```

---

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd lemon_capstone
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This installs all packages listed in `package.json`, including React, react-router-dom, and the testing libraries.

---

## Running the App

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000) in your default browser. The page hot-reloads when you edit source files.

---

## Running Tests

Run all tests once (suitable for CI):

```bash
npm test -- --watch=false
```

Run in interactive watch mode (re-runs on file save):

```bash
npm test
```

**Current test coverage:**

| Suite | Tests |
|---|---|
| `App.test.js` | App renders heading |
| `BookingForm.test.js` | HTML5 attributes, `validate()` (all fields, valid + invalid), disabled button, inline errors, form submission |
| `Main.test.js` | `initializeTimes`, `updateTimes`, unknown action, localStorage read on load, localStorage write on submit |

Total: **31 tests across 3 suites** — all passing.

---

## Building for Production

```bash
npm run build
```

Outputs optimised static files to the `build/` folder. Serve with any static host (Netlify, Vercel, GitHub Pages, etc.) or locally with:

```bash
npx serve -s build
```

---

## Key Implementation Details

### Availability API

`public/api.js` exposes two globals loaded via `<script>` in `index.html`:

- `window.fetchAPI(date)` — returns an array of available time strings for the given `Date` object
- `window.submitAPI(formData)` — returns `true` on a successful booking

These are mocked in tests via `beforeEach`:

```js
window.fetchAPI = jest.fn(() => ['17:00', '18:00', '19:00']);
window.submitAPI = jest.fn(() => true);
```

### State management

- `availableTimes` — managed with `useReducer` in `Main.js`; `initializeTimes` and `updateTimes` are named exports so they can be unit-tested independently
- `bookingData` — managed with `useState` in `Main.js`; initialised lazily from `localStorage` and synced back via `useEffect`

### Form validation

`BookingForm.js` exports a pure `validate({ date, time, guests, occasion, availableTimes })` function that returns an errors object. Errors are shown only after a field has been touched (blur) or a submit is attempted. The submit button is disabled whenever the form is invalid.
