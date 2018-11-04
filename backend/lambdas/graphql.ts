"use strict";
import { graphqlLambda, graphiqlLambda } from "apollo-server-lambda";
import { makeExecutableSchema } from "graphql-tools";
import schema from "./graphql/schema";
import { resolvers } from "./graphql/resolver";


const myGraphQLSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers,
    logger: console,
});

export const graphqlHandler = (event: any, context: any, callback: any) => {
    function callbackWithHeaders(error: any, output: any) {
        output.headers["Access-Control-Allow-Origin"] = "*";
        callback(error, output);
    }
    context.callbackWaitsForEmptyEventLoop = false;
    const handler = graphqlLambda({ schema: myGraphQLSchema, tracing: false });
    handler(event, context, callbackWithHeaders);
};


export const graphiqlHandler = graphiqlLambda({
    endpointURL: "/graphql",
});

