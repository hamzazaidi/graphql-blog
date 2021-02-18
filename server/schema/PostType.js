const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const axios = require('axios');
const { UserType } = require("./UserType");
const post = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

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