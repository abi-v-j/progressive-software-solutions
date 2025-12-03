import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

export const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <ScrollToTop />
            <Outlet />
        </div>
    );
};
