// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display'

test ('locked and closed are set to false', () => {
    render(<Display />)
    expect(Display.defaultProps.closed).toBe(false);
    expect(Display.defaultProps.locked).toBe(false);
})
