import mongoose from "mongoose";

export default (DBLogin) =>
{
    mongoose.connect(`mongodb+srv://${DBLogin}@mycluster.ehxqa.mongodb.net/ChatDB?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

    const dbConnection = mongoose.connection;
    dbConnection.on('error', err => console.log(`Connection error: ${err}`));
    dbConnection.once('open', () => console.log('Connected to DB'));
}