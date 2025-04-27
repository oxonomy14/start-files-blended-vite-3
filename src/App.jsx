import Heading from './components/Heading/Heading';
import Header from './components/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import SearchCountry from './pages/SearchCountry';
import Country from './pages/Country';

import { lazy, Suspense } from 'react';

export const App = () => {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Heading title="App" bottom />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<SearchCountry />} />
          <Route path="/country/:countryId" element={<Country />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
