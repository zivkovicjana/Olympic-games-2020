import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Pojedinac = new Schema(
    {
        imeIPrezime: {
            type: String
        },
        pol: {
            type: String
        },
        sport: {
            type: String
        },
        discipline: {
            type: Array
        },
        drzava: {
            type: String
        },
        medalja: {
            type: String
        },
        rezultat: {
            type: String
        }
    }
);

export default mongoose.model('Pojedinac', Pojedinac, 'pojedinci');