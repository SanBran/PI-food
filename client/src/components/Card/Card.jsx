import { Link } from "react-router-dom"
import styles from "./Card.module.css"

function Card({recipe}) {

const {name, image, diets, id, healthScore} = recipe

    return (
        <div className={styles.container}>
        <Link className={styles.link} to={`/detail/${id}`}>
            <img className={styles.image} src= {image} alt="Card"/>
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.diets}>{diets.length !== 0 ? diets.join(', ') : 'No associated diets'}</p>
            <h2 className={styles.hs}>{healthScore}</h2>
        </Link>
        </div>
    )
}

export default Card