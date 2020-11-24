import React from 'react';

import './toggle-btn.scss';

export const ToggleBtn: React.FC = () => (
    <div className="toggle-btn">
        <svg className="toggle-btn-svg">
            <circle className="toggle-btn-circle" />
            <circle className="toggle-btn-overlay" />
        </svg>
    </div>
);
