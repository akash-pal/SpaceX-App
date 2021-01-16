import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FiltersView from "../components/FiltersView";

const baseURL = 'https://api.spacexdata.com/v3/launches?limit=10';

function makeQueryParams(query) {
  let url = baseURL;
  if (query.launch) {
    url += `&launch_success=${query.launch}`
  }
  if (query.landing) {
    url += `&land_success=${query.landing}`
  }
  if (query.selectedYear) {
    url += `&launch_year=${query.selectedYear}`;
  }
  return url;
}

function Home({ response }) {
  const { query } = useRouter();
  const [serverQuery] = useState(query);
  const { data } = useSWR(makeQueryParams(query), {
    dedupingInterval: 6000,
    initialData: (JSON.stringify(serverQuery) === JSON.stringify(query)) ? response : null,
    revalidateOnFocus: false 
  });
  return (
    <div>
      <h1>SpaceX Launch Programs</h1>
      <FiltersView />
      {data && data.map((item) => (
        <div key={item?.flight_number}>
          <h1>{item?.mission_name}</h1>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const URL = makeQueryParams(query);
  const res = await fetch(URL);
  const response = await res.json();
  return { props: { response } };
}

export default Home;
