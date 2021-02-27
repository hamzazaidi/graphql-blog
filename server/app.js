const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema');
const cors = require('cors')
const app = express();
const path = require('path');

app.use(cors())

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(4000, () => {
    console.log("Now listening on port 4000");
});
