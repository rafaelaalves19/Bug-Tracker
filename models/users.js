const db = require('../db')();
const COLLECTION = 'users';
const nodemailer = require("nodemailer");





module.exports = () => {

    const get = async (email = null) => {
        try{
        if(!email){
            const user = await db.get(COLLECTION);
            return {user};
        }
        const user = await db.get(COLLECTION, {email});
        return {user};
    } catch(err){
        console.log(err);
        return{
            error: err,
        } ;


    }
    };

    const add = async(name, email, usertype, key) => {
        const emailFrom = process.env.EMAIL;
        const passwordFrom = process.env.PASSWORD;
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: emailFrom, // generated ethereal user
              pass: passwordFrom // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false,
            },
          });
        
          
          let info = await transporter.sendMail({
            from: 'bugtracker123@gmail.com',  // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Email created succesfully!", // plain text body
            html: "<b>Hello world?</b>", // html body
          });
        
          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
        
        
        if (!name || !email || !usertype || !key) {
            return {
                error: "PLEASE TYPE ALL THE INFORMATIONS REQUIRED",
            };
        }
        try {
            const user = await db.get(COLLECTION, {email});

            if (user.length > 0) {
                return {
                    result: ">>> EXISTING USER <<<",
                };
            }

        const results = await db.add(COLLECTION, {
            name: name,
            email: email,
            usertype: usertype,
            key: key,
        });

        return {results};
    } catch(err){
        console.log(err);
        return{
            error: err,
        } ;


    }
    };


    const getByKey = async (key) => {
        if(!key){
            console.log('01: no key added')
            return null;
        }

        try {
        const users = await db.get(COLLECTION, {key})

        if(users.length !== 1){
            console.log('02: wrong key');
        }
        return users[0];
    } catch(err){
        console.log(err);
        return{
            error: err,
        } ;


    }
    }


    return {
        get,
        add,
        getByKey
    };
};