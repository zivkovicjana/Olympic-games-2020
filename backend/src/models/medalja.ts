import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Medalja = new Schema(
    {
        rang: {
            type: Number
        },
        zemlja: {
            type: String
        },
        brZlatnih: {
            type: Number
        },
        brSrebrnih: {
            type: Number
        },
        brBronzanih: {
            type: Number
        },
        ukupno: {
            type: Number
        }
    }
);

export default mongoose.model('Medalja', Medalja, 'medalje');