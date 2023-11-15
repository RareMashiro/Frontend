import { FilmDetails } from "./components/FilmDetails/FilmDetails"

export const AppCreate = () => {
    return (
        <div>
            <header />
            <FilmDetails 
                title={FilmDetails.title} 
                seasonsCount={FilmDetails.seasonsCount} 
                genre={FilmDetails.genre} 
            />
            <footer />
        </div>
    )
}