import Product from "./product"
import category from "./category.module.css"
import DisplayproductItem from "./displayProduct";


function Category(props){
    return(
        <div className="category">
            <h1 className={category.name}>{props.category}</h1>
            <div className={category.plants_list}>
            {
                props.plants.map((plant, index)=><DisplayproductItem key={Math.random()+index+Math.random()} plant={plant}/>)
            }
            </div>
        </div>
    );
}

export default Category