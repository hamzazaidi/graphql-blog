const { GraphQLObjectType, GraphQLList, GraphQLSchema } = require("graphql");
const axios = require('axios');
const { UserType } = require("./UserType");

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            async resolve(parent, args) {
                const result = await axios.get('https://jsonplaceholder.typicode.com/users');
                return result.data;
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
});

