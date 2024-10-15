/**
<!-- 
baseUrl = https://jsonplaceholder.typicode.com/
user리스트: /users
특정 user가 쓴 게시글 /users/<user_id>/posts
특정 user가 쓴 댓글 /users/<user_id>/comments
특정 user의 todo /users/<user_id>/todos
-->
<!-- 
여기서 function은 async function도 무방함.

1. function getUserByUsername(username) 함수 정의
    - /users에 fetch 
        - <fetch('https://jsonplaceholder.typicode.com/users')
    - 데이터를 받아서 입력받은 username과 같은 user object를 출력

2. function getUserPostByUserId(userId) 함수 정의
    - /users/${userId}/posts에 fetch
    - 데이터를 받아서 해당하는 post(배열) 출력

3. function getUserInfoByUsername(username) 함수 정의
    - username을 받아서 user의 posts, 
        comments, todo, user object모두 출력
 -->
 */

 /**
  * 1. function getUserByUsername(username) 함수 정의
    - /users에 fetch 
        - <fetch('https://jsonplaceholder.typicode.com/users')
    - 데이터를 받아서 입력받은 username과 같은 user object를 출력
  */

const baseURL = 'https://jsonplaceholder.typicode.com';
let user = {}
function getUserByUsername(username){
    fetch(`${baseURL}/users?username=${username}`)
        .then((response)=>response.json())
        .then((data)=>{
            const userId = data[0].id;
            user.userInfo = data[0];
            const result = Promise.all(
                [getUserPostByUserId(userId), getUserCommentsByUserId(userId), getUserTodosByUserId(userId)]
            ).then(([posts, comments, todos])=>{
                user.posts = posts;
                user.comments = comments;
                user.todos = todos;
                returnUserInfo();
            })
        })
    console.log(user);
}
function getUserPostByUserId(userId){
    return fetch(`${baseURL}/users/${userId}/posts`)
        .then((response)=>response.json())
        .then((data)=>{
            return data;
        })
}
function getUserCommentsByUserId(userId){
    return fetch(`${baseURL}/users/${userId}/comments`)
    .then((response)=>response.json())
    .then((data)=>{
        return data;
    })
}
function getUserTodosByUserId(userId){
    return fetch(`${baseURL}/users/${userId}/todos`)
        .then((response)=>response.json())
        .then((data)=>{
            return data;
        })
}
function returnUserInfo(){
    const rootElem = document.getElementById('root');
    rootElem.innerHTML = `
        <p>userId: ${user.userInfo.id}</p>
        <p>name: ${user.userInfo.name}</p>
        <p>comments_cnt: ${user.comments.length}</p>
        <p>posts_cnt: ${user.posts.length}</p>
        <p>todos_cnt: ${user.todos.length}</p>`
}
const username = prompt('이름 입력')
getUserByUsername(username)