import React from 'react';

const ResponsiveComponent = () => {
  return (
    <div className="p-4">
      <div className="bg-blue-500 text-white p-4 md:bg-green-500 lg:bg-red-500 xl:bg-yellow-500">
        Resize the window to see the background color change!
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="p-2 bg-gray-200 md:flex-1">Column 1</div>
        <div className="p-2 bg-gray-400 md:flex-1">Column 2</div>
        <div className="p-2 bg-gray-600 md:flex-1">Column 3</div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;
