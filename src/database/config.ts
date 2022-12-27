import mongoose from 'mongoose';


export const dbConnection = async () => {

    const uri: String | undefined = process.env.MONGODB_CNN

    const options: object = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
    try {

        mongoose.connect(uri as string, options, () => {
            console.log('DB online')
        })

    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to MongoDB');
    }


}