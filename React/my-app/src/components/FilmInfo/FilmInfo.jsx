import React from "react"
import styles from "./styles.module.css"

export const FilmInfo = ({title, genre, seasonsCount}) => {
    return (
        <>
            <p className={styles.title}>{title || 'Неизвестный'}</p>
            {Boolean(genre) && <p>genre</p>}
            <p>{seasonsCount > 0 ? `Количество: ${seasonsCount}` : 'Нет'}</p>
        </>
        
    )
}