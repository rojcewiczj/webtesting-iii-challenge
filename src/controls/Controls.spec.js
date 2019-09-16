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

  

