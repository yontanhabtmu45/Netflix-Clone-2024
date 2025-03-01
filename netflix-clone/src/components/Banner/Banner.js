import React, {useState, useEffect} from 'react'
import axios from "../../utils/axios"
import requests from "../../utils/requests"

const Banner = () => {

    const [movie, setMovie] = useState({})
    useEffect(() => {
        (async () => {
            try{
                const request = await axios.get(requests.fetchNetflixOriginals);
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            } catch (error) {
                console.log("error", error);
                
            }
        })()
    },[])

  return (
    <div 
    className='banner'
    style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/orginal${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}
    >
        <div className='banner-contents'>
            <h1 className='banner-title'>
                {movie?.title || movie?.name || movie?.orginal_name}
            </h1>
            <div className='banner-buttons'>
                <button className='banner-button play'>Play</button>
                <button className='banner-button'>My List</button>
            </div>
            {/* <h1 className='banner-description'>{truncate(movie?.overview, 150)}</h1> */}
        </div>
        <div className='banner-fadeBottom' />
    </div>
  )
}

export default Banner