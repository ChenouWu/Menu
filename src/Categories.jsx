function Categories({categories}){
    return(
        <div className="btn-container">
            {categories.map((categorie)=>{
                return  <button key={categorie} type="button" className="btn">{categorie}</button>
            })}
        </div>
    )
}

export default Categories;