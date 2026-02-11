import { FC } from 'react';

import About from '../About';
import CaseStudyListing from '../CaseStudyListing';
import TestimonialListing from '../TestimonialListing';
import ToolboxListing from '../ToolboxListing';

import { SectionId } from '@/atoms/Container/Container';
import { SingleUseComponent } from '@/types/content';

export interface SingleUseProps {
    component?: SingleUseComponent | null;
    sectionId?: SectionId;
}
const SingleUse: FC<SingleUseProps> = ({ component, sectionId }) => {
    if (!component) {
        return null;
    }
    switch (component) {
        case 'toolbox_listing':
            return <ToolboxListing sectionId={sectionId} />;
        case 'testimonial_listing':
            return <TestimonialListing sectionId={sectionId} />;
        case 'about':
            return <About sectionId={sectionId} />;
        case 'case_study_listing':
            return <CaseStudyListing sectionId={sectionId} />;
        default:
            return null;
    }
};
export default SingleUse;
