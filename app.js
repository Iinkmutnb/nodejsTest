var fs=require('fs')
var readMe=fs.readFileSync('text.txt','utf8')
console.log(readMe)
fs.mkdir('project2',function(){
fs.writeFileSync('./project2/HelloNodeJs.txt',readMe)
});
