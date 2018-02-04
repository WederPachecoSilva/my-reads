import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class StarRating extends React.Component {
    state = {
        rating: 1,
    };

    async componentWillMount() {
        const stringRating = await localStorage.getItem(this.props.id);
        if (stringRating) {
            const rating = parseInt(stringRating, 10);
            this.setState({ rating });
        }
    }

    onStarClick = (nextValue, prevValue, name) => {
        // @ts-ignore
        this.setState({ rating: nextValue });

        // Only works per PC
        // In production it should be done in the backend database
        localStorage.setItem(this.props.id, nextValue);
    };

    render() {
        const { rating } = this.state;
        return (
            <StarRatingComponent
                name="rate1"
                value={rating}
                onStarClick={this.onStarClick}
                starColor="blue"
            />
        );
    }
}

export default StarRating;
