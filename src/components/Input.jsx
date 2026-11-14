export default function Input(props) {
  const { inputType, inputPlaceholder, inputId, inputName } = props;
  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      id={inputId}
      name={inputName}
      className='w-full px-2 py-1 outline-none border-2 border-emerald-950 rounded-md text-base'
    />
  );
}
