import { useEffect } from 'react';

import './MovieCard.scss'

const MovieCard = (props) => {
    useEffect(() => {
        const rating = document.querySelectorAll('.rating');
        rating.forEach(i => {
            if (i.innerText > 1 && i.innerText < 3)
                i.style.backgroundColor = 'red';

            else if (i.innerText > 3 && i.innerText < 5)
                i.style.backgroundColor = 'orange';

            else if (i.innerText > 5 && i.innerText < 8)
                i.style.backgroundColor = 'green';

            else if (i.innerText > 8 && i.innerText <= 10)
                i.style.backgroundColor = '#13DBE9';

            else
                i.style.display = 'none';
        })
    });

    return (
        <div className="movie-card"
            style={{
                backgroundImage: `url("${props.imageUrl}")`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>

            <h1>{props.title}</h1>
            <p>{props.overview}</p>
            <p className="rating">{props.rating}</p>
            <div className="your-rating-section">
                <p>Enter your rating:</p>
                <input
                    className="your-rating"
                    type="text" />
            </div>
        </div>
    );
}

export default MovieCard;