import React, { useEffect, useState } from "react";
function ProductCard() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("https://seyhashop.onrender.com/products?_limit=10");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);
  


  return (
    <>
      {/* <button onClick={()=> {alert("helllo")}} > Click me </button> */}
      {console.log(data)}
    </>
  );
}

export default ProductCard;
