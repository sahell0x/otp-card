function App() {
  function siftFocus(e) {
    if (e.target.value && e.target.nextElementSibling) {
      e.target.nextElementSibling.focus();
    } else if (!e.target.value && e.target.previousElementSibling) {
      e.target.previousElementSibling.focus();
    }
  }

  return (
    <div className="h-96 flex justify-center">
      <div className="bg-white-200 border border-gray-300 rounded-lg shadow h-96 w-96 mt-4 p-6">
        <div className="text-center text-4xl font-extrabold mt-20">
          Enter-OTP
        </div>

        <div className="flex justify-between mt-6">
          <input
            
            onChange={siftFocus}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 pl-6"
            type="text"
            maxLength={1}
            autoFocus
          />

          <input
            
            onChange={siftFocus}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 pl-6"
            type="text"
            maxLength={1}
          />

          <input
           
            onChange={siftFocus}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 pl-6"
            type="text"
            maxLength={1}
          />

          <input
            
            onChange={siftFocus}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-16 p-2.5 pl-6"
            type="text"
            maxLength={1}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
