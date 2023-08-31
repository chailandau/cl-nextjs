export const INTERNAL_LINK_FRAGMENT = `
    id
    title
    slug
`;

export const CTA_FRAGMENT = `
  cta {
    id
    label
    linkType
    externalLink
    internalLink {
      id
      slug
    }
  }
`;

export const ICON_FRAGMENT = `
  icon {
    id
    alt
    url
    width
    height
  }
`;

export const HERO_FRAGMENT = `
... on HeroBlock {
    id
    hero {
      id
      ${ICON_FRAGMENT}
      heading
      headingTag
      coloredSubhead
      ${CTA_FRAGMENT}
    }
  }
`;
