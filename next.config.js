const path = require('path')
const withImages = require('next-images')

// const widthBundelAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true'
// })

module.exports = withImages({
    sassOptions: {
        includePaths: [path.join(__dirname, 'src', 'styles')],
    },
})