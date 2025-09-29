



export default function Button({ text, type = "submit", onClick, className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full mt-5 bg-black cursor-pointer 
                  text-white py-3 rounded-xl block ${className}`}
    >
      {text}
    </button>
  );
}

//  hover:bg-gray-900 transition