// Test away!

import React from 'react';
import { render , fireEvent, getByAltText } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard';



test('provide buttons to toggle the closed and locked states.', () => {
    const toggleLocked = jest.fn();
    const toggleClosed = jest.fn();
    
    render(
      <Controls
      toggleLocked={toggleLocked}
       toggleClosed={toggleClosed}
        
      />
    );
  });
  test(' text changes to reflect the state the door will be in if clicked', () => {
  const { getByText } =render(<Dashboard />)
  const ButtonClose = getByText(/close gate/i);
  const GateLock = getByText(/lock gate/i);
getByText(/close gate/i);

fireEvent.click(ButtonClose);

getByText(/open gate/i);
getByText(/lock gate/i);

fireEvent.click(GateLock);

const unlockButton = getByText(/unlock gate/i);

getByText(/unlock gate/i);

fireEvent.click(unlockButton);

const openButton = getByText (/open gate/i);

getByText(/open gate/i);
getByText(/lock gate/i);

fireEvent.click(openButton);

getByText(/close gate/i);

  });

  test('the closed toggle button is disabled if the gate is locked', () => {
      const { getByText } = render( <Dashboard /> );
      const buttonLock = getByText(/lock gate/i);
      const buttonClose = getByText(/close gate/i);
      fireEvent.click(buttonClose);
      fireEvent.click(buttonLock);
      expect(buttonClose.disabled).toBe(true);
  });



  




