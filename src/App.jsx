import './App.css';
import OverviewPage from './pages/OverviewPage/OverviewPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import { SIDEBAR_ITEMS } from './data/constant';
import { useMemo } from 'react';

function App() {
  const location = useLocation();

  const titleHeader = SIDEBAR_ITEMS.find((item) => item.href === location.pathname).name;

  return (

    <div className='flex h-screen bg-gray-900 text-green-100 overflow-hidden'>

      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'></div>
        <div className='absolute inset-0 backdrop-blur-sm'></div>
      </div>
      <SideBar />

      <div className='flex-1 overflow-auto relative z-10'>
        <Header title={titleHeader} />
        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
          <Routes>
            <Route path='/' element={<OverviewPage />}></Route>
            <Route path='/products' element={<ProductsPage />}></Route>
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
