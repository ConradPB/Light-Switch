import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { useState, useEffect } from 'react';

const toggle = () => {
  return {type: 'toggle'} 
}
 
const initialState = 'off';
const lightSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggle':
      return state === 'on' ? 'off' : 'on';
    default:
      return state; 
  }
} 


export const store = configureStore({
  reducer: lightSwitchReducer
});

const render = () => {
  ReactDOM.render(
    <LightSwitch 
      state={store.getState()}
    />,
    document.getElementById('root')
  )
}
 
render(); // Execute once to render with the initial state.
store.subscribe(render); // Re-render in response to state changes.

// Receive the store's state as a prop.
function LightSwitch(props) {
  const state = props.state; 
  const [clicked, setClicked] = useState(false);

  // We adjust the UI based on the store's current state.
  const bgColor = state === 'on' ? 'white' : 'black';
  const textColor = state === 'on' ? 'black' : 'white';  
 
  // The click handler dispatches an action to the store.
  const handleLightSwitchClick = () => {
    store.dispatch(toggle());
    
  }

  useEffect(() => {
    if (state === 'on') {
      setClicked(true);
    }
  }, [state]);
 
  return (  
    <div style={{background : bgColor, color: textColor}}>
      <button onClick={handleLightSwitchClick}>
        { !clicked ? 'Click here' : '' } {state}
      </button>
    </div>
  )
}
 
export { LightSwitch }
