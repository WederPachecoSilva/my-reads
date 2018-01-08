import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import debounce from 'lodash/debounce';
import { search } from '../Utils/BooksAPI';
// import BookCard from './BookCard';
const styles = {
    searchBar: {
        flex: 0.8
    },
    container: {
        display: 'flex'
    }
};
const handleSearch = debounce((e) => {
    const { value } = e.target.value;
    search(value).then(res => console.log(res));
}, 1000);
const Search = ({ classes }) => (React.createElement("div", { className: classes.container },
    React.createElement(Input, { className: classes.searchBar, placeholder: 'Search for Book', onChange: handleSearch })));
export default withStyles(styles)(Search);
//# sourceMappingURL=Search.js.map