import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const HouseDetails = () => {
  const { houseId } = useParams();
  const [house, setHouse] = useState({});
  const [error, setError] = useState(null);

  const getHouse = async () => {
    try {
      const response = await axios.get(
        `https://wizard-world-api.herokuapp.com/houses/${houseId}`
      );
      setHouse(response.data);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  useEffect(() => {
    getHouse();
  }, []);

  return (
    <div className="house-details">
      {error ? (
        <div className="error-message">
          Oops, something went wrong. Please try again later.
        </div>
      ) : (
        <>
          <button className="back-home-link2"><a href="/"> Back home </a></button>  
          <h2>{house.name}</h2>
          <p>Founded by {house.founder}</p>
          <p>Colors: {house.houseColours}</p>
          <p>
            Element: {house.element} | Animal: {house.animal}
          </p>
          <p>Traits of students:</p>
          <ul>
            {house.traits ? (
              house.traits.map((elem) => {
                return (
                  <div key={elem.id}>
                    <li className="student-trait">{elem.name}</li>
                  </div>
                  
                );
              })
            ) : (
              <p>Sarandonga</p>
              
            )}
          </ul>
        </>
      )}
      
    </div>
  );
  
};


export default HouseDetails;