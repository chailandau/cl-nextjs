export const INTERNAL_LINK_FRAGMENT = `
    id
    title
    slug
`;

export const HERO_FRAGMENT = `
... on HeroBlock {
    id
    hero {
      id
       icon {
        id
        alt
        url
      }
      heading
      headingTag
      coloredSubhead
      
    }
  }
`;
