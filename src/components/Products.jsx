import products from "../data/products";

const Products = ({ handleAddToCart }) => {
  return (
    <div className="px-4 md:px-10 lg:px-50 py-10">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-white border border-gray-100 shadow-xl p-6 text-gray-600 hover:shadow-2xl transition"
          >

            <div className="flex justify-between items-start">

              <div className="flex justify-center items-center border border-gray-100 rounded-full p-5">
                <h2 className="text-3xl">{product.icon}</h2>
              </div>

              <span className={`badge ${product.tagType}`}>
                {product.tag}
              </span>

            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-950 py-3">
              {product.name}
            </h2>

            <p className="text-sm md:text-base py-2">
              {product.description}
            </p>

            {/* Price */}
            <p className="font-bold text-lg md:text-xl text-gray-950 py-2">
              ${product.price} ({product.period})
            </p>

           
            <ul className="mt-3 space-y-1 text-sm">
              {product.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            
            <button
              onClick={() => handleAddToCart(product)}
              className="btn mt-6 w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold py-3"
            >
              Buy Now
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Products;