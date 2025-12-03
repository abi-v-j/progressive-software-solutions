import React from 'react';

export const BottomBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
      <button>Home</button>
      <button>Users</button>
      <button>Orders</button>
      <button>Settings</button>
    </div>
  );
};
