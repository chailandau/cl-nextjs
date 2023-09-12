import { FC, Fragment } from 'react';

import { Page_PageSections } from '@/api/graphqlTypes';
import Hero from '@/components/Hero';
import SingleUse from '@/components/SingleUse';
import Socials from '@/components/Socials';

interface Sections {
    /** Sections to render */
    components?: Page_PageSections[];
}

const RenderComponents: FC<Sections> = ({ components }) => {
    if (!components || !components.length) {
        return null;
    }
    const renderComponent = (component: Page_PageSections) => {
        switch (component?.__typename) {
            case 'HeroBlock':
                return <Hero {...component?.hero} />;
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
