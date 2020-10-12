import React, {useEffect} from 'react';
import axios from 'axios'

function Giphy() {

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: "mbRWHlb3QJB1cjG4nQovpVT4iazco7cZ"
                }                
            });
            console.log(result);
        };
        fetchData();
    });

  return (
      <h1>hola</h1>
  );
}

export default Giphy;
