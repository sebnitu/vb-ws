// Import Vrembem styles
import './index.scss';

// Import Vrembem JS
import * as vb from 'vrembem';
console.log('Vrembem', vb);

// Import dependent asdf packages
import { a } from '@vb-ws/a/index';
import { s } from '@vb-ws/s/index';
import { d } from '@vb-ws/d/index';
import { f } from '@vb-ws/f/index';

// Export the asdf module
export const asdf = a + s + d + f;
