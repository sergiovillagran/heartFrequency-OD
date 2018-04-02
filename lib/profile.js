'use strict'

const ProfileModel = require('./../models/profile')

module.exports = function setupProfileModel(){
    async function create(profile){
        let nProfile = new ProfileModel(profile)
        return await nProfile.save()
    }

    async function findAll(){
        return await ProfileModel.find({}).lean().excec()
    }
}