var posts=[
    {title:"post one",body:"body of post 1"},
    {title:"post two",body:"body of post 2"}
];

function getPosts(){
    var output;
    setTimeout(()=>{
        posts.forEach( (post) => {
            output+= `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}
//without using promise
// function createPost(post,callback){
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);   
// }

// with using promise
function createPost(post){
    return new Promise( (resolve,reject) => {
        posts.push(post);

        const error = false;
        if(!error){
            resolve();
        }else{
            reject("error occured");
        }
    })
}
// createPost({title:"post three",body:"body of post 3"}).then(getPosts)
//                                                     .catch( (err) => { console.log(err)});

// what is there are multiple promises, using "then" for multiple time will not be efficent
// therefore below suntax is followed

var promise1 = Promise.resolve("hi this is shiva");
var promise2 = 10000;
var promise3 = new Promise((resolve,reject) => {
    resolve("bye bye");
});

Promise.all([promise1,promise2,promise3,createPost({title:"post three",body:"body of post 3"})]).then((value) => {
    console.log(value);
}).catch( err => {
    console.log(err+ "error occured");
})
