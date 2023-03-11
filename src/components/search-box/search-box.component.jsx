import './search-box.styles.css';

const SearchBox = ({className, onChangeHandler, placeholder}) => (

    <input
        className={`search-box ${className}`}
        type='search'
        onChange={onChangeHandler}
        placeholder={placeholder}
    />

);

export default SearchBox;