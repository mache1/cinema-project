import { useState, useEffect } from 'react';

import './MovieCard.scss'

const MovieCard = (props) => {
    const [overview, setOverview] = useState(false);
    const [moreInfo, setMoreInfo] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 900)
            setMoreInfo(true);

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
        });
    }, []);

    const onMouseOverHandler = () => {
        if (window.innerWidth > 900)
            setMoreInfo(true);
    }

    const onMouseOutHandler = () => {
        if (window.innerWidth > 900)
            setMoreInfo(false);
    }

    const showOverviewHandler = () => {
        setOverview(true);
    }

    const closeOverviewHandler = () => {
        setOverview(false);
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
            <p className="overview" style={{
                opacity: overview ? 1 : 0,
                zIndex: overview ? 20 : -1
            }}>
                {props.overview}
                <button
                    className="close-overview-btn"
                    onClick={closeOverviewHandler}>Close</button>
            </p>

            <p className="rating">{props.rating}</p>

            <button
                style={{
                    opacity: moreInfo ? 1 : 0,
                    zIndex: moreInfo ? 10 : -1
                }}
                className="more-info-btn"
                onClick={showOverviewHandler}>More information</button>
        </div>
    );
}

export default MovieCard;