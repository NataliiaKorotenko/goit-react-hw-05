import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';

import './App.css';
import Loader from "./components/Loader/Loader";

const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Navigation />
      </Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
