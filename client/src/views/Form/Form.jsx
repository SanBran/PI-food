import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipe } from "../../redux/actions";

import validate from "./validation";
import Select from "react-select"



import styles from "./Form.module.css";

export default function Form () {
   const dispatch = useDispatch()
   const diets = useSelector((state) => state.diets)


const selectDiets = []

diets.map(e => selectDiets.push({label:e.name, value: e.name}))
   

   const [input, setInput] =useState({
        name:"",
        summary:"",
        healthScore:"",
        steps:"",
        image:"",
        diets: []
   })

   const [errors, setErrors] =useState({
    name:"",
    summary:"",
    healthScore:"",
    steps:"",
    image:"",
    diets: []
})

   const handleChange = (e)=>{
    setInput({
        ...input,
        [e.target.name] : e.target.value
    });

    setErrors(
        validate({
            ...input,
            [e.target.name]: e.target.value
        })
    )
   }

   const handleSelect = (e) => {
    console.log(input.diets)
    setInput({
        ...input,
        diets: [...input.diets, e.value]
    })
    }

   

   const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input);
    dispatch(postRecipe(input))
    alert("Recipe created")
    setInput({
        name:"",
        summary:"",
        healthScore:"",
        steps:"",
        image:"",
        diets: []
    })
   }
  

   useEffect(() => {
    dispatch(getDiets())
   }, [])

   

   return (
     <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" value={input.name} name="name" onChange={handleChange}/>
            </div>
            <div>
                <label>Summary: </label>
                <input type="text" value={input.summary} name="summary" onChange={handleChange}/>
            </div>
            <div>
                <label>Health Score: </label>
                <input type="number" value={input.healthScore} name="healthScore" onChange={handleChange}/>
            </div>
            <div>
                <label>Steps: </label>
                <textarea name='steps' value={input.steps} onChange={handleChange}> </textarea>
            </div>
            <div>
                <label>image: </label>
                <input type="text" value={input.image} name="image" onChange={handleChange} />
            </div>
            {/* <select onChange={(e) => handleSelect(e)}>
                {diets.map(diet => (
                    <option value={diet.name}>{diet.name}</option>
                ))}
                
            </select> */}

            <Select 
                options={selectDiets}    
                 onChange={handleSelect}   
                    />

            <button type="submit">Create</button>






        </form>
     </div>
   )
};
