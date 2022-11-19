import React, { useState, useEffect } from "react";

const MotivationalQuote = ({}) => {
  const [quote, setQuote] = useState({});
  

  const getloadData = async () => {
    const url = `https://motivational-quote-api.herokuapp.com/quotes/random`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data here", data);
        setQuote(data.quote);
      
      });
    
  };

  useEffect(() => {
    console.log("Console Log Here");
    getloadData();
  }, []);

  return (
    <div>
      <h1 className="motivational-quote">{JSON.stringify(quote)}</h1>
    </div>
  );
};

export default MotivationalQuote;
