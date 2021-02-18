const { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLID } = require("graphql");
const axios = require('axios');
const { UserType } = require("./UserType");
const { PostType } = require("./PostType");

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: { type: GraphQLID }
            },
            async resolve(parent, args) {
                const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${args.id}`);
                return result.data;
            }
        },
        post: {
            type: PostType,
            args: {
                id: { type: GraphQLID }
            },
            async resolve(parent, args) {
                const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${args.id}`);
                return result.data;
            }
        },
        users: {
            type: new GraphQLList(UserType),
            async resolve(parent, args) {
                const result = await axios.get('https://jsonplaceholder.typicode.com/users');
                return result.data;
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            async resolve(parent, args) {
                const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
                return result.data;
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
});

