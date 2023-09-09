import { FC } from 'react';

import styles from './ToolboxListing.module.scss';

import { TOOLBOX_QUERY } from '@/api/graphqlQueries';
import {
    Maybe,
    ToolboxListing as ToolboxListingType
} from '@/api/graphqlTypes';
import Container from '@/atoms/Container';
import Image from '@/atoms/Image';
import Text from '@/atoms/Text';
import Grid from '@/molecules/Grid';
import Section from '@/molecules/Section';
import { getData } from '@/utils/getData';

interface ToolboxListingContentProps {
    data?: Maybe<ToolboxListingType> | undefined;
}
export const ToolboxListingContent: FC<ToolboxListingContentProps> = ({
    data
}) => {
    const { title, description, icon, tools } = data || {};

    return (
        <Section
            className={styles['toolbox-listing']}
            heading={title}
            icon={icon}
        >
            {description && <Text size='sm'>{description}</Text>}
            <Grid as='ul'>
                {tools?.map((tool) => (
                    <li key={tool?.id}>
                        <Container className={styles['icon']}>
                            {tool?.icon?.url && (
                                <Image
                                    src={tool?.icon?.url}
                                    alt={tool?.icon?.alt}
                                    width={tool?.icon?.width || 64}
                                    height={tool?.icon?.height || 64}
                                    hasBorder={false}
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

const ToolboxListing: FC = async () => {
    const { ToolboxListing: toolboxData } = await getData(TOOLBOX_QUERY);

    return <ToolboxListingContent data={toolboxData} />;
};

export default ToolboxListing;
