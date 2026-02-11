import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content/projects');

export interface ProjectFrontmatter {
    title: string;
    description?: string;
    meta?: {
        title?: string;
        description?: string;
        image?: {
            url?: string;
            width?: number;
            height?: number;
        };
    };
    intro?: {
        description?: string;
        image?: {
            url?: string;
            alt?: string;
            width?: number;
            height?: number;
        };
        cta?: Array<{
            id?: string;
            label?: string;
            externalLink?: string;
        }>;
    };
    caseStudies?: Array<{
        slug: string;
        title: string;
        featuredImage?: {
            url?: string;
            alt?: string;
            width?: number;
            height?: number;
        };
        intro?: {
            heading?: string;
            text?: string;
        };
    }>;
}

export interface CaseStudyFrontmatter {
    title: string;
    meta?: {
        title?: string;
        description?: string;
        image?: {
            url?: string;
            width?: number;
            height?: number;
        };
    };
    intro?: {
        heading?: string;
        text?: string;
        image?: {
            url?: string;
            alt?: string;
            width?: number;
            height?: number;
        };
        cta?: Array<{
            id?: string;
            label?: string;
            externalLink?: string;
        }>;
    };
}

export const getProjectContent = (slug: string) => {
    const filePath = path.join(CONTENT_DIR, slug, 'index.mdx');

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const source = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(source);

    return {
        frontmatter: data as ProjectFrontmatter,
        content
    };
};

export const getCaseStudyContent = (
    projectSlug: string,
    caseStudySlug: string
) => {
    const filePath = path.join(
        CONTENT_DIR,
        projectSlug,
        `${caseStudySlug}.mdx`
    );

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const source = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(source);

    return {
        frontmatter: data as CaseStudyFrontmatter,
        content
    };
};

export const getAllProjectSlugs = (): string[] => {
    if (!fs.existsSync(CONTENT_DIR)) {
        return [];
    }

    return fs
        .readdirSync(CONTENT_DIR, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .filter((dir) =>
            fs.existsSync(path.join(CONTENT_DIR, dir.name, 'index.mdx'))
        )
        .map((dir) => dir.name);
};

export const getAllCaseStudySlugs = (): Array<{
    projectSlug: string;
    caseStudySlug: string;
}> => {
    const projectSlugs = getAllProjectSlugs();
    const results: Array<{ projectSlug: string; caseStudySlug: string }> = [];

    for (const projectSlug of projectSlugs) {
        const projectDir = path.join(CONTENT_DIR, projectSlug);
        const files = fs.readdirSync(projectDir);

        for (const file of files) {
            if (file.endsWith('.mdx') && file !== 'index.mdx') {
                results.push({
                    projectSlug,
                    caseStudySlug: file.replace('.mdx', '')
                });
            }
        }
    }

    return results;
};
