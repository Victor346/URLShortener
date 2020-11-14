const nanoid = require('nanoid');

const URL = require('../models/URL');

const customNanoid = nanoid.customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 15);

exports.create = (req, res) => {
    let original_url = req.body.url;
    let short_uuid = customNanoid();

    URL.create({ original_url, short_uuid }).then((id) => {
        res.json({ short_url: `${req.get('host')}/${short_uuid}`})
    })
}

exports.redirect = (req, res) => {
    let uuid = req.params.uuid;

    URL.findByUUID(uuid).then((url) => {
        URL.updateVisits(url.id, (url.visits + 1)).then(() => {
            res.redirect(url.original_url);
        })
        
    });
}

exports.info = (req, res) => {
    let uuid = req.params.uuid;

    URL.findByUUID(uuid).then((url) => {
        res.render('url/url_info', { 
            original_url: url.original_url, 
            visits: url.visits, 
            short_url: `${req.get('host')}/${url.short_uuid}`
        });
    });
    
}