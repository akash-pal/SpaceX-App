import React, { useEffect, useState } from "react";
import router, { useRouter } from 'next/router';
import YearsFilter from "./YearsFilter"
import LaunchFilter from "./LaunchFilter";
import LandingFilter from "./LandingFilter";

function FiltersView() {
    const { query } = useRouter();
    const [launch, setLaunch] = useState(query?.launch || null);
    const [landing, setLanding] = useState(query?.landing || null);
    const [selectedYear, setSelectedYear] = useState(query?.selectedYear || null);

    useEffect(() => {
        if (launch != null || landing != null || selectedYear != null) {
            router.push(
                {
                    pathname: '/',
                    query: {
                        launch,
                        landing,
                        selectedYear
                    }
                },
                undefined,
                { shallow: true }
            )
        }
    }, [launch, landing, selectedYear]);

    return (
        <div className="filterContainer">
            <div className="filterHeading">Filters</div>
            <YearsFilter selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
            <LaunchFilter launch={launch} setLaunch={setLaunch} />
            <LandingFilter landing={landing} setLanding={setLanding} />
        </div>
    )
}

export default FiltersView;