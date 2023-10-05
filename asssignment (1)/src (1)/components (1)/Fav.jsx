import React, { useEffect, useState } from 'react'
import { byimdb, fav } from '../request/req'
import { Card } from './Card'

export const Fav = () => {
    const [data,setdata] = useState(null)
    const[movie,setmovie] = useState(null)
    const fetchMovie = async(fav_id_arr)=>{
        try {
            // Use Promise.all to fetch data for all items concurrently
            const movieData = await Promise.all(
              fav_id_arr.map((id) => byimdb(id))
            );
            setmovie(movieData)
            console.log(movieData);
          } catch (error) {
            console.error('Error fetching movie data:', error);
          }
    }
    useEffect(()=>{
        fav().then((data)=>{const favIds = data.map(({ fav_id }) => fav_id);
    setdata(favIds) ; fetchMovie(data)   })
    },[])
    
  return (
    <div>   <h1 className='heading text-center'>Favourite</h1>
       {
      movie?.map((ele,i)=>{
        return(<Card key={i} posterUrl={ele.Poster} title={ele.Title} year={ele.Year} type={ele.Type} imdbid={ele.imdbID}/>)
      })
    }
    </div>
   
  )
}
