const darkTableHtml = `<h1 className='table-name my-1 p-3'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-svg w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

    Table name</h1>

<table className="table-dark">
  <thead>
    <tr>
      <th className='th-secondary-dark'></th>
      <th className='th-checkbox-dark'><input type="checkbox"></input></th>
      <th className='th-primary-dark'>Task</th>
      <th className='th-primary-dark'>Due Date</th>
      <th className='th-primary-dark'>Status</th>
      <th className='th-primary-dark'>Assignee</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='td-secondary-dark'></td>
      <td className='td-checkbox-dark'><input type="checkbox"></input></td>
      <td className='td-primary-dark'>Write blog post</td>
      <td className='td-primary-dark'>2023-08-25</td>
      <td className='td-primary-dark'>In progress</td>
      <td className='td-primary-dark'>John Doe</td>
    </tr>
    <tr>
    <td className='td-secondary-dark'></td>
      <td className='td-checkbox-dark'><input type="checkbox"></input></td>
      <td className='td-primary-dark'>Design new website</td>
      <td className='td-primary-dark'>2023-09-01</td>
      <td className='td-primary-dark'>Pending</td>
      <td className='td-primary-dark'>Jane Doe</td>
    </tr>
    <tr>
    <td className='td-secondary-dark'></td>
      <td className='td-checkbox-dark'><input type="checkbox"></input></td>
      <td className='td-primary-dark'>Meet with client</td>
      <td className='td-primary-dark'>2023-09-05</td>
      <td className='td-primary-dark'>To do</td>
      <td className='td-primary-dark'>Peter Smith</td>
    </tr>
  </tbody>
</table>`;

export default darkTableHtml;