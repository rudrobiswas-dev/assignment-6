import { useState } from 'react'
import { toast } from 'react-toastify'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Active from './components/Active'
import Footer from './components/Footer'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Products from './components/Products'
import Cart from './components/Cart'

import './App.css'

function App() {

  const [cart, setCart] = useState([])
  const [view, setView] = useState("products")

  const handleAddToCart = (product) => {
    setCart([...cart, product])
    toast.success(`${product.name} added to cart 🛒`)
  }

  const handleRemove = (id) => {
    const item = cart.find(i => i.id === id)
    setCart(cart.filter(item => item.id !== id))
    toast.error(`${item?.name} removed ❌`)
  }

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.warning("Cart is already empty ⚠️")
      return
    }

    setCart([])
    toast.success("Checkout successful 🎉")
  }

  return (
    <>
      <Navbar cartCount={cart.length} setView={setView} />
      <Hero />
      <Active />

      {/* Toggle Buttons */}
      <div className="flex justify-center my-10">
        <div className='w-fit bg-gray-100 p-2 rounded-full'>
          
          <button
            onClick={() => setView("products")}
            className={`btn border-none mr-4 rounded-full font-bold py-2 px-4 ${
              view === "products"
                ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"
                : "bg-white text-gray-950"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setView("cart")}
            className={`btn border-none rounded-full font-bold py-2 px-4 ${
              view === "cart"
                ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white"
                : "bg-white text-gray-950"
            }`}
          >
            Cart ({cart.length})
          </button>

        </div>
      </div>

      {/* Views */}
      {view === "products" ? (
        <Products handleAddToCart={handleAddToCart} />
      ) : (
        <Cart 
          cart={cart} 
          handleRemove={handleRemove} 
          handleCheckout={handleCheckout} 
        />
      )}

      <Steps />
      <Pricing />
      <Footer />
    </>
  )
}

export default App