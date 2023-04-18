import styles from "./Cards.module.css";

import Card from "../Card/Card"

const Cards = ({allRecipes}) => {

    const recipesList = allRecipes

    return (
        <div className={styles.container}>
           {recipesList?.map(recipe => {
            return (
                <Card recipe={recipe}/>)
           }) }

        </div>
    )
}

export default  Cards