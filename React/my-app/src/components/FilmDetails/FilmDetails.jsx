import { useCount } from '../../hooks/useCount';
//import { useState } from 'react';

export const FilmDetails = ({title, genre, seasonsCount}) => {
    let {count, increment, decrement} = useCount(0);
    return (
        <div>
            <p>{title || 'Неизвестный'}</p>
            {Boolean(genre) && <p>genre</p>}
            <p>{seasonsCount > 0 ? `Количество: ${seasonsCount}` : 'Нет'}</p>
            <div>
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    )    
}