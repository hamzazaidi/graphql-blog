const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const axios = require('axios');
const { UserType } = require("./UserType");

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        user: {
            type: UserType,
            async resolve(parent, args) {
                const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${parent.userId}`);
                return result.data;
            }
        }
    })
})


module.exports = { PostType };