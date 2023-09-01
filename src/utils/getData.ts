import { graphQLClient } from '@/api/graphqlClient';
import { Query } from '@/api/graphqlTypes';

export const getData = async (QUERY: string) =>
    await graphQLClient.request<Query>(QUERY);

export const getPageData = async (QUERY: string, slug: string) =>
    await graphQLClient.request<Query>(QUERY, { slug });
