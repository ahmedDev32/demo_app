import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading';
import { call_logs, OnboardcallApi } from '../Helpers/Api';

const Home = () => {
  const [formData, setFormData] = useState({
    number: "",
    first_message: ""
  })

  const [status, setStatus] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const submitForm = async (e) => {
    try {
      e.preventDefault()
      setStatus(true)
      const response = await OnboardcallApi(formData)
      if (!response.success) alert('Your Call Failed To Execute')
      else {
    alert('Call Completed SuccessFully!')
    await call_logs(response.callSid)
      }
      setStatus(false)
      setFormData({
        number: "",
        first_message: ""
      })

    } catch (error) {
      setStatus(false)
    }
  }

  return (
    <>

      <Navbar />
      {
        status && <>
          <Loading />
        </>
      }
      <section className="bg-gray-50 dark:bg-gray-900 -mt-7">
        <div className="flex flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Initiate Call
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submitForm} >
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Phone Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    onChange={handleChange}
                    value={formData.number}
                    id="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="+1 XXX XXXXXXX"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    First Message
                  </label>
                  <textarea

                    type="text"
                    name="first_message"
                    onChange={handleChange}
                    value={formData.first_message}
                    id="first_message"
                    placeholder="Type Message..."
                    rows={12}
                    cols={50}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <div className="flex items-start">


                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-gradient-to-r from-blue-600 to-pink-500 cursor-pointer text-xl"
                >
                  Initiate Call
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home