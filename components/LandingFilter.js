import React from 'react';

import FilterButton from './FilterButton';

function LandingFilter({ landing, setLanding }) {
    return (
        <div>
            <h3>Successful Landing</h3>
            <FilterButton active={landing?.toString() === "true"} onSelect={() => setLanding(true)} title='True' />
            <FilterButton active={landing?.toString() === "false"} onSelect={() => setLanding(false)} title='False' />
        </div>
    );
}

export default LandingFilter;
