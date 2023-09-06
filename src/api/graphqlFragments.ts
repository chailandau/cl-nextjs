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

export const IMAGE_FRAGMENT = `
  image {
    id
    alt
    url
    width
    height
  }
`;

export const HERO_FRAGMENT = `
... on HeroBlock {
    __typename
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

export const SINGLE_USE_FRAGMENT = `
... on SingleUseBlock {
  __typename
  id
  singleUse
  
}
`;
