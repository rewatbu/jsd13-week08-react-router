import { useNavigate } from "react-router-dom";
import { products } from "../mock-data/products";

function Products() {

  const navigate = useNavigate();

  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  }

  return (
    <div className="p-4 bg-gray-200 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
            <div key={product.id} className="flex flex-col bg-white rounded-lg border-2 p-4">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{"$" + product.price.toFixed(2)}</p>
                <div>
                <button onClick={() => handleViewDetails(product.id)} className="text-white bg-teal-500 px-4 py-2 rounded-md hover:bg-teal-700">View Details</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
