import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [houses, setHouses] = useState([]);
  const [error, setError] = useState(null);

  const getHouses = async () => {
    try {
      const response = await axios.get(
        "https://wizard-world-api.herokuapp.com/houses"
      );
      setHouses(response.data);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  useEffect(() => {
    getHouses();
  }, []);

  return (
    <div className="home">
      <h1>Hogwarts houses</h1>
      {houses ? (
        houses.map((elem) => {
          return (
            <div className='house-container' key={elem.id}>
              <h2 className="house-name">{elem.name}</h2>
              <h4 className="house-founder">{elem.founder}</h4>
              <Link className="see-more" to={`/${elem.id}`}>See more</Link>
            </div>
          );
        })
      ) : (
        <p className="error-message">{error}</p>
      )}
    </div>
  );
      }  

export default Home;