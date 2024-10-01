import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TokenDisplay from './components/TokenDisplay';
import WasteTracking from './components/WasteTracking';
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard';
import './App.scss'; // Import global styles

const App = () => {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <TokenDisplay />
                <WasteTracking />
                <Dashboard />
                <UserProfile />
            </main>
            <Footer />
        </div>
    );
};

export default App;
