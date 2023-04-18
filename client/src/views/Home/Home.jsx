import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../redux/actions";

import styles from "./Home.module.css";

import Cards from "../../components/Cards/Cards";

export default function Home () {

    const dispatch = useDispatch();
    const allRecipes = useSelector(state => state.recipes)
    

    useEffect(() => {
        dispatch(getRecipes())
        // return(() => {
        //     clearDetail()
        // })
    }, [dispatch])

    return (
        <div>
            <h2>HOME</h2>
            <Cards allRecipes={allRecipes}/>

        </div>
    )
}
