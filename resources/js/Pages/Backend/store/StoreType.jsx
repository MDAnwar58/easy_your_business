import PageTitle from '@/Components/Backend/PageTitle'
import BackendLayout from '@/Layouts/BackendLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function StoreType() {
  return (
    <BackendLayout>
      <Head title="Store Type" />

      <PageTitle />

      <div className="px-4 pt-6">
        <div className="max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label htmlFor="store-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Store Type</label>
              <select id="default" className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected={true}>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
        </div>
      </div>
    </BackendLayout>
  )
}
