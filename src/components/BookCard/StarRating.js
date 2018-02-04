import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

class StarRating extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
    };

    state = {
        rating: 0,
    };

    /**
     * Check if there is a rating stored to the specific
     * book id in localStorage.
     * If there is, it updates this.state.rating with the rating stored.
     */
    async componentWillMount() {
        const stringRating = await localStorage.getItem(this.props.id);
        if (stringRating) {
            const rating = parseInt(stringRating, 10);
            this.setState({ rating });
        }
    }

    /**
     * Gets the value from the user, updates this.state.rating
     * and stores this value in localStorage with the book id as key
     * @param {string} nextValue - The value that receives from the user
     * @returns {void}
     */
    onStarClick(nextValue) {
        this.setState({ rating: nextValue });

        /**
         * Only works per PC
         * In production it should be done in the backend
         * storing the rating by user account
         */
        localStorage.setItem(this.props.id, nextValue);
    }

    render() {
        const { rating } = this.state;
        return (
            <StarRatingComponent
                name="rate1"
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
                starColor="blue"
            />
        );
    }
}

export default StarRating;
