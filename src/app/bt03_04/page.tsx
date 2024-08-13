import React from 'react';

const FormSignup: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="you@company.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone number
          </label>
          <div className="flex">
            <div className="w-20 mr-2">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone-code"
                type="text"
                placeholder="US +1"
              />
            </div>
            <div className="flex-1">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone-number"
                type="tel"
                placeholder="(123) 456-789"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
            Address
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            rows={3}
            placeholder="Tell us a little about the project..."
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Skills</label>
          <div className="flex">
            <div className='flex-col'>
                <div className="mr-4">
                <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">HTML</span>
              </label>
            </div>
            <div className="mr-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">JavaScript</span>
              </label>
            </div>
            <div className="mr-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">UX design</span>
              </label>
            </div>
            </div>
            <div className='flex-col'>
                <div className="mr-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">ReactJS</span>
              </label>
            </div>
            <div className="mr-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">CSS</span>
              </label>
            </div>
            <div className="mr-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Java</span>
              </label>
            </div>
            </div>
            
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-500 w-80 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSignup;