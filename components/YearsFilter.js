import React, { useEffect, useState } from 'react';
import FilterButton from './FilterButton';

function YearsFilter({ selectedYear, setSelectedYear }) {
    const [years, setYears] = useState([]);

    useEffect(() => {
        const startYear = 2006;
        setYears([]);
        const currentYear = new Date().getUTCFullYear();
        for (let y = startYear; y !== currentYear; y += 1) {
            setYears(yearsArray => [...yearsArray, y]);
        }
    }, []);

    return (
        <div>
            <h3>Launch Year</h3>
            <div>
                {
                    years && years.map(year =>
                        <FilterButton key={year} active={year === parseInt(selectedYear,10)} onSelect={() => setSelectedYear(year)} title={year} />
                    )
                }
            </div>
        </div >
    );
}

export default YearsFilter;
