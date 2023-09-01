import { FC } from 'react';

import styles from './ToolboxListing.module.scss';

import { TOOLBOX_QUERY } from '@/api/graphqlQueries';
import Container from '@/atoms/Container';
import Image from '@/atoms/Image';
import Text from '@/atoms/Text';
import Section from '@/molecules/Section';
import { getData } from '@/utils/getData';

const ToolboxListing: FC = async () => {
    const { ToolboxListing: Toolbox } = await getData(TOOLBOX_QUERY);

    const { title, description, icon, tools } = Toolbox || {};

    return (
        <Section
            className={styles['toolbox-listing']}
            heading={title}
            icon={icon}
        >
            {description && <Text size='sm'>{description}</Text>}
            <ul>
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
            </ul>
        </Section>
    );
};

export default ToolboxListing;
