// Test away!
import React from 'react';
import { render , fireEvent } from '@testing-library/react';

import Display from './Display'

test ('locked and closed are set to false', () => {
    render(<Display />)
    expect(Display.defaultProps.closed).toBe(false);
    expect(Display.defaultProps.locked).toBe(false);
})


test ('diplay if gate is  is locked/unlocked', () => {
const { getByText } = render (<Display locked={true} />)
expect(getByText('Locked'))
})

test ('display if gate it open/closed' , () => {
const { getByText } = render (<Display closed={true} />)
expect(getByText('Closed'));
})
