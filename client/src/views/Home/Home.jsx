import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";

import styles from "./Home.module.css";

import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination.jsx";

export default function Home ({currentPage, setCurrentPage, active, setActive, loading, setLoading, refresh, setRefresh}) {

    const dispatch = useDispatch();
    const allRecipes = useSelector(state => state.recipes)
        

    const recipesPerPage =  9;
    const lastRecipeIndex = currentPage * recipesPerPage; 
    const firstRecipeIndex = lastRecipeIndex - recipesPerPage; 
    const currentRecipes = (!allRecipes.error) && allRecipes.slice(firstRecipeIndex, lastRecipeIndex);

    const paginado = (pageNumbers) => {
        setCurrentPage(pageNumbers)
        setActive(pageNumbers)
    }

    useEffect(() => {

        if (refresh) {
            setLoading(true)
            dispatch(getRecipes())
            .then(res=>setLoading(false))
            .catch(err=>err)
            
        }
    }, [dispatch, refresh, setLoading])



    return (
        <div className={styles.Container}>


            
            
            <Cards currentRecipes={currentRecipes}/>
            <Pagination 
                        allRecipes={allRecipes.length} 
                        recipesPerPage={recipesPerPage}
                        paginado={paginado}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        active={active}
                        setActive={setActive}
                        />

        </div>
    )
}
