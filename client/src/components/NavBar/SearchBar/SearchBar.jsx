import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { getRecipesByName } from "../../../redux/actions"

import styles from "./SearchBar.module.css"



const SearchBar = () => {


    const [searchString, setsearchString] = useState('');
    const dispatch = useDispatch();
      

    const handleChange = (e) => {
        
        setsearchString(e.target.value);
    }

    const handleSubmit = (e) => {
        
        dispatch(getRecipesByName(searchString))

    }

    return (
        <div>
            <input className={styles.input} value={searchString} onChange={handleChange} type="search"/>
            {searchString === '' ? <button className={styles.button} disabled >Search</button> : <button className={styles.button} onClick={() => handleSubmit(searchString)}> Search </button>}
        </div>
    )
}

export default SearchBar