import React from 'react';
import Cart from '../../components/Cart/Cart';
import Products from '../../components/Products/Products';
import Sidebar from '../../components/Sidebar/Sidebar';

import './HomePage.css';

const HomePage = () => {
  return (
      <div className='home'>
          <div className='sidebar'>
              <Sidebar/>
          </div>
          <div className='products'>
              <Products/>
          </div>
          <div className='cart'>
              <Cart/>
          </div>
      </div>
  )
}

export default HomePage