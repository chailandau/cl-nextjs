import { FC } from 'react';

// import NotFound from '../404';

import NotFound from '../404';

import { PROJECT_CONTENT_QUERY } from '@/api/graphqlQueries';
// import { Page_Sections } from '@/api/graphqlTypes';
import { Project_Intro, Project_ProjectSections } from '@/api/graphqlTypes';
import Heading from '@/atoms/Heading';
import Image from '@/atoms/Image';
import Text from '@/atoms/Text';
import { getData } from '@/utils/getData';
import RenderComponents from '@/utils/RenderComponents';
// import RenderComponents from '@/utils/RenderComponents';

interface ProjectProps {
    slug: string;
}

let title: string;
let intro: Project_Intro;

const Project: FC<ProjectProps> = async ({ slug }) => {
    const { Projects } = await getData(PROJECT_CONTENT_QUERY, slug);

    const projectSections: Project_ProjectSections[] = [];

    Projects?.docs?.forEach((project) => {
        project?.title && (title = project.title);
        project?.intro && (intro = project.intro);
        project?.projectSections &&
            projectSections.push(...project.projectSections);
    });

    if (!intro && (!projectSections || !projectSections.length)) {
        return <NotFound />;
    }

    return (
        <>
            {title && <Heading as='h1'>{title}</Heading>}
            {intro?.description && <Text>{intro.description}</Text>}
            {intro?.image?.url && (
                <Image
                    src={intro.image.url}
                    alt={intro.image.alt}
                    width={intro.image.width || 1000}
                    height={intro.image.height || 1000}
                />
            )}
            <RenderComponents components={projectSections} />
        </>
    );
};

export default Project;
