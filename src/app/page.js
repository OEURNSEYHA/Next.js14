// old version

import Link from "next/link";
import '../app/globals.css'
// export async function getServerSidProps () {
//   const response = await fetch('https://seyhashop.onrender.com/products?_limit=10')
//   const data = await response.json();
//   return {
//     props: {
//       data
//     }
//   }
// }

// async function fetchingData () {
//   const response = await fetch('https://seyhashop.onrender.com/prodcuts?_limit=5')
//   const data = await response.json();
//   return data;
// }

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next : {
      revalidate: 10
    }
  });
  const data = await response.json();
  // console.log(data)
  return (
    <div>
      {
        console.log(data)
      }
     <Link href={"/componenta"} > ComponentA </Link>
      {
        data.map((item)=>(
          <div key={item.id} className=" font-bold">
              {item.title}
          </div>
        ))
      }
    </div>
  );
}
