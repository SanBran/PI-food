import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getRecipesByName } from "../../../redux/actions"

import styles from "./SearchBar.module.css"



const SearchBar = ({setCurrentPage, setActive, setLoading}) => {

    
    const [searchString, setsearchString] = useState('');
        
    const dispatch = useDispatch();
    const navigate = useNavigate()
      

    const handleChange = (e) => {
        setsearchString(e.target.value);
    }

    const handleSubmit = (e) => {
        navigate("/home")
        setLoading(true)
        dispatch(getRecipesByName(searchString))
        .then(res => setLoading(false))
        .then(res => setActive(1))
        .catch(err => err)

        setCurrentPage(1)

    }

    return (
        <div>
            <input className={styles.input} value={searchString} onChange={handleChange} type="search"/>
            {searchString === '' ? <button className={styles.button} disabled >Search</button> : <button className={styles.button} onClick={() => handleSubmit(searchString)}> Search </button>}
        </div>
    )
}

export default SearchBar