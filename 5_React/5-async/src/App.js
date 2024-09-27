import { getFetchThen, getAwait, getAxios } from "./api/movie";
import { useEffect, useState } from "react";

const App = () => {
  // FetchThen 방식
  const [data, setData] = useState([]);

  const loadFetchThen = () => {
    getFetchThen().then((result) => {
      console.log(result);
      setData(result);
    });
  };

  // Await 방식
  const loadAwait = async () => {
    const result = await getAwait();
    console.log(result);
    setData(result);
  };

  const loadAxois = async () => {
    const result = await getAxios();
    setData(result);
  };

  useEffect(() => {
    // loadFetchThen();
    // loadAwait();
    loadAxois();
  }, []);
  return (
    <>
      {data.map((movie, i) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <h2>{movie.genre}</h2>
          <p>{movie.actor}</p>
          {i}
        </div>
      ))}
    </>
  );
};
export default App;
