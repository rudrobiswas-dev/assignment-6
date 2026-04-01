import Cart1 from "../assets/Cart1.png";

const Cart = ({ cart, handleRemove, handleCheckout }) => {

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 max-w-5xl mx-auto">

      {cart.length === 0 ? (

        <div className="relative flex flex-col items-center justify-center text-center border border-gray-100 rounded-xl shadow-xl p-10">

          <h2 className="absolute top-4 left-6 text-gray-900 font-bold text-xl md:text-2xl">
            Your Cart
          </h2>
          <img
            className="w-28 md:w-40 opacity-10 mt-10"
            src={Cart1}
            alt="cart"
          />
          <h1 className="text-lg md:text-2xl text-gray-800 opacity-30 mt-4">
            Cart is Empty
          </h1>

        </div>

      ) : (

        <div className="border border-gray-100 rounded-2xl p-6 md:p-10 shadow-xl">

          <h2 className="text-gray-900 font-bold text-xl md:text-2xl pb-5">
            Your Cart
          </h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-100 p-4 mb-3 rounded text-gray-700"
            >

              <div className="flex items-center gap-4">

                <h3 className="text-3xl">{item.icon}</h3>

                <div>
                  <h1 className="text-gray-950 font-bold text-sm md:text-base">
                    {item.name}
                  </h1>
                  <p className="text-sm">${item.price}</p>
                </div>

              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="btn btn-ghost rounded-full text-red-700 hover:bg-fuchsia-700 hover:text-white"
              >
                Remove
              </button>

            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between mt-6">

            <h3 className="text-lg md:text-xl text-gray-600">
              Total:
            </h3>

            <h2 className="text-xl md:text-2xl text-gray-950 font-bold">
              ${total}
            </h2>

          </div>

          <button
            onClick={handleCheckout}
            className="btn mt-6 w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold py-3"
          >
            Proceed to Checkout
          </button>

        </div>

      )}
    </div>
  );
};

export default Cart;