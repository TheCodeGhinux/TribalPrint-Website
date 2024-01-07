import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../Utils'
import styles from '../../style'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaSpinner } from 'react-icons/fa'
import toast from 'react-hot-toast'
import $http from '../../api/axios'

const CheckOutPage = () => {
  const { checkoutId } = useParams()
  const [checkoutDetails, setCheckoutDetails] = useState(null)
  const [error, setError] = useState(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const createUser = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      if (!firstName || !lastName || !email || !phone) {
        toast.error('Please fill in all required fields')
        return
      }

      const baseUrl = '/api/v1'
      const endpoint = `/users/create/guest`

      const data = {
        firstName,
        lastName,
        phone,
        email,
      }

      // const response = await axios.post(endpoint, data);
      const response = await $http.post(endpoint, data)

      if (response.status === 201) {
        toast.success('User created successfully!')
        // Clear input fields on successful submission
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        navigate(`/order`)
      } else {
        // Extract error message from the response
        const errorMessage = response.data.error || 'Error creating User.'
        toast.error(errorMessage)
      }
    } catch (error) {
      console.error('Failed to add items to cart:', error.message)
      // Display a generic error message
      toast.error('Error creating User.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='mt-[170px]'>
      <div className={`${styles.boxWidth}  ${styles.paddingX} `}>
        <h1 className={`${styles.heading1} mb-[46px] md:mb-[64px]`}>
          Check Out
        </h1>
        <div className='flex flex-col md:flex-row md:gap-[32px]  '>
          <form className='w-full' onSubmit={createUser}>
            <div className='p-[24px]  flex flex-col gap-[24px] '>
              <h3 className='text-black text-[18px] md:text-[24px] font-semibold font-monteserrat '>
                Customer Information
              </h3>
              <div className='name flex flex-col md:flex-row gap-[24px] '>
                <div className='w-full'>
                  <input
                    type='text'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className='w-full outline-none border border-gray p-[16px] rounded-[4px] '
                    placeholder='First Name'
                  />
                </div>
                <div className='w-full'>
                  <input
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className='w-full outline-none border border-gray p-[16px] rounded-[4px] '
                    placeholder='Last Name'
                  />
                </div>
              </div>
              <div className='email flex flex-col md:flex-row gap-[24px] '>
                <div className='w-full'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full outline-none border border-gray p-[16px] rounded-[4px] '
                    placeholder='Email'
                  />
                </div>
                <div className='w-full'>
                  <input
                    type='tel'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className='w-full outline-none border border-gray p-[16px] rounded-[4px] '
                    placeholder='Phone Number'
                  />
                </div>
              </div>
              <div className='check-btn  mt-[20px] md:mt-[72px] flex flex-col md:flex-row gap-[24px] '>
                <Button
                  title={'Generate Invoice'}
                  type={'button'}
                  classname={
                    ' text-lightGreen font-nunito border border-lightGreen py-[16px] px-[24px] rounded-[4px] w-full '
                  }
                />
                <Button
                  title={
                    loading ? (
                      <FaSpinner
                        className='text-white animate-spin'
                        size={30}
                      />
                    ) : (
                      'Proceed'
                    )
                  }
                  type={'submit'}
                  classname={
                    ' text-white font-nunito bg-lightGreen py-[16px] px-[24px] rounded-[4px] w-full flex items-center justify-center '
                  }
                />
              </div>
            </div>
          </form>
          <div className='md:w-3/4 lg:w-[526px] invisible '>
            {checkoutDetails && (
              <div className='order-summary mb-[32px]  bg-[#F2F2F2] flex flex-col gap-[24px] p-[24px] '>
                <h3 className='font-monteserrat text-[18px] md:text-[24px] font-semibold flex items-center justify-between '>
                  <span>Order Summary</span>
                  <span className='font-nunito md:text-[18px] text-red font-semibold '>
                    {checkoutDetails.items.length} Item(s)
                  </span>
                </h3>
                {checkoutDetails.items.map((item, index) => (
                  <p
                    key={item._id}
                    className='flex items-center md:text-[18px] justify-between '
                  >
                    <span>{`${index + 1}. ${
                      item.description?.name || ''
                    }`}</span>
                    <span>₦{item.lineTotal}</span>
                  </p>
                ))}
                <p className='items-center hidden md:text-[18px] justify-between '>
                  <span>VAT</span>
                  <span>N2,025</span>
                </p>
                <p className='flex items-center text-[24px] justify-between '>
                  <span className='font-bold  '>Total</span>
                  <span className='font-bold'>
                    ₦{checkoutDetails.totalAmount}
                  </span>
                </p>
                <Button
                  title={'Proceed'}
                  type={'submit'}
                  classname={
                    ' text-white font-nunito bg-skyBlueText py-[16px] px-[24px] rounded-[4px] w-full '
                  }
                />
              </div>
            )}
            <div className='instructions p-[24px] hidden bg-[#FFD4E6] '>
              <p className='font-normal text-[18pxs] '>
                Hey customer, <br /> your order will be ready in 3 – 5 working
                days from today and will be fulfilled, through the method you
                select below. Please, bear in mind that payment validates order.
                Thanks!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOutPage
