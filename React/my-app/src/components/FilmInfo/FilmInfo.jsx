import React from "react"

export const FilmInfo = ({title, genre, seasonsCount}) => {
    return (
        <>
            <p>{title || 'Неизвестный'}</p>
            {Boolean(genre) && <p>genre</p>}
            <p>{seasonsCount > 0 ? `Количество: ${seasonsCount}` : 'Нет'}</p>
        </>
        
    )
}