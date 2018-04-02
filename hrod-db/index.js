'use strict'

import { Types, Mongoose } from 'mongoose';

const profile = new mongoose.Schema({
    age: Number,
    diseases: [String],
    startTime: Date,
    duration: Date,
    file: [Types.ObjectId]
})

module.exports = Mongoose.model('profile', profile)