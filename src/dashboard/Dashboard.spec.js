import React from 'react';
import { render } from '@testing-library/react';

import Display from '../display/Display';
import Controls from '../controls/Controls';
import Dashboard from './Dashboard'

test ('Dashboard is rendering' , () => {
   render(<Dashboard />);
   render(<Display />);
   render (<Controls />);
});

