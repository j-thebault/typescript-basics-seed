module.exports = {
    //main entry point
    entry : './src/app.ts',
    //output for the entries
    output : {
        filename : 'app.js', //because we have only on entry one file name
        path: __dirname + './dist' //__dirname is provided by nodejs as the execution directory path
    },
    resolve : { 
        //extension declared here are used for resolve import statements in our code. ie import lodash will look for lodash.ts or lodash.ts 
        extensions: ['.ts','.js'] 
    },
    //module section configure the packaging options for our bundles
    //what will be packaged and how it will be packaged
    module : {
        rules:[
            {test: /\.ts$/, use : 'awesome-typescript-loader'} // all files ending by .ts will be packaged with awesome-typescript-loader
        ]
    }, 
    devServer: {
        port: 3000
    } 
};