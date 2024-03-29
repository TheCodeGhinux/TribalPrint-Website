import { Link, useNavigate, useParams } from 'react-router-dom'
import { cartImage } from '../Assets'
import styles, { layout } from '../style'
import { Button } from '../Utils'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CartItem from '../Components/Cart/CartItem'
import TotalCart from '../Components/Cart/TotalCart'
import toast from 'react-hot-toast'
import { FaSpinner } from 'react-icons/fa'
import $http from '../api/axios'

const Cart = () => {
  const [cart, setCart] = useState(null)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const isUser1 = localStorage.getItem('isUser')

  const isUserString = localStorage.getItem('isUser')
  const isUser = isUserString === 'true'
  console.log('isUser after conversion:', isUser)

  const handleCheckoutClick = () => {
    if (isUser) {
      navigate('/order')
    } else {
      navigate('/checkout')
    }
  }

  const buttonText = isUser ? 'Checkout Now' : 'Enter Your Info'

  console.log('check user status in order page:', isUser)
  console.log('check user status in order page1:', isUser1)
  console.log('check user status in order page:', typeof isUser)

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = localStorage.getItem('userId')

        if (!userId) {
          throw new Error('user is null or undefined')
        }
        const baseUrl = `carts/get/${userId}`
        // const response = await (baseUrl);
        const response = await $http.get(baseUrl)

        if (response.status < 200 || response.status >= 300) {
          throw new Error(
            `Failed to fetch payment methods: ${response.statusText}`
          )
        }

        setCart(response.data.cart)
      } catch (error) {
        setError(error.message || 'Error fetching payment methods')
        console.error(error.message)
      }
    }
    if (!cart) {
      fetchCart()
    }
  }, [cart])

  const calculateTotal = () => {
    let totalPrice = 0

    if (cart && cart.items && cart.items.length > 0) {
      cart.items.forEach((cartt) => {
        totalPrice += cartt.price * cartt.quantity
      })
    }

    return { totalPrice }
  }

  const totalProducts = cart && cart.items ? cart.items.length : 0
  const { totalPrice } = calculateTotal()

  const handleCheckout = async () => {
    try {
      setLoading(true)
      setLoading2(true)
      const baseUrl = `/api/v1/carts/orders/create`
      const response = await axios.post(baseUrl, null)

      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Failed to create order: ${response.statusText}`)
      }

      toast.success('Order created successfully!')
      const checkoutId = response.data._id
      setCart(null)
      navigate(`/checkout/${checkoutId}`)
    } catch (error) {
      setError(error.message || 'Error creating order')
      console.error(error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
      setLoading2(false)
    }
  }

  return (
    <section
      className={`xl:max-w-[1350px] w-full  mx-auto ${styles.paddingX}  mt-[166px] mb-[300px] `}
    >
      <h1 className={`${styles.heading1} mb-[46px] md:mb-[50px]`}>Cart</h1>
      <div
        className={`${
          cart && cart.items && cart.items.length > 0
            ? 'flex flex-col  justify-between md:gap-7 lg:gap-10 gap-10  md:flex-row'
            : ''
        }`}
      >
        <div className='flex flex-col  w-full items-center md:items-start justify-center gap-4'>
          {cart && cart.items && cart.items.length > 0 ? (
            cart.items.map((cartt) => (
              <CartItem
                key={cartt._id}
                cartId={cartt._id}
                quantity={cartt.quantity}
                price={cartt.price}
                name={cartt.product ? cartt.product.name : ''}
                imageUrl={cartt.product ? cartt.product.imageUrl : ''}
                additionalProps={cartt.additionalProps}
                setCart={setCart}
              />
            ))
          ) : (
            <div className='flex items-center  w-full text-center flex-col justify-center'>
              <div>
                <img src={cartImage} alt='' className='w-[340px] mx-auto' />
                <h2 className='text-[30px] mb-5 '>No Item yet!</h2>
                <div className='w-full'>
                  <Link to={'/all-products'}>
                    <Button
                      type={'button'}
                      classname={`border bg-skyBlueText py-[16px] rounded-[4px] text-white w-[240px] ${styles.image} `}
                      title={'Continue Shopping'}
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className='w-full flex justify-center md:justify-end md:w-2/4'>
          {cart && cart.items && cart.items.length > 0 && (
            <div className='w-full '>
              <TotalCart
                handleCheckout={handleCheckout}
                price={totalPrice}
                product={totalProducts}
                loading={loading}
              />
            </div>
          )}
        </div>
      </div>
      {cart && cart.items && cart.items.length > 0 && (
        <div className='hidden md:flex w-[85%] md:w-[540px] lg:w-[864px] mx-0 flex-col md:flex-row gap-[16px] md:gap-[32px] '>
          {/* <div className="w-full">
           {isUser ? (
            <Link to={"/checkout"}>
              <Button
                type={"button"}
                classname={`bg-skyBlueText flex items-center justify-center py-[16px] rounded-[4px] text-white w-full ${styles.image} `}
                title={
                  loading2 ? (
                    <FaSpinner className="text-white animate-spin" size={20} />
                  ) : (
                    "Checkout Noww"
                  )
                }
              />
            </Link>
          ) : (
            <Link to={"/order"}>
              <Button
                type={"button"}
                classname={`bg-skyBlueText flex items-center justify-center py-[16px] rounded-[4px] text-white w-full ${styles.image} `}
                title={
                  loading2 ? (
                    <FaSpinner className="text-white animate-spin" size={20} />
                  ) : (
                    "Checkout Now"
                  )
                }
              />
            </Link>
          )}
          </div> */}

          <div className='w-full'>
            <Button
              type={'button'}
              classname={`bg-skyBlueText flex items-center justify-center py-[16px] rounded-[4px] text-white w-full ${styles.image}`}
              title={buttonText}
              onClick={handleCheckoutClick}
            />
          </div>
          <div className='w-full'>
            <Link to={'/all-products'}>
              <Button
                type={'button'}
                classname={`border border-skyBlueText py-[16px] rounded-[4px] text-skyBlueText w-full ${styles.image} `}
                title={'Continue Shopping'}
              />
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cart
