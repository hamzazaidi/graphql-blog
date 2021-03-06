const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLSchema, GraphQLID } = require("graphql");
const axios = require('axios');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        avatar: { type: GraphQLString },
        address: { type: AddressType },             
        posts: {
            type: new GraphQLList(PostType),
            async resolve(parent, args) {
                const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${parent.id}`);
                return result.data;
            }
        }   
    })
})

const AddressType = new GraphQLObjectType({
    name: 'Addresss',
    fields: () => ({
        street: { type: GraphQLString },
        suite: { type: GraphQLString },
        city: { type: GraphQLString },
        zipcode: { type: GraphQLString },
        geo: { type: GeoLocationType }
    })
})


const GeoLocationType = new GraphQLObjectType({
    name: 'GeoLocation',
    fields: () => ({
        lat: { type: GraphQLString },
        lng: { type: GraphQLString },
    })
})



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
                const user = { ...result.data, avatar: `https://i.pravatar.cc/150?u=${Math.random()}` }
                return user;
            }
        }
    })
})



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
                console.log('I am fired USER')
                const user = { ...result.data, avatar: `https://i.pravatar.cc/150?u=${Math.random()}` }
                return user;
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
                const response = result.data.map(r => ({ ...r, avatar: `https://i.pravatar.cc/150?u=${Math.random()}` }))
                return response;
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

