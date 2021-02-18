const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        address: { type: AddressType }
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



module.exports = { UserType };