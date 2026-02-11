import { Metadata } from 'next';

import { MetaData } from '@/types/content';

export const getMetadataInfo = (meta: MetaData): Metadata => ({
    title: meta?.title || undefined,
    description: meta?.description || undefined,
    openGraph: {
        title: meta?.title || undefined,
        description: meta?.description || undefined,
        siteName: 'Chai Landau',
        images: meta?.image?.url
            ? [
                  {
                      url: meta.image.url,
                      width: meta.image.width || undefined,
                      height: meta.image.height || undefined
                  }
              ]
            : []
    }
});
