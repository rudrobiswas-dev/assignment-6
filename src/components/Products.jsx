import products from "../data/products";

const Products = ({ handleAddToCart }) => {
  return (
    <div className="grid grid-cols-3 gap-6 px-60 py-10">
      {products.map(product => (
        <div key={product.id} className="card bg-white border-2 border-gray-100 shadow-xl/30 p-5 text-gray-600">

          <div className="flex justify-between">
            <div className="flex justify-center items-center border-2 border-gray-100 rounded-full p-5">
              <h2 className="text-3xl font-bold">{product.icon}</h2>
            </div>
            <span className={`badge ${product.tagType}`}>
              {product.tag}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-950">
            {product.name}
          </h2>

          <p>{product.description}</p>

          <p className="font-bold text-xl text-gray-950">
            ${product.price} ({product.period})
          </p>

          <ul className="mt-3">
            {product.features.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>

          <button 
            onClick={() => handleAddToCart(product)}
            className="btn mt-4 w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold py-2 px-4"
          >
            Buy Now
          </button>

        </div>
      ))}
    </div>
  );
};

export default Products;