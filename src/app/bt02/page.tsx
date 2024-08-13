import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InputForm: React.FC = () => {
  return (
    <div className="flex flex-col items-start space-y-4">
        <p>Input Label</p>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="px-3 py-2 border border-gray-300 rounded-md relative"
        />
        <FontAwesomeIcon className='w-5 h-5 absolute top-13 left-0' icon={faClock}></FontAwesomeIcon>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex items-center gap-20">
          <span>Label</span>
          <input type="checkbox" className="mr-2" />
        </div>
        <div className="flex items-center gap-20">
          <span>Label</span>
          <input type="checkbox" className="mr-2" />
        </div>
        <div className="flex items-center gap-20">
          <span>Label</span>
          <input type="checkbox" className="mr-2" />
        </div>
      </div>

      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
          Clear
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Apply
        </button>
      </div>
    </div>
  );
};

export default InputForm;