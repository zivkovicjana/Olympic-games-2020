import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Rekord = new Schema(
    {
        godina: {
            type: Number
        },
        mesto: {
            type: String
        },
        disciplina: {
            type: String
        },
        takmicar: {
            type: String
        },
        pol: {
            type: String
        },
        drzava: {
            type: String
        },
        vremeIliDuzina: {
            type: String
        }
    }
);

export default mongoose.model('Rekord', Rekord, 'rekordi');