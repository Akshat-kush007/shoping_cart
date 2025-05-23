import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const HomePage = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading]=useState(false);
  const [posts, setPosts]=useState([]);

  async function fetchProductData(){
    setLoading(true);

    try{
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log(data);
        setPosts(data)

    }catch(error){
      console.log('Error in fetching data...')
      setPosts([])
    }

    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData()
  },[]);


  return (
    <div className="h-full"> 
      {
        loading ?
        <Spinner/> :
        posts.length > 0 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10  min-h-[80vh]">
          {

            posts.map((post)=><Product post={post} key={post.id}/>)
          }
        </div> :
        <div className="flex justify-center items-center">
          <p>
            No Post Found
          </p>
          </div>

      }

    </div>
  );
};

export default HomePage;
