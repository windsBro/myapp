const  withLess  =require('@zeit/next-less')
// const withSize = require('next/size')

// module.exports = withSize(
//     withLess({

//     })
// )

module.exports = withLess({
    cssModules:true,
    cssLoaderOptions: {
        importLoaders:1,
        localIdentName: "[local]__[hash:base64:5]"
    }
})
