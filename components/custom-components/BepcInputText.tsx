// MyComponent.tsx
import React from 'react';

const BEPCInputText: React.FC = () => {
return (
<>

  {/*Input text*/}
  <p className='my-3'>Input text here!</p>
  <input type="text" className="bepc-input-text" placeholder='Placeholder text here'></input>

  {/*Input password*/}
  <p className='my-3'>Input password here!</p>
  <input type="password" className="bepc-input-text" placeholder='Placeholder text here'></input>

  {/*Input text search*/}
  <p className='my-3'>Input search here!</p>
  <div className="input-container">
    <input type="text" className="bepc-input-text" placeholder='Search...'></input>
    <div className="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        className="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </div>
  </div>

  {/*Input text error*/}
  <p className='my-3'>Input error here!</p>
  <div className="input-container">
    <input type="text" className="bepc-input-text-error" placeholder='Error!'></input>
    <div className="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        className="svg-error w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </div>

  {/*Input text success*/}
  <p className='my-3'>Input success here!</p>
  <div className="input-container">
    <input type="text" className="bepc-input-text-success" placeholder='Success!'></input>
    <div className="icon-container">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        className="svg-success w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
  </div>

</>
);
};

export default BEPCInputText;