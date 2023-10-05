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

export const IMAGE_FRAGMENT = `
id
alt
url
width
height
base64
`;

export const SOCIALS_FRAGMENT = `
...on SocialsBlock {
  __typename
  id
  socials {
    icon {
      ${IMAGE_FRAGMENT}
    }
    label
    socialLink
  }
  sectionId
}
`;

export const HERO_FRAGMENT = `
...on HeroBlock {
  __typename
  id
  hero {
    id
    icon {
      ${IMAGE_FRAGMENT}
    }
    heading
    headingTag
    coloredSubhead
    subhead
    doodles
    homepage
    ${CTA_FRAGMENT}
  }
  sectionId
}
`;

export const SINGLE_USE_FRAGMENT = `
...on SingleUseBlock {
  __typename
  id
  singleUse
  sectionId
}
`;
export const TEXT_BLOCK_FRAGMENT = `
...on TextBlock {
  __typename
  id
  heading
  text
}
`;

export const IMAGE_BLOCK_FRAGMENT = `
...on ImageBlock {
  __typename
  image {
    ${IMAGE_FRAGMENT}
  }
}
`;

export const META_FRAGMENT = `
meta {
  title
  description
  image {
    ${IMAGE_FRAGMENT}
  }
}
`;
