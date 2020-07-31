const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const schema = require('./schema/schema')
const cors = require('cors')

const app = express();

//Allow cross-origin requests
app.use(cors())


//connect to db
const DB = 'mongodb+srv://levani:levani123@cluster0.ynwe4.mongodb.net/LearnGraphQL?retryWrites=true&w=majority';
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Now listening for requests on port 4000')
});