import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Korisnik = new Schema(
    {
        username: {
            type: String
        },
        password: {
            type: String
        },
        ime: {
            type: String
        },
        prezime: {
            type: String
        },
        drzava: {
            type: String
        },
        mail: {
            type: String
        },
        tip: {
            type: String
        },
        odobren: {
            type: String
        }
    }
);

export default mongoose.model('Korisnik', Korisnik, 'korisnici');