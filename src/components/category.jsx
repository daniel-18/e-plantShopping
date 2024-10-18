import Product from "./product"
import category from "./category.module.css"

function Category(props){
    return(
        <div className="category">
            <h1 className={category.name}>{props.category}</h1>
            <div className={category.plants_list}>
            {
                props.plants.map((plant, index)=><Product key={plant.name} index={index} plant={plant}/>)
            }
            </div>
        </div>
    );
}

export default Category