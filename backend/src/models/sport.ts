import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Sport = new Schema(
    {
        sport: {
            type: String
        },
        vrsta: {
            type: String
        }
    }
);

export default mongoose.model('Sport', Sport, 'sportovi');