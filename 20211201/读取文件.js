const fs = require('fs');
// const { resolve } = require('path/posix');

// fs.readFile('./resource/111.md',(err,data1)=>{
//   fs.readFile('./resource/2222.md',(err,data2)=>{
//     fs.readFile('./resource/3333.md',(err,data3)=>{
//         let result = data1+data2+data3;
//         console.log(result.toString())
//     })
//   })
// })

const p  =  new Promise((resolve,reject)=>{
  fs.readFile('./resource/111.md',(err,data)=>{
    resolve(data);
  })
})



p.then(value=>{
    return new Promise((resolve,reject)=>{
      fs.readFile('./resource/2222.md',(err,data)=>{
          resolve([value,data])
      })
    })
}).then(value =>{
  return new Promise((resolve,reject)=>{
    fs.readFile('./resource/3333.md',(err,data)=>{
        value.push(data);
        resolve(value)
    })
  })
}).then(value =>{
  console.log(value.join('\r\n'))
})