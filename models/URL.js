const knex = require('../database/connection');

exports.all = () => {
    return knex
        .select('*')
        .from('urls');
}

exports.findByUUID = (uuid) => {
    return knex
        .select('*')
        .from('urls')
        .where('short_uuid', uuid)
        .first();
}

exports.updateVisits = (id, visits) => {
    return knex('urls')
        .update('visits', visits)
        .where('id', id);
}


exports.create = (url) => {
    return knex('urls')
        .insert({
            original_url: url.original_url,
            short_uuid: url.short_uuid
        })
}
