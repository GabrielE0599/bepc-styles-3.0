const lightTableHtml = `<h1 className='table-name my-1 p-3'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-svg w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

    Table name</h1>

<table className="table">
  <thead>
    <tr>
      <th className='th-secondary'></th>
      <th className='th-checkbox'><input type="checkbox"></input></th>
      <th className='th-primary'>Task</th>
      <th className='th-primary'>Due Date</th>
      <th className='th-primary'>Status</th>
      <th className='th-primary'>Assignee</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='td-secondary'></td>
      <td className='td-checkbox'><input type="checkbox"></input></td>
      <td className='td-primary'>Write blog post</td>
      <td className='td-primary'>2023-08-25</td>
      <td className='td-primary'>In progress</td>
      <td className='td-primary'>John Doe</td>
    </tr>
    <tr>
    <td className='td-secondary'></td>
      <td className='td-checkbox'><input type="checkbox"></input></td>
      <td className='td-primary'>Design new website</td>
      <td className='td-primary'>2023-09-01</td>
      <td className='td-primary'>Pending</td>
      <td className='td-primary'>Jane Doe</td>
    </tr>
    <tr>
    <td className='td-secondary'></td>
      <td className='td-checkbox'><input type="checkbox"></input></td>
      <td className='td-primary'>Meet with client</td>
      <td className='td-primary'>2023-09-05</td>
      <td className='td-primary'>To do</td>
      <td className='td-primary'>Peter Smith</td>
    </tr>
  </tbody>
</table>`;

export default lightTableHtml;