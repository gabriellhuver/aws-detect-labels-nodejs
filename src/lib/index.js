const aws = require('aws-sdk')
const fs = require('fs')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
aws.config.accessKeyId = process.env.AMAZON_KEY_ID
aws.config.secretAccessKey = process.env.AMAZON_SECRET_KEY
aws.config.region = "us-west-2"
const rekognition = new aws.Rekognition();

exports.detect = function (file) {
    return new Promise((resolve, reject) => {
        rekognition.detectLabels({
            Image: {
                Bytes: fs.readFileSync(file)
            }
        }, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
