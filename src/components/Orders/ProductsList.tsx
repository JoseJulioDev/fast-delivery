import ProductCard from './ProductCard';

function ProductsList() {
    return(
        <div className="list-container">
            <div className="list-items">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>      
    )
}

export default ProductsList;