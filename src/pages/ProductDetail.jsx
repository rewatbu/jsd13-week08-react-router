import { useParams } from "react-router-dom";
import { products } from "../mock-data/products";

function ProductDetail() {
    const params = useParams();
    const productId = params.productId;

    const product = products.find((p) => p.id === productId);
    
    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.id}</p>
        </div>
    )
};

export default ProductDetail;