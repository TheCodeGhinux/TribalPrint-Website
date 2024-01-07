import { useEffect, useState } from 'react'
import styles from '../../style'
import axios from 'axios'
import { Button } from '../../Utils'
import { FaSpinner } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import $http from '../../api/axios'

const OrderSummary = () => {
  const [error, setError] = useState(null)
  const [checkoutDetails, setCheckoutDetails] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCheckoutDetails = async () => {
      try {
        const userId = localStorage.getItem('userId')

        if (!userId) {
          throw new Error('user is null or undefined')
        }
        // const baseUrl = `https://tp-prod.onrender.com/api/v1/carts/get/${userId}`
        // const response = await axios.get(baseUrl);
        const baseUrl = `carts/get/${userId}`
        // const response = await (baseUrl);
        const response = await $http.get(baseUrl)

        if (response.status < 200 || response.status >= 300) {
          throw new Error(
            `Failed to fetch payment methods: ${response.statusText}`
          )
        }

        setCheckoutDetails(response.data.cart)
      } catch (error) {
        setError(error.message || 'Error fetching payment methods')
        console.error(error.message)
      }
    }
    if (!checkoutDetails) {
      fetchCheckoutDetails()
    }
  }, [checkoutDetails])

  const calculateTotal = () => {
    let totalPrice = 0

    if (
      checkoutDetails &&
      checkoutDetails.items &&
      checkoutDetails.items.length > 0
    ) {
      checkoutDetails.items.forEach((cartt) => {
        totalPrice += cartt.price * cartt.quantity
      })
    }

    return { totalPrice }
  }

  const totalProducts =
    checkoutDetails && checkoutDetails.items ? checkoutDetails.items.length : 0
  const { totalPrice } = calculateTotal()

  const handleCheckout = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userId = localStorage.getItem('userId')
      // const baseUrl = `https://tp-prod.onrender.com/api/v1/carts/orders/create/${userId}/new`
      // const response = await axios.post(baseUrl, null)

      const baseUrl = `/carts/orders/create/${userId}/new`      
      const response = await $http.post(baseUrl, null)
      console.log(response);

      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Failed to create order: ${response.statusText}`)
      }

      toast.success('Order created successfully!')

      navigate(`/success`)
    } catch (error) {
      setError(error.message || 'Error creating order')
      console.error(error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='mt-[170px] '>
      {checkoutDetails && (
        <div className={`${styles.boxWidth}  ${styles.paddingX} `}>
          <h1 className={`${styles.heading2} mb-[46px] md:mb-[64px]`}>
            Order Summary
          </h1>
          <form onSubmit={handleCheckout}>
            <div className='border-b pb-6  border-b-[#B6BECD]  flex items-center justify-between gap-6 lg:w-[700px] '>
              <h2 className='text-black font-bold leading-6 w-fit '>S/N</h2>
              <h2 className='text-black font-bold leading-6 w-full  '>
                Product
              </h2>
              <h2 className='text-black font-bold leading-6 w-fit '>
                Quantity
              </h2>
              <h2 className='text-black font-bold leading-6 w-fit '>Amount</h2>
            </div>
            {checkoutDetails &&
            checkoutDetails.items &&
            checkoutDetails.items.length > 0 ? (
              checkoutDetails.items.map((item, index) => (
                <div>
                  <div className='border-b border-b-[#B6BECD] flex items-center px-4 py-6 justify-between gap-6 lg:w-[700px] '>
                    <h2 className='text-[#000] font-normal leading-6 w-fit '>{`${
                      index + 1
                    }.`}</h2>
                    <h2 className='text-[#000] flex items-center gap-6 font-normal leading-6 w-full  '>
                      <span>
                        <img
                          className='w-[80px] '
                          src={item.product ? item.product.imageUrl : ''}
                          alt=''
                        />
                      </span>
                      <span className='text-[#000] '>
                        {item.product ? item.product.name : ''}
                      </span>
                    </h2>
                    <h2 className='text-[#000] font-normal leading-6 w-[10%] '>
                      {item.quantity}
                    </h2>
                    <h2 className='text-[#000] font-normal leading-6 w-fit '>
                      ₦{item.price}
                    </h2>
                  </div>
                </div>
              ))
            ) : (
              <div>empty</div>
            )}
            <div className=' lg:w-[700px] flex items-end justify-end my-6 '>
              <h4 className=' lg:w-[650px] flex items-center justify-between p-4 bg-[#213B6F]  '>
                <span className='text-white text-lg font-semibold font-monteserrat'>
                  Total
                </span>
                <span className='text-white text-lg font-semibold font-monteserrat'>
                  {' '}
                  ₦{totalPrice}
                </span>
              </h4>
            </div>
            <Button
              title={
                loading ? (
                  <FaSpinner
                    className='text-lightGreen animate-spin'
                    size={30}
                  />
                ) : (
                  'Make Order'
                )
              }
              type={'submit'}
              classname={
                ' text-lightGreen lg:w-[700px] font-nunito text-lg bg-white border-lightGreen border-2 font-semibold py-[16px] px-[24px] rounded-[4px] w-full flex items-center justify-center'
              }
            />
          </form>
        </div>
      )}
    </section>
  )
}

export default OrderSummary
