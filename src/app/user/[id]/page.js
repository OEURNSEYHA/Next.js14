import React from "react";

export default async function page({ params }) {
  console.log(params.id);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,{next : {
        revalidate: 10
      }}
  );
  const data = await response.json();

  return (
    <div>
 
     {
      console.log([data] )
        // data.title
     }
      {[data].map((item) => (
        <div key={item.id} className=" font-bold">
          {item.title}
        </div>
      ))}
    </div>
  );
}
