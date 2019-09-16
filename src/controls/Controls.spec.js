// Test away!

import React from 'react';
import { render , fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';



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
    const toggleLocked = jest.fn();
    const { getByText } = render(<Controls toggleLocked={toggleLocked} />);
  
    const toggleLockedClick = getByText('Unlock Gate');
   
  
    fireEvent.click(toggleLockedClick);
  
  
    expect(toggleLockedClick).toHaveClass('Lock Gate')
  
  });

  test(' text changes to reflect the state the door will be in if clicked', () => {
    const toggleClosed = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleClosed} />);
  
    const toggleClosedClick = getByText('Open Gate');
   
  
    fireEvent.click(toggleClosedClick);
  
  
    expect(toggleClosedClick).toHaveClass('Closed Gate')
  
  });

  



  




