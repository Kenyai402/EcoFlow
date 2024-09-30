// Statistics.js
import React from 'react';
import './Statistics.scss';
import '../App.scss';
import './common.scss';

const Statistics = () => {
    return (
        <div className="app-container">
            <div className="app-header">
                <h1>Waste Management App</h1>
            </div>
            <div className="statistics common-component">
                <h2>Statistics</h2>
                {/* statistics content */}
            </div>
            <div className="app-footer">
                <p>&copy; 2023 Waste Management App</p>
            </div>
        </div>
    );
};

export default Statistics;