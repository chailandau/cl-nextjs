import type { Meta, StoryObj } from '@storybook/react';

import Testimonial from './Testimonial';

const testimonial = {
    id: '64d7fe31a8e01e8a91ba08b8',
    author: 'Justin Wallace',
    jobTitle: 'Sr. Software Engineer',
    company: 'OctoML',
    linkedin: 'https://www.linkedin.com/in/thejustinwallace',
    image: {
        id: '64d7fe30a8e01e8a91ba08b1',
        alt: 'Justin Wallace headshot',
        url: 'https://cl-payload.cr.chailandau.com/images/justin_wallace.jpeg',
        width: 800,
        height: 800
    },
    excerpt:
        "Chai is an exceptional individual who stands above her peers in accessibility, development speed, and collaborative spirit. One of Chai's greatest strengths is her expertise in accessible web content. In an age where inclusivity is becoming increasingly important, Chai has shown a deep understanding of the principles and techniques required to create websites and applications that are accessible to all users. She understands how to create a user experience that is welcoming and inclusive, and her dedication to this \n important aspect of software development has not gone unnoticed.",
    testimonial: [
        {
            children: [
                {
                    text: "I have had the pleasure of working with Chai for almost a year at Webstacks, and I am just blown away by the amount of value she adds to our teams. Chai is an exceptional individual who stands above her peers in accessibility, development speed, and collaborative spirit.\n\nOne of Chai's greatest strengths is her expertise in accessible web content. In an age where inclusivity is becoming increasingly important, Chai has shown a deep understanding of the principles and techniques required to create websites and applications that are accessible to all users. She understands how to create a user experience that is welcoming and inclusive, and her dedication to this (in my opinion) important aspect of software development has not gone unnoticed.\n\nAnother strength of core strength is her speed of development. She has a remarkable ability to work quickly without sacrificing quality. She is able to identify the most efficient paths to a solution, while still maintaining a high standard of quality in her work. This is a rare talent in the engineering world, and Chai has demonstrated time and time again that she can deliver high-quality work on tight deadlines.\n\nLastly, Chai’s collaborative spirit is a true asset to any team. She is a great communicator who listens well, responds thoughtfully, and offers constructive feedback. She is always willing to lend a hand to her colleagues and takes a team-oriented approach to problem-solving. Her ability to build positive relationships with her colleagues and clients alike is a testament to their professionalism and dedication to her work."
                }
            ]
        }
    ]
};

const meta: Meta<typeof Testimonial> = {
    title: 'Components/Testimonial',
    component: Testimonial,
    argTypes: {},
    parameters: {}
};

export default meta;

type Story = StoryObj<typeof Testimonial>;

export const Default: Story = {
    args: { testimonial }
};
