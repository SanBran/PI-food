import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail, cleanDetail } from '../../redux/actions';
import styles from "./Detail.module.css";

export default function Detail () {

    const { id } = useParams();
    const dispatch = useDispatch();
    
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        dispatch(getDetail(id))
        .then(res => setLoading(false))
        .catch(err => err);

        return () => dispatch(cleanDetail())
    }, [dispatch, id]);
    
    const detail = useSelector(state => state.recipeDetail);
    
        
    return (
      
        
        <div className={styles.container}> 
                 
            <div className={styles.left}>
                <div className={styles.image}>
                <img src={detail.image} alt={detail.name}/>
                </div>
                <div className={styles.text}>
                <h1>{detail.name}</h1>
                <h3>Id: {detail.id}</h3>
                    
                <h3>Diets: {detail?.diets?.length !== 0 ? detail?.diets?.join(', ') : "No associated diets"}</h3>
                <h3>HealthScore: {detail.healthScore}</h3>
                </div>
            </div>
            <div className={styles.right}>

                <div className={styles.texts}>

                    <p dangerouslySetInnerHTML={{ __html: detail?.summary }}></p>
                    <h3>Steps: {detail.steps}</h3>
                </div>
                
            </div>
        </div>

    )
}