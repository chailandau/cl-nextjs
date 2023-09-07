import { FC } from 'react';

import About from '../About';
import TestimonialListing from '../TestimonialListing';
import ToolboxListing from '../ToolboxListing';

import { SingleUseBlock_SingleUse } from '@/api/graphqlTypes';

export interface SingleUseProps {
    component?: SingleUseBlock_SingleUse | null;
}
const SingleUse: FC<SingleUseProps> = ({ component }) => {
    if (!component) {
        return null;
    }
    switch (component) {
        case 'toolbox_listing':
            return <ToolboxListing />;
        case 'testimonial_listing':
            return <TestimonialListing />;
        case 'about':
            return <About />;
        default:
            return null;
    }
};
export default SingleUse;
