import { useMemo } from "react"
import { FilmDetails } from "./components/FilmDetails/FilmDetails"
import { Reviews } from "./components/Reviews/Reviews";

export const AppCreate = () => {
    const filmRating = useMemo(() => {
        return Math.floor(
            FilmDetails.reviews.reduce((sum, rev) => {
                return sum + rev.rating
            }, 0) / FilmDetails.reviews.length
        )
    }, [FilmDetails.reviews]);
    
    return (
        <div>
            <header />
            <FilmDetails 
                title={FilmDetails.title} 
                seasonsCount={FilmDetails.seasonsCount} 
                genre={FilmDetails.genre} 
            />
            <Reviews reviews={FilmDetails.reviews}/>
            <footer />
        </div>
    )
}