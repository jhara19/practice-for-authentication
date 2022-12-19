import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Pages/Footer';

import Navs from '../component/Pages/Navs';

const Main = () => {
    return (
        <div>
            <Navs></Navs>
            
            <Outlet></Outlet>
            
           <Footer></Footer>
            
        </div>
    );
};

export default Main;