// MyComponent.tsx
import React from 'react';

const BEPCtable: React.FC = () => {
  return (
    <>
    {/*------ Variant #1 ------*/}
<h1 className='table-name-v1 my-3 p-1'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-svg w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

    Variant 1</h1>

<table className="table-v1">
  <thead>
    <tr>
      <th className='th-secondary-v1'></th>
      <th className='th-checkbox-v1'><input type="checkbox"></input></th>
      <th className='th-primary-v1'>Task</th>
      <th className='th-primary-v1'>Due Date</th>
      <th className='th-primary-v1'>Status</th>
      <th className='th-primary-v1'>Assignee</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='td-secondary-v1'></td>
      <td className='td-checkbox-v1'><input type="checkbox"></input></td>
      <td className='td-primary-v1'>Write blog post</td>
      <td className='td-primary-v1'>2023-08-25</td>
      <td className='td-primary-v1'>In progress</td>
      <td className='td-primary-v1'>John Doe</td>
    </tr>
    <tr>
    <td className='td-secondary-v1'></td>
      <td className='td-checkbox-v1'><input type="checkbox"></input></td>
      <td className='td-primary-v1'>Design new website</td>
      <td className='td-primary-v1'>2023-09-01</td>
      <td className='td-primary-v1'>Pending</td>
      <td className='td-primary-v1'>Jane Doe</td>
    </tr>
    <tr>
    <td className='td-secondary-v1'></td>
      <td className='td-checkbox-v1'><input type="checkbox"></input></td>
      <td className='td-primary-v1'>Meet with client</td>
      <td className='td-primary-v1'>2023-09-05</td>
      <td className='td-primary-v1'>To do</td>
      <td className='td-primary-v1'>Peter Smith</td>
    </tr>
  </tbody>
</table>

{/*------ Variant #2 ------*/}
<h1 className='table-name-v2 my-3 p-1'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-svg w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

    Variant 2</h1>

<table className="table">
  <thead>
    <tr>
      <th className='th-secondary-v2'></th>
      <th className='th-checkbox-v2'><input type="checkbox"></input></th>
      <th className='th-primary-v2'>Task</th>
      <th className='th-primary-v2'>Due Date</th>
      <th className='th-primary-v2'>Status</th>
      <th className='th-primary-v2'>Assignee</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='td-secondary-v2'></td>
      <td className='td-checkbox-v2'><input type="checkbox"></input></td>
      <td className='td-primary-v2'>Write blog post</td>
      <td className='td-primary-v2'>2023-08-25</td>
      <td className='td-primary-v2'>In progress</td>
      <td className='td-primary-v2'>John Doe</td>
    </tr>
    <tr>
    <td className='td-secondary-v2'></td>
      <td className='td-checkbox-v2'><input type="checkbox"></input></td>
      <td className='td-primary-v2'>Design new website</td>
      <td className='td-primary-v2'>2023-09-01</td>
      <td className='td-primary-v2'>Pending</td>
      <td className='td-primary-v2'>Jane Doe</td>
    </tr>
    <tr>
    <td className='td-secondary-v2'></td>
      <td className='td-checkbox-v2'><input type="checkbox"></input></td>
      <td className='td-primary-v2'>Meet with client</td>
      <td className='td-primary-v2'>2023-09-05</td>
      <td className='td-primary-v2'>To do</td>
      <td className='td-primary-v2'>Peter Smith</td>
    </tr>
  </tbody>
</table>

{/*------ Variant #3 ------*/}
<h1 className='table-name-v3 my-3 p-1'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-svg w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

    Variant 3</h1>

<table className="table">
  <thead>
    <tr>
      <th className='th-secondary-v3'></th>
      <th className='th-checkbox-v3'><input type="checkbox"></input></th>
      <th className='th-primary-v3'>Task</th>
      <th className='th-primary-v3'>Due Date</th>
      <th className='th-primary-v3'>Status</th>
      <th className='th-primary-v3'>Assignee</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='td-secondary-v3'></td>
      <td className='td-checkbox-v3'><input type="checkbox"></input></td>
      <td className='td-primary-v3'>Write blog post</td>
      <td className='td-primary-v3'>2023-08-25</td>
      <td className='td-primary-v3'>In progress</td>
      <td className='td-primary-v3'>John Doe</td>
    </tr>
    <tr>
    <td className='td-secondary-v3'></td>
      <td className='td-checkbox-v3'><input type="checkbox"></input></td>
      <td className='td-primary-v3'>Design new website</td>
      <td className='td-primary-v3'>2023-09-01</td>
      <td className='td-primary-v3'>Pending</td>
      <td className='td-primary-v3'>Jane Doe</td>
    </tr>
    <tr>
    <td className='td-secondary-v3'></td>
      <td className='td-checkbox-v3'><input type="checkbox"></input></td>
      <td className='td-primary-v3'>Meet with client</td>
      <td className='td-primary-v3'>2023-09-05</td>
      <td className='td-primary-v3'>To do</td>
      <td className='td-primary-v3'>Peter Smith</td>
    </tr>
  </tbody>
</table>
</>
  );
};

export default BEPCtable;
