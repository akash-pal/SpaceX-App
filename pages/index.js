import Head from "next/head";
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FiltersView from "../components/FiltersView";
import Mission from "../components/Misson";

const baseURL = 'https://api.spacexdata.com/v3/launches?limit=10';
const developerName = 'Akash Pal'
const title = 'SpaceX Launch Program';
const siteDescription = 'SpaceX Launch Program Frontend with Filters';
const baseImageURL = 'https://imgbox.com/';

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
      <Head>
        <title>{title}</title>
        <link rel="dns-prefetch" href={baseImageURL} />
        <meta
          name="description"
          content={siteDescription}
        />
      </Head>
      <header>
        <div className="appHeader">{title}</div>
      </header>
      <div className="appContainer">
        <div>
          <FiltersView />
        </div>
        <div className="missionContainer">
          {data && data.map((item) => (
            <Mission key={item?.flight_number} item={item} />
          ))}
        </div>
      </div>
      <footer>
        <div className="appDeveloper">
          <span className="title">Developed by:</span>{' '}
          <span className="name">{developerName}</span>
        </div>
      </footer>
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
