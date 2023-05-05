import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ShowNames() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchShows() {
      const response = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setShows(response.data);
    }
    fetchShows();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-3xl mb-6 text-center ">TV Show List</h1>
      </div>
      <div>
        <ul className="space-y-16" >
          {shows.map(({ show }) => (
            <li className="flex flex-col items-center space-y-2" key={show.id}>
              <img className="w-72 h-72" src={show.image?.medium} alt={show.name} />
              <Link className="text-blue-400" to={`/shows/${show.id}`}>{show.name}</Link>
              <p>{show.premiered}</p>
              <p>{show.language}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShowNames;
