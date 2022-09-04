import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Zemlja = new Schema(
    {
        zastava: {
            type: String
        },
        ime: {
            type: String
        },
        brSportista: {
            type: Number
        }
    }
);

export default mongoose.model('Zemlja', Zemlja, 'zemlje');