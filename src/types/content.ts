export type Maybe<T> = T | null;

// --- Images ---

export interface ContentImage {
    url?: Maybe<string>;
    alt?: string;
    width?: Maybe<number>;
    height?: Maybe<number>;
    base64?: Maybe<string>;
}

/** Icon is an alias for ContentImage (used in section headings, tools, socials) */
export type Icon = ContentImage;

// --- Metadata ---

export interface MetaImage {
    url?: Maybe<string>;
    width?: Maybe<number>;
    height?: Maybe<number>;
}

export interface MetaData {
    title?: Maybe<string>;
    description?: Maybe<string>;
    image?: Maybe<MetaImage>;
}

// --- CTA ---

export type CtaLinkType = 'internal' | 'external';

export interface Cta {
    id?: Maybe<string>;
    label?: Maybe<string>;
    linkType?: Maybe<CtaLinkType>;
    externalLink?: Maybe<string>;
    internalLink?: Maybe<{
        id?: Maybe<string>;
        slug?: Maybe<string>;
    }>;
}

// --- Navigation ---

export interface NavMenuItem {
    page?: Maybe<{
        id?: Maybe<string>;
        title?: Maybe<string>;
        slug?: Maybe<string>;
    }>;
    overridePageName?: Maybe<boolean>;
    customLabel?: Maybe<string>;
    linkToSection?: Maybe<boolean>;
    sectionId?: Maybe<string>;
}

export interface NavData {
    menuItems?: Maybe<NavMenuItem[]>;
    footerCopyrightText?: Maybe<string>;
}

// --- Socials ---

export interface SocialItem {
    icon: Icon;
    label: string;
    socialLink?: Maybe<string>;
}

export interface SocialsBlock {
    socials?: Maybe<SocialItem[]>;
    sectionId?: Maybe<string>;
}

// --- Toolbox ---

export interface ToolItem {
    id?: Maybe<string>;
    title: string;
    icon: Icon;
}

export interface ToolboxData {
    title?: Maybe<string>;
    description?: Maybe<string>;
    icon?: Maybe<Icon>;
    tools?: Maybe<ToolItem[]>;
}

// --- Testimonials ---

export interface TestimonialItem {
    id?: Maybe<string>;
    author: string;
    jobTitle: string;
    company: string;
    linkedin?: Maybe<string>;
    excerpt?: Maybe<string>;
    testimonial: RichTextBlock[];
    image: ContentImage;
}

export interface TestimonialsData {
    title?: Maybe<string>;
    icon?: Maybe<Icon>;
    testimonials?: Maybe<TestimonialItem[]>;
}

// --- About ---

export interface AboutPets {
    athena?: Maybe<ContentImage>;
    harvey?: Maybe<ContentImage>;
    warren?: Maybe<ContentImage>;
    jasper?: Maybe<ContentImage>;
}

export interface AboutData {
    title?: Maybe<string>;
    coloredSubhead?: Maybe<ColoredSubheadBlock[]>;
    image?: Maybe<ContentImage>;
    pets?: Maybe<AboutPets>;
    text?: Maybe<RichTextBlock[]>;
}

// --- Case Study Listing ---

export interface CaseStudyListingProject {
    id?: Maybe<string>;
    title?: Maybe<string>;
    slug?: Maybe<string>;
    featuredImage?: Maybe<ContentImage>;
    intro?: Maybe<{
        description?: Maybe<string>;
    }>;
}

export interface CaseStudyListingData {
    title?: Maybe<string>;
    icon?: Maybe<Icon>;
    caseStudies?: Maybe<CaseStudyListingProject[]>;
}

// --- Projects ---

export interface ProjectIntro {
    description?: Maybe<string>;
    cta?: Maybe<Cta[]>;
    image?: Maybe<ContentImage>;
}

export interface ProjectData {
    id?: Maybe<string>;
    slug?: Maybe<string>;
    title?: Maybe<string>;
    meta?: Maybe<MetaData>;
    intro?: Maybe<ProjectIntro>;
    caseStudies?: Maybe<CaseStudyData[]>;
}

// --- Case Studies ---

export interface CaseStudyIntro {
    heading?: Maybe<string>;
    text?: Maybe<RichTextBlock[]>;
    cta?: Maybe<Cta[]>;
    image?: Maybe<ContentImage>;
}

export interface CaseStudyData {
    id?: Maybe<string>;
    slug?: Maybe<string>;
    title?: Maybe<string>;
    meta?: Maybe<MetaData>;
    featuredImage?: Maybe<ContentImage>;
    intro?: Maybe<CaseStudyIntro>;
}

// --- Hero ---

export interface HeroData {
    heading: string;
    coloredSubhead?: Maybe<ColoredSubheadBlock[]>;
    subhead?: Maybe<string>;
    doodles?: Maybe<boolean>;
    homepage?: Maybe<boolean>;
    icon?: Maybe<Icon>;
    cta?: Maybe<Cta>;
}

// --- Rich Text (JSON format from Payload, kept for compatibility) ---

export interface RichTextChild {
    text?: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    type?: 'link' | 'ul' | 'ol';
    url?: string | null;
    newTab?: boolean;
    linkType?: string;
    doc?: {
        value?: {
            slug?: string;
        };
    };
    children?: RichTextChild[];
}

export interface RichTextBlock {
    text?: string;
    url?: string | null;
    newTab?: boolean;
    type?: 'ul' | 'ol';
    children: RichTextChild[];
}

// --- Colored Subhead (JSON format from Payload, kept for compatibility) ---

export interface ColoredSubheadChild {
    text: string;
    bold?: boolean;
}

export interface ColoredSubheadBlock {
    children: ColoredSubheadChild[];
}

// --- SingleUse ---

export type SingleUseComponent =
    | 'about'
    | 'case_study_listing'
    | 'testimonial_listing'
    | 'toolbox_listing';
