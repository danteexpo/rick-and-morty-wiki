import React from 'react';
import styles from './Search.module.scss';

const Search = ({ setSearch, setPageNumber }) => {
    return (
        <form className ="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-3 mb-5">
            <input type="text" placeholder='Search Characters...' className={styles.input} 
                onChange={e => {
                    setSearch(e.target.value);
                    setPageNumber(1);
                }}
            />   
            <button className={`btn btn-primary fs-5 fw-bold ${styles.btn}`}
            onClick={e => {
                e.preventDefault();
            }}
            >Search</button>    
        </form>
    );
}

export default Search;
