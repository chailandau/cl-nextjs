import aboutData from '@content/data/about';
import caseStudyListingData from '@content/data/caseStudyListing';
import navData from '@content/data/nav';
import socialsData from '@content/data/socials';
import testimonialsData from '@content/data/testimonials';
import toolboxData from '@content/data/toolbox';

import type {
    AboutData,
    CaseStudyListingData,
    NavData,
    SocialItem,
    TestimonialsData,
    ToolboxData
} from '@/types/content';

export const getNavData = (): NavData => navData;

export const getSocialsData = (): SocialItem[] => socialsData;

export const getToolboxData = (): ToolboxData => toolboxData;

export const getTestimonialsData = (): TestimonialsData => testimonialsData;

export const getAboutData = (): AboutData => aboutData;

export const getCaseStudyListingData = (): CaseStudyListingData =>
    caseStudyListingData;
