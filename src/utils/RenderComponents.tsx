import { FC, Fragment } from 'react';

import { Page_Sections } from '@/api/graphqlTypes';
import Hero from '@/components/Hero';

interface Sections {
    components?: Page_Sections[];
}

const RenderComponents: FC<Sections> = ({ components }) => {
    // if (!components || !components.length) {
    //     return null;
    // }
    const renderComponent = (component: Page_Sections) => {
        if (component?.hero) {
            return <Hero {...component?.hero} />;
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
