const db = require('../db')();
const COLLECTION = 'projects';


module.exports = () => {

    

    const get = async (slug = null) => {
        
        if(!slug){
            try{
            const slug = await db.get(COLLECTION);
            return {slug};
        } catch(err){
            console.log(err);
            return{
                error: err,
            };
        }
    }

            try {
            const slug = await db.get(COLLECTION, {slug});
            return {slug};
        } catch(err){
            console.log(err);
            return{
                error: err,
            };
        }
        
    
    };

    const add = async(slug, name, description) => {
        if (!slug || !name || !description) {
            return {
                error: "PLEASE TYPE ALL THE INFORMATIONS REQUIRED",
            };
        }
        try {

            const slugN = await db.get(COLLECTION, {slug});

            if(slugN.lenght > 0){
                return{
                    result:  ">>> EXISTING PROJECT <<<",
                };
            }
            
        const results = await db.add(COLLECTION, {
            slug: slug,
            name: name,
            description: description,
        });

        return {results};
    } catch(err){
        console.log(err);
        return{
            error: err,
        };
    }
    };


    return {
        get,
        add,
    };
};