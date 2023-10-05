import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
export const Card = ({ posterUrl, title, year, type, imdbid }) => {
  const AddToFav = async(favoriteMovies)=>{
    console.log(favoriteMovies);
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ favoriteMovies: favoriteMovies }),
      });
  
      
  
      const data = await response.json();
      console.log('Favorite movie posted successfully:', data);
      return data;
    } catch (error) {
      console.error('Error posting favorite movie:', error);
      throw error;
    }
  }
  return (
    <div className="col-md-4 mb-4">
    <div className="card">
      <div
        className="card-img-top"
        style={{ backgroundImage: `url(${posterUrl})`, backgroundSize: 'cover', height: '200px' }}
      ></div>
      <div className="card-body">
        {/* Favorite Icon */}

        <h5 className="card-title">{title}</h5>
        <p className="card-text">Year: {year}</p>
        <p className="card-text">Type: {type}</p>
        <AiOutlineHeart onClick={()=>AddToFav(imdbid)} color='black' className="favorite-icon" />
      </div>
    </div>
  </div>
  )
}
