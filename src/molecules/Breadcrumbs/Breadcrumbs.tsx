'use client';

import { usePathname } from 'next/navigation';
import { FC } from 'react';

import styles from './Breadcrumbs.module.scss';
import { getBreadcrumbData } from './getBreadcrumbData';

import Link from '@/atoms/Link';
import Text from '@/atoms/Text';
import Flex from '@/molecules/Flex';

const Breadcrumbs: FC = () => {
    const paths = usePathname();

    const breadcrumbs = getBreadcrumbData(paths);

    return (
        <Flex as='ul' className={styles['breadcrumbs']}>
            {breadcrumbs?.map((breadcrumb, index) => {
                const breadcrumbLabel = (
                    <Text size='xs'>{breadcrumb?.label}</Text>
                );

                return (
                    <li key={index}>
                        {index === breadcrumbs?.length - 1 ? (
                            breadcrumbLabel
                        ) : (
                            <Link
                                href={`${process.env.NEXT_PUBLIC_BASE_URL}${breadcrumb?.link}`}
                                underline={false}
                            >
                                {breadcrumbLabel}
                            </Link>
                        )}
                    </li>
                );
            })}
        </Flex>
    );
};

export default Breadcrumbs;
