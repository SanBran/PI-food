import styles from "./Cards.module.css";

import Card from "../Card/Card"

const Cards = ({currentRecipes}) => {

    

    return (
        <div className={styles.container}>
           {currentRecipes && currentRecipes?.map((recipe, index) => {
            return (
                <Card recipe={recipe} key={index}/>)
           }) }

        </div>
    )
}

export default  Cards