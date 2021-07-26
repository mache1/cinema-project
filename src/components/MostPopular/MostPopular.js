import './MostPopular.scss';

import MostPopularCards from '../MostPopularCards/MostPopularCards';

const MostPopular = (props) => {
    return (
        <div className="most-popular">
            <h1>Most Popular</h1>
            <MostPopularCards />
        </div>
    );
}

export default MostPopular;