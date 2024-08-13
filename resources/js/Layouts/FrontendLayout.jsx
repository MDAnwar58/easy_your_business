import React from 'react';
import AppHeader from './Partials/AppHeader';
import AppFooter from './Partials/AppFooter';

const FrontendLayout = ({ children }) => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <AppHeader />
            {children}
            <AppFooter />
        </div>
    );
}

export default FrontendLayout;
