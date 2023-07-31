const InputBox = ({ title, value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <div className="relative my-2 rounded-md shadow-sm">
        <input
          onChange={onChange}
          type="number"
          id={title}
          min={1}
          value={value}
          className="block w-full rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-w-[600px]"
          required
        />
      </div>
    </div>
  );
};

export default InputBox;
