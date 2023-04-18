import React, { useDebugValue } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipe } from "../../redux/actions";
import { useNavigate} from 'react-router-dom';
import validate from "./validation";



import styles from "./Form.module.css";

export default function Form () {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [input, setInput] = useState({
        name:'',
        summary:'',
        healthScore:'',
        steps:'',
        image:'',
        diets: []
    })

    const [errors, setErrors] = useState({
        name:'',
        summary:'',
        healthScore:'',
        steps:'',
        image:'',
        diets: []
    })

    const handlerChange = (e) => {
        const property = e.target.name;
        const value = e.target.value

        setInput({
            ...input,
            [property]: value
        });

        setErrors(
            validate({
            ...input,
            [property] :value
        }))
    }




    return (
        <div className={styles.container}>
            <form >

            </form>

        </div>
    )
}
