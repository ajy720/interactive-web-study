const path = require('path')
// const widthBundelAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true'
// })

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src', 'styles')],
    },
}