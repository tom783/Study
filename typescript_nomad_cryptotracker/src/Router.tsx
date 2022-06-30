import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chart, Coin, Coins, Price } from 'routes';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId/*" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
