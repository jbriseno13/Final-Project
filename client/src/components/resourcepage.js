import React, { useEffect, useState } from "react";

const Resources = () => {
  const [resource, setResource] = useState([]);

  const getResource = async () => {
    const response = await fetch("/api/resources");
    const resource = await response.json();
    setResource(resource);
  };

  useEffect(() => {
    getResource();
  }, []);

  return (
    <div className="resources">
      <h2> Resources </h2>
      <ul>
        {resource.map((reso, index) => {
          return (
            <li key={index} className="reso-cards">
              <img className="reso-image" src={reso.image}></img> {reso.name}{" "}
              {reso.phone} {reso.website}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Resources;
