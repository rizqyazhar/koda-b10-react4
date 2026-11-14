export default function Input(props) {
  const { ...rest } = props;
  return (
    <input
      {...rest}
      className='w-full px-2 py-1 outline-none border-2 border-emerald-950 rounded-md text-base'
    />
  );
}
