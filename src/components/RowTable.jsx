export default function RowTable(props) {
  const { order, name, email, message, date } = props;
  return (
    <tr className='hover:bg-emerald-100 grid grid-cols-[50px_250px_250px_450px_150px]'>
      <td className='p-4'>{order}</td>
      <td className='p-4'>
        <div className='capitalize truncate'>{name}</div>
      </td>
      <td className='p-4'>
        <div className='truncate'>{email}</div>
      </td>
      <td className='p-4'>
        <div className='truncate'>{message}</div>
      </td>
      <td className='p-4'>{date}</td>
    </tr>
  );
}
