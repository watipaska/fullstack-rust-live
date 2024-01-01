import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar'
import Routers from './Routers';

const MainLayout = () => (
    <>
        <Navbar />
        <Sidebar/>
        <div>
            <Routers />
        </div>
    </>
);

export default MainLayout;