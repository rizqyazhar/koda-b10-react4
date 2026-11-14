export default function Table(props) {
  const { children } = props;
  return (
    <div className='w-fit h-60 bg-emerald-50 rounded-lg overflow-auto'>
      <table className='w-fit text-left rounded-t-lg'>
        <thead className='text-white bg-emerald-700 '>
          <tr className='grid grid-cols-[50px_250px_250px_450px_150px]'>
            <th scope='col' className='p-3'>
              No.
            </th>
            <th scope='col' className='p-3'>
              Name
            </th>
            <th scope='col' className='p-3'>
              Email
            </th>
            <th scope='col' className='p-3'>
              Message
            </th>
            <th scope='col' className='p-3'>
              Date
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
