import { FC } from 'react';

import styles from './ToolboxListing.module.scss';

import Container from '@/atoms/Container';
import { SectionId } from '@/atoms/Container/Container';
import Image from '@/atoms/Image';
import Text from '@/atoms/Text';
import { getToolboxData } from '@/lib/data';
import Grid from '@/molecules/Grid';
import Section from '@/molecules/Section';
import { Maybe, ToolboxData } from '@/types/content';

interface ToolboxListingData {
    data?: Maybe<ToolboxData> | undefined;
    sectionId?: SectionId;
}
export const ToolboxListingContent: FC<ToolboxListingData> = ({
    data,
    sectionId
}) => {
    const { title, description, icon, tools } = data || {};

    return (
        <Section
            className={styles['toolbox-listing']}
            heading={title}
            icon={icon}
            sectionId={sectionId}
        >
            {description && <Text size='sm'>{description}</Text>}
            <Grid as='ul'>
                {tools?.map((tool) => (
                    <li key={tool?.id}>
                        <Container className={styles['icon']}>
                            {tool?.icon?.url && (
                                <Image
                                    src={tool?.icon?.url}
                                    alt={tool?.icon?.alt || ''}
                                    width={tool?.icon?.width || 64}
                                    height={tool?.icon?.height || 64}
                                    hasBorder={false}
                                    base64={tool?.icon?.base64 || undefined}
                                />
                            )}
                        </Container>

                        <Text size='xs'>{tool?.title}</Text>
                    </li>
                ))}
            </Grid>
        </Section>
    );
};

interface ToolboxListingProps {
    sectionId?: SectionId;
}
const ToolboxListing: FC<ToolboxListingProps> = ({ sectionId }) => {
    const toolboxData = getToolboxData();

    return <ToolboxListingContent data={toolboxData} sectionId={sectionId} />;
};

export default ToolboxListing;
