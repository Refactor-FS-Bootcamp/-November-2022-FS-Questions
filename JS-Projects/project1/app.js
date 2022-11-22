console.log('Welcome everyone')

// post - here all data -list 
//name,profle,post,desc


//userauth - data

const postDataBase = [
    {
      name:'AnilKumar',
      profile:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
      post:'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      desc:'Trip started'
    },
    {
        name:'Madhu',
        profile:'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
        post:'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        desc:'Trip started'
    },
    {
        name:'Rohith',
        profile:'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
        post:'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        desc:'Trip started'
    },
    {
        name:'Ajith',
        profile:'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
        post:'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        desc:'Trip started'
    }
]

const users = [
    {
        userName:"Hari",
        password:123
    }
]

function userAuth(user,pass){
    if(user === users[0].userName  && pass === users[0].password  ){
      

const posts = document.getElementById('posts')

postDataBase.forEach(function(post){

    posts.innerHTML +=`
    <div class="post">
    <div class='user'>
    <h1>${post.name}</h1>
    <img src=${post.profile} alt="profile">
    </div>
    
    <img class='postpic' src=${post.post} alt="post">
    <p>${post.desc}</p>
    </div>`
})

    }else{
      alert('username and password are not mateched')
    }
}

const userN = prompt('Enter your Name')
const PassW = Number(prompt('Password'))

console.log(userN,PassW)
userAuth(userN,PassW)

