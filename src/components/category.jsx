import Product from "./product"


function Category({props}){
    return(
        <div className="category">
            <h1 className="name">{props.category}</h1>
            {
                props.plants.map((plant)=> {<Product plant={plant}/>})
            }
        </div>
    );
}

export default Category