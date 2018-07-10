document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

//get Local text file data
function getText(){
    fetch('test.txt')
    .then(response => response.text())
    .then(data => document.getElementById('output').innerHTML = data)
    .catch(err => console.log(err));
};

// get local JSON data
function getJson(){
    fetch('posts.json')
    .then(response => response.json())
    .then(data => {
        let output = '<ol>';
        data.forEach(post => output += `<li>${post.title}</li>`);
        output += '</ol>';
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
};

// Get API Data
function getExternal(){
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        let output = '<ul>';
        data.forEach(user => output += `<li>${user.login}</li>`);
        output += '</ul>';
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
};