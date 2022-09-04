import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Delegat = new Schema(
    {
        username: {
            type: String
        },
        ime: {
            type: String
        },
        prezime: {
            type: String
        },
        brojDelegiranja: {
            type: Number
        },
        odobren: {
            type: String
        }
    }
);

export default mongoose.model('Delegat', Delegat, 'delegati');