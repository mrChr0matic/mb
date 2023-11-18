import React, { useState } from 'react';

const DynamicForm = (props) => {
  const [inputs, setInputs] = useState(['']);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <div>
        {inputs.map((input, index) => (
        <div className="dynamicInput" key={index}>
          <input
            type="text"
            name="genre"
            id="genre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full my-0.5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder={props.placeholder}
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          {inputs.length > 1 && (
            <button type="button" onClick={() => handleRemoveInput(index)} className="px-3 text-white">
              -
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={handleAddInput} className="p-2 text-white">
        +
      </button>
    </div>
  );
};

export default DynamicForm;
