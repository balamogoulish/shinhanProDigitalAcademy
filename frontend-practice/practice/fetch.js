//웹에서 데이터를 가져오거나 보내기 위한 JS 내장 함수

//1. function 만들기
// - username을 입력받아서 다음 정보를 조회하는 함수
// - user의 정보, 쓴 게시글, 쓴 댓글, todo를 하나의 객체로 만들어 출력
const baseURL = 'https://jsonplaceholder.typicode.com';
let user = {}
function userInfo(username){
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