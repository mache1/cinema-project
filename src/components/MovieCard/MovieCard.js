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

    const onMouseOverHandler = (e) => {
        if (window.innerWidth > 900) {
            e.target.closest('.movie-card').querySelector('.more-info-btn').style.opacity = 1;
            e.target.closest('.movie-card').querySelector('.more-info-btn').style.zIndex = 10;
        }
    }

    const onMouseOutHandler = (e) => {
        if (window.innerWidth > 900) {
            e.target.closest('.movie-card').querySelector('.more-info-btn').style.opacity = 0;
            e.target.closest('.movie-card').querySelector('.more-info-btn').style.zIndex = -1;
        }
    }

    const showOverviewHandler = (e) => {
        e.target.closest('.movie-card').querySelector('.overview').style.opacity = 1;
        e.target.closest('.movie-card').querySelector('.overview').style.zIndex = 20;
        e.target.style.opacity = 0;
    }

    const closeOverviewHandler = (e) => {
        e.target.closest('.movie-card').querySelector('.overview').style.opacity = 0;
        e.target.closest('.movie-card').querySelector('.overview').style.zIndex = -1;
        e.target.closest('.movie-card').querySelector('.more-info-btn').style.opacity = 1;
    }

    return (
        <div className="movie-card"
            onMouseOver={onMouseOverHandler}
            onMouseOut={onMouseOutHandler}
            style={{
                backgroundImage: `url("${props.imageUrl}")`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>

            <h1>{props.title}</h1>
            <p className="overview">{props.overview} <button className="close-overview-btn" onClick={closeOverviewHandler}>Close</button></p>
            <p className="rating">{props.rating}</p>
            <button className="more-info-btn" onClick={showOverviewHandler}>More information</button>
        </div>
    );
}

export default MovieCard;