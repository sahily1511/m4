import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// TODO : Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Loading from './components/features/Loading';
import NotFound from './components/features/NotFound';

//! Auth


//! Lazy Load Pages
const LandingPage = lazy(() => import('./pages/landing-page'));


const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='*' element={<NotFound />} />

          {/* Auth */}

          {/* Page */}
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
      <ToastContainer />
    </>
  )
}

export default App;