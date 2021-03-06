
module.exports = (router, knex) =>{
    // Return shippings regions
    router.get("/shipping/region", (req, res) =>{
        knex
        .select('*')
        .from('shipping_region')
        .then((data) =>{
            res.send(data);
        }).catch((err) =>{
            console.log(err);
        })
    })

    // Return shippings regions
    router.get("/shipping/regions/:shipping_region_id", (req, res) =>{
        let shipping_region_id = req.params.shipping_region_id;
        knex
        .select('*')
        .from('shipping')
        .where('shipping_region_id', shipping_region_id)
        .then((data) =>{
            res.send(data);
        }).catch((err) =>{
            console.log(err);
        })
    })
}