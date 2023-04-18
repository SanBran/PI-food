import { Link } from "react-router-dom"
import styles from "./Card.module.css"

function Card({recipe}) {

const {name, image, diets, id} = recipe

    return (
        <div className={styles.container}>
        <Link to={`/detail/${id}`}>
            <img className={styles.image} src= {image} alt="Card"/>
            <h2>{name}</h2>
            <p>{diets}</p>
        </Link>
        </div>
    )
}

export default Card