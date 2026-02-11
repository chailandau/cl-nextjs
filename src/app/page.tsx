import { Metadata } from 'next';

import About from '@/components/About';
import CaseStudyListing from '@/components/CaseStudyListing';
import Hero from '@/components/Hero';
import Socials from '@/components/Socials';
import TestimonialListing from '@/components/TestimonialListing';
import ToolboxListing from '@/components/ToolboxListing';
import { getSocialsData } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Chai Landau | Frontend Engineer',
    description:
        'Chai Landau is a frontend engineer with a passion for creating functional and delightful user experiences.',
    openGraph: {
        title: 'Chai Landau | Frontend Engineer',
        description:
            'Chai Landau is a frontend engineer with a passion for creating functional and delightful user experiences.',
        siteName: 'Chai Landau'
    }
};

export default function Home() {
    const socials = getSocialsData();

    return (
        <>
            <Hero
                heading='Chai Landau'
                subhead='Frontend Engineer'
                doodles
                homepage
            />
            <CaseStudyListing sectionId='work' />
            <ToolboxListing sectionId='toolbox' />
            <About sectionId='about' />
            <TestimonialListing sectionId='testimonials' />
            <Socials socials={socials} sectionId='contact' />
        </>
    );
}
