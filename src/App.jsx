import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PriceList from './pages/PriceList';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Error from './pages/Error';
import React, { Suspense, useEffect } from 'react';

const App = () => {
  const AboutLazy = React.lazy(() => import('./pages/About'));

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="about"
            element={
              <Suspense>
                <AboutLazy />
              </Suspense>
            }
          />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="pricelist" element={<PriceList />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};
export default App;
