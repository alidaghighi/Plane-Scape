import { useState } from "react";
import clsx from 'clsx';

const SideFilter = () => {
  const [direction, setDirection] = useState('A');
  const [selected, setSelected] = useState('E');
  
  return (
    <div className="py-6 pl-6 rounded-lg  mb-6">
      <h2 className="text-lg font-bold mb-4">Sort by:</h2>
      {/* <Dropdown /> */}
      <div className="w-full mb-4">
        <div className="relative">
          <select
            className={clsx(
              'w-full border rounded-lg p-2 appearance-none',
              'focus:outline-none data-[focus]:outline-1 data-[focus]:-outline-offset-1 data-[focus]:outline-white/25',
              // Make the text of each option black on Windows
              '*:text-black'
            )}
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="E">Earliest Time</option>
            <option value="L">Latest Time</option>
          </select>
          <i
            className="fa fa-chevron-down group pointer-events-none absolute top-3 right-2.5 size-4 text-violet-900"
            aria-hidden="true"
          />
        </div>
    </div>
      <h2 className="text-lg font-bold mb-4">Direction</h2>
      <div className="flex flex-col space-y-2 mb-4">
        <label className="flex items-center">
          <input type="radio" name="Departure-time" className="mr-2 accent-violet-500"
            checked={direction === 'D'}
            onChange={() => setDirection('D')}
           />
          Departure
        </label>
        <label className="flex items-center">
          <input type="radio" name="arrival-time" className="mr-2 accent-violet-500" 
            checked={direction === 'A'}
            onChange={() => setDirection('A')}
          />
          Arrival
        </label>
      </div>
    </div>
  );
};

export default SideFilter;
