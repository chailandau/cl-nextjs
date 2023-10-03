import { FC, Fragment } from 'react';

import { Page_PageSections, Project_ProjectSections } from '@/api/graphqlTypes';
import Image from '@/atoms/Image';
import Hero from '@/components/Hero';
import SingleUse from '@/components/SingleUse';
import Socials from '@/components/Socials';
import TextBlock from '@/molecules/TextBlock/TextBlock';

interface Sections {
    /** Sections to render */
    components?: Page_PageSections[] | Project_ProjectSections[];
}

const RenderComponents: FC<Sections> = ({ components }) => {
    if (!components || !components.length) {
        return null;
    }
    const renderComponent = (
        component: Page_PageSections | Project_ProjectSections
    ) => {
        switch (component?.__typename) {
            case 'HeroBlock':
                return <Hero {...component?.hero} />;
            case 'TextBlock':
                return (
                    <TextBlock
                        heading={component?.heading}
                        richText={component?.text}
                    />
                );
            case 'ImageBlock':
                return (
                    <Image
                        src={component?.image?.url || ''}
                        alt={component?.image?.alt || ''}
                        width={component?.image?.width || 1000}
                        height={component?.image?.height || 1000}
                    />
                );
            case 'SocialsBlock':
                return <Socials socials={component?.socials} />;
            case 'SingleUseBlock':
                return <SingleUse component={component?.singleUse} />;
            default:
                return null;
        }
    };

    return (
        <>
            {components?.map((component) => (
                <Fragment key={component?.id}>
                    {renderComponent(component)}
                </Fragment>
            ))}
        </>
    );
};

export default RenderComponents;
