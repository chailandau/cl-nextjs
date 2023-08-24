import { graphQLClient } from '@/api/graphqlClient';
import { Query } from '@/api/graphqlTypes';

export const getData = async (QUERY: string) =>
    await graphQLClient.request<Query>(QUERY);
