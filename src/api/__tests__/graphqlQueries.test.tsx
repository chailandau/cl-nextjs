import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphql } from 'graphql';

import * as graphqlQueries from '../graphqlQueries';
import * as graphqlSchema from '../graphqlSchema.gql';

describe('graphqlQueries', () => {
    const queries = {
        ...graphqlQueries
    };

    Object.entries(queries).forEach(([name, query]) => {
        it(`mocks ${name} successfully`, async () => {
            const schema = makeExecutableSchema({ typeDefs: graphqlSchema });

            const schemaWithMocks = addMocksToSchema({
                schema
            });

            const result = await graphql({
                schema: schemaWithMocks,
                source: query
            });
            expect(result).toMatchSnapshot();
        });
    });
});
