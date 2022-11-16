import React from 'react';

export const SwitchStock = () => {
  return (
    <div className="switch-stock">
      <span>En stock</span>
      <div className="switch">
        <input id="toggle_switch" name="toggle_switch" type="checkbox" />
        <label htmlFor="toggle_switch"></label>
      </div>
    </div>
  );
};
