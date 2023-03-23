const posts = [{title:'POST1',lastTime: 'Thu Mar 23 2023 20:55:09 GMT+0530 (India Standard Time)'}]

function createpost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({title:'POST2'})
            updateLastUserActivityTime()
            resolve();
        },1000)
    })
}
function updateLastUserActivityTime(){

	return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.lastTime = new Date();
            resolve(posts.lastTime)
        },1000)
    })
}
function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop()
        })
    })
}

 function userUpdatePost(){
    Promise.all([createpost(), updateLastUserActivityTime()]).then(([createpostresolve, updateLastUserActivityTimeresolve])=>{
       
        console.log("after update",updateLastUserActivityTimeresolve)
        
})

 }

userUpdatePost()
console.log("before update",posts[0].lastTime)