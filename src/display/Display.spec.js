// Test away!
import React from 'react';
import { render , fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display'

test ('locked and closed are set to false', () => {
    render(<Display />)
    expect(Display.defaultProps.closed).toBe(false);
    expect(Display.defaultProps.locked).toBe(false);
})


test ('diplay if gate is  is locked', () => {
const { getByText } = render (<Display locked={true} />)
expect(getByText('Locked'))
})
test ('display if gate is  unlocked', () => {
    const { getByText } = render (<Display locked={false} />)
    expect(getByText('Unlocked'))
    })


test ('display if gate is closed' , () => {
const { getByText } = render (<Display closed={true} />)
expect(getByText('Closed'));
})

  test ('display if gate it open' , () => {
    const { getByText } = render (<Display closed={false} />)
    expect(getByText('Open'));
    })
    
    
    test ('when locked or closed use the red-led class', () => {
        
        const { getByText } = render (<Display locked={true} />);
        const lockedDisplay = getByText ('Locked');
        expect(lockedDisplay).toHaveClass('red-led');
        })
        test ('when locked or closed use the green-led class', () => {
        
            const { getByText } = render (<Display locked={false} />);
            const lockedDisplay = getByText ('Open');
            expect(lockedDisplay).toHaveClass('green-led');
            });

