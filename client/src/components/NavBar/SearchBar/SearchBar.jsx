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
        <div className={styles.container}>
            <input className={styles.input} value={searchString} onChange={handleChange} type="search" placeholder="   Search recipe"/>
            {searchString === '' ? <button className={styles.button} disabled ></button> : <button className={styles.button} onClick={() => handleSubmit(searchString)}></button>}
        </div>
    )
}

export default SearchBar