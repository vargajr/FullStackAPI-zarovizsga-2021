// 1. Feladat: pótold a service modellt.
const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    since: {
        type: Number,
        required: true
    },
    street: {
        type: String,
        default: 'not specified',
    },
    city: {
        type: String,
        default: 'not specified',
    },
    country: {
        type: String,
        default: 'not specified',
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('service', ServiceSchema);

/*
export class Service {
  _id: string = '';
  name: string = '';
  since: number = 0;
  street?: string = '';
  city?: string = '';
  country?: string = '';
  active?: boolean = true;
}
*/