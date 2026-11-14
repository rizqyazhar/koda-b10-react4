export default function Label(props) {
  const { labelText, htmlFor, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className='w-full flex flex-col gap-1 text-xs font-medium uppercase'>
      {labelText}
      {children}
    </label>
  );
}
