import Head from "next/head";
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useState } from 'react';
import FiltersView from "../components/FiltersView";
import Mission from "../components/Misson";
import Message from "../components/Message";
import * as constant from "../const";
import makeQueryParams from '../utils';

function Home({ response }) {
  const { query } = useRouter();
  const [serverQuery] = useState(query);
  const { data, error } = useSWR(makeQueryParams(query), {
    dedupingInterval: 6000,
    initialData: (JSON.stringify(serverQuery) === JSON.stringify(query)) ? response : null,
    revalidateOnFocus: false
  });
  return (
    <div>
      <Head>
        <title>{constant.title}</title>
        <link rel="dns-prefetch" href={constant.baseImageURL} />
        <meta
          name="description"
          content={constant.siteDescription}
        />
      </Head>
      <header>
        <div data-testid="app-heading" className="appHeader">{constant.title}</div>
      </header>
      <div className="appContainer">
        <div>
          <FiltersView />
        </div>
        {
          !data && (<Message message="Loading" />)
        }
        {
          error && (<Message message="Something went wrong" />)
        }
        {
          (data && data.length === 0) && (<Message message="No Missions available" />)
        }
        <div className="missionContainer">
          {
            data && data.map((item) => (
              <Mission key={item?.flight_number} item={item} />
            ))
          }
        </div>
      </div>
      <footer>
        <div className="appDeveloper">
          <span className="title">Developed by:</span>{' '}
          <span className="name">{constant.developerName}</span>
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
