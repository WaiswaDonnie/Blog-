const textInput = document.getElementById('textInput');
const postBtn = document.getElementById('postbtn');
const section = document.querySelector('section');
const blogTitle = document.getElementById('blogTitle');
const deleteBtn = document.getElementById('deleteBtn');
const updateBtn =  document.getElementById('updateBtn');


function createPost(){
//Todo => We need to create a new article,paragraph,header, then after append to the section.
const newArticle =  document.createElement('article');
const newHeader = document.createElement('h3');
const newParagraph =  document.createElement('p');

const newDeletebtn = document.createElement('button');
const newUpdateBtn = document.createElement('button');
newDeletebtn.id = "deleteBtn";
newUpdateBtn.id = "updateBtn";
newDeletebtn.classList.add("btn","btn-sm","btn-danger","float-right","mr-2","mt-3")
newUpdateBtn.classList.add("btn","btn-sm","btn-warning","float-right","mr-2","mt-3")


newDeletebtn.textContent= 'Delete';
newUpdateBtn.textContent = 'Update';

newHeader.textContent = blogTitle.value;
newParagraph.textContent = textInput.value;

newArticle.appendChild(newHeader);
newArticle.appendChild(newParagraph);
newArticle.appendChild(newDeletebtn)
newArticle.appendChild(newUpdateBtn)


return newArticle;

}

postBtn.addEventListener('click', e=>{
    e.preventDefault();

    const newPost =  createPost();
    
    section.appendChild(newPost);


})
