function Dashboard({ data }) {
  return (
    <div>
      {data && data.map((item) => (
        <div key={item?.flight_number}>
          <h1>{item?.mission_name}</h1>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const URL = 'https://api.spacexdata.com/v3/launches?limit=10';
  const res = await fetch(URL);
  const data = await res.json();
  return { props: { data } };
}

export default Dashboard;
