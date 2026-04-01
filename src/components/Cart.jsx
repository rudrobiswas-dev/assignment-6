const Cart = ({ cart, handleRemove, handleCheckout }) => {

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="px-50 py-10">

      {cart.length === 0 ? (
        <div className="border-amber-400 border-2 bg-gray-100">
          <h1 className="text-center text-2xl text-gray-950">Cart is Empty</h1>

        </div>
      ) : (
        <div className="border-2 border-gray-100 rounded-2xl p-10 shadow-xl/30">

          <h2 className="text-gray-950 font-bold text-2xl pb-5">
            Your Cart
          </h2>

          {cart.map(item => (
            <div 
              key={item.id} 
              className="flex justify-between bg-gray-100 p-4 mb-3 rounded text-gray-700"
            >
              <div className="flex space-x-4">
                <h3 className="text-4xl">{item.icon}</h3>

                <div>
                  <h1 className="text-gray-950 font-bold">
                    {item.name}
                  </h1>
                  <p>${item.price}</p>
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

          <div className="flex justify-between mt-5">
            <h3 className="text-xl text-gray-600">Total:</h3>
            <h2 className="text-2xl text-gray-950 font-bold">
              ${total}
            </h2>
          </div>

          <button 
            onClick={handleCheckout}
            className="btn mt-4 w-full rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold py-2 px-4"
          >
            Proceed to Checkout
          </button>

        </div>
      )}

    </div>
  )
}

export default Cart;