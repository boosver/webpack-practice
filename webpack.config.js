module.exports = {
    //打包入口从哪个文件开始打包
    entry: './src/main.js',
    //制定打包文件的目录
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    }

}