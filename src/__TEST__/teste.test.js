const { detect } = require('../lib/index')
const path = require('path')


async function run() {
    try {
        const result = await detect(path.join(__dirname, '../../images/image.jpg'))
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
run()