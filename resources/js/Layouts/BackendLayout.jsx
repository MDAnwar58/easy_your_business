import React from 'react';
import Header from '@/Layouts/Partials/Backend/Header';
import Sidebar from '@/Layouts/Partials/Backend/Sidebar';
import SidebarBackdrop from '@/Layouts/Partials/Backend/sidebarBackdrop';
import DrawerNavigation from './Partials/Backend/DrawerNavigation';

const BackendLayout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className="flex pt-16 overflow-hidden">
                <Sidebar />
                <SidebarBackdrop /> 


                <div id="main-content" className="relative w-full h-full overflow-y-auto lg:ml-64">
                    <main className="px-5 py-5">
                        {children}
                    </main>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BackendLayout;
