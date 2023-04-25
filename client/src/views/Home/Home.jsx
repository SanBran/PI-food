import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBySource, getRecipes, orderByName,orderHealthScore,filterByDiet } from "../../redux/actions";
import { getDiets } from "../../redux/actions";
import Select from "react-select";


import styles from "./Home.module.css";

import Cards from "../../components/Cards/Cards";
import Pagination from "../../components/Pagination/Pagination.jsx";

export default function Home ({currentPage, setCurrentPage, active, setActive, loading, setLoading, refresh, setRefresh}) {

    const dispatch = useDispatch();
    const allRecipes = useSelector(state => state.recipes)
    const diets = useSelector((state) => state.diets)    
    const [order, setOrder] = useState('');

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

    useEffect(() => {
        dispatch(getDiets())
       }, [])

    const optionsSortByName = [
        {label: "Sort by Name", value: "Sort by Name"},
        {label: "A-Z", value: "A-Z"},
        {label: "Z-A", value: "Z-A"}
    ]
    const optionsSortByHealthScore = [
        {label: "Sort by HealthScore", value: "Sort by HealthScore"},
        {label: "Ascending", value: "Ascending"},
        {label: "Descending", value: "Descending"}
    ]
    const filterSource = [
        {label: "Filter by Source", value: "Filter by Source"},
        {label: "API", value: "API"},
        {label: "Data Base", value: "Data Base"}
    ]

    const filterDiet = [{label: "Filter by Diet type", value: "Filter by Diet type"}]
    diets.map(e => filterDiet.push({label:e.name, value: e.name}))

    const handlerOrderByName = (event) => {
        dispatch(orderByName(event.value));
        setCurrentPage(1);
        setOrder(`Order: ${event.value}`);
    }

    const handlerOrderByHealthScore = (event) => {
        dispatch(orderHealthScore(event.value))
        setCurrentPage(1);
        setOrder(`Order: ${event.value}`);
    }
  
    const handlerFilterSource = (event) => {
        dispatch(filterBySource(event.value));
        setCurrentPage(1);
    }
  
    const handlerFilterDiets = (event) => {
        dispatch(filterByDiet(event.value));
        setCurrentPage(1);
    }

    return (
        <div className={styles.Container}>
          <div className={styles.filterContainer} >
            <Select 
                options={optionsSortByName}    
                placeholder="Sort by Name" 
                onChange={handlerOrderByName}
                    />
            <Select 
                options={optionsSortByHealthScore}    
                placeholder="Sort by HealthScore"
                onChange={handlerOrderByHealthScore}   
                    />
            <Select 
                options={filterSource}    
                placeholder="Filter by Source"
                onChange={handlerFilterSource}  
                    />
            <Select 
                options={filterDiet}    
                placeholder="Filter by Diet type"
                onChange={handlerFilterDiets}   
                    />
        </div>

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
