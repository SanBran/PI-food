import React from "react";
import styles from "./Pagination.module.css"

const Pagination = ({recipesPerPage, allRecipes, paginado, currentPage, setCurrentPage, active, setActive}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumbers.push(i)
        
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
        setActive(currentPage + 1)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
        setActive(currentPage - 1)
    }

    const specificPage = (n) => {
        setCurrentPage(n)
    }

    return (
        <div className={styles.container}>
                {currentPage > 1 ? <div className={styles.Previous} onClick={prevPage}>PREVIOUS</div> : <div className={styles.disPrevious}>PREVIOUS</div>}
                {pageNumbers && pageNumbers.map((page,index) => {
                    return (
                       <div value={page}  className={active === page ? styles.active : styles.page}  key={index} onClick={() => specificPage(page)}>{page}</div>
                    )
                })}
                {currentPage < pageNumbers.length ? <div className={styles.Next} onClick={nextPage}>NEXT</div> : <div className={styles.disNext} >NEXT</div>}
        </div>
    )
}

export default Pagination