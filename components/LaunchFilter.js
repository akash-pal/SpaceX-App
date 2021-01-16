import React from 'react';
import FilterButton from './FilterButton';

function LaunchFilter({ launch, setLaunch }) {
    return (
        <div>
            <h3>Successful Launch</h3>
            <FilterButton active={launch?.toString() === "true"} onSelect={() => setLaunch(true)} title='True' />
            <FilterButton active={launch?.toString() === "false"} onSelect={() => setLaunch(false)} title='False' />
        </div>
    );
}

export default LaunchFilter;
