// src/components/BeerComponent.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBeers } from '../beerSlice';

const BeerComponent = () => {
  const dispatch = useDispatch();
  const beers = useSelector((state) => state.beers.beers);

  useEffect(() => {
    const fetchBeers = async () => {
      const beerPromises = [];

      // გავაკეთოთ 10 მოთხოვნა, რომ მივიღოთ 10 შემთხვევითი ლუდი
      for (let i = 0; i < 10; i++) {
        beerPromises.push(
          fetch('https://api.punkapi.com/v2/beers/random') // API-ის URL
            .then((response) => response.json())
        );
      }

      const beerData = await Promise.all(beerPromises);
      // რადგან თითოეული fetch მოთხოვნა დაუბრუნებს ერთ ლუდს, ჩვენ უნდა გავ Flatten-ოთ მონაცემები
      const allBeers = beerData.flat();
      dispatch(setBeers(allBeers)); // Redux-ში დამატება
    };

    fetchBeers();
  }, [dispatch]);

  return (
    <div>
      <h1>Random Beer List</h1>
      <div className="beer-list">
        {beers.map((beer) => (
          <div key={beer.id} className="beer-item">
            <h2>{beer.name}</h2>
            <img src={beer.image_url} alt={beer.name} width={100} />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeerComponent;