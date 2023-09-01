import { FC } from 'react';

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
        default:
            return null;
    }
};
export default SingleUse;
