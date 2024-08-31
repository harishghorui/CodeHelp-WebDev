const mongoose = require('mongoose');
const {transporter} = require('../configs/nodemailer')
require('dotenv').config()

const fileSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        fileUrl:{
            type:String
        },
        tags:{
            type:String
        },
        email:{
            type:String
        }
    }
);

// post middleware
fileSchema.post("save", async function(doc) {
    console.log("doc: ", doc);

    // for this useCase: set the environment variable to disable SSL certificate
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'

    try {
        const info = await transporter.sendMail(
            {
                from: '"Admin" <admin@company.com>',
                to: doc.email,
                subject: "New File Uploaded in Cloudinary",
                html: `<h2>Hello World</h2> <p>File Uploaded</p>`
            }
        )

        console.log("info: ", info);

    } catch (err) {
        console.log("Nodemailer Failed: ", err);
    }
})

const File = mongoose.model("File", fileSchema);
module.exports = File;