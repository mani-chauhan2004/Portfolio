import dotenv from 'dotenv'

dotenv.config();

type configDataType = {
    mongoURI: string | undefined;
}

const configData: configDataType = {
    mongoURI: process.env.MONGO_URI,
}

export default configData;