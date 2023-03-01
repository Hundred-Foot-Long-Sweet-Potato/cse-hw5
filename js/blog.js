//All variables required
const blogCreate = document.getElementById("postCreate");
blogCreate.addEventListener("click", blogPopUp);
const blogDia = document.getElementById("blogCreateDialog");
const blogConfirm = document.getElementById("blogCreate");
blogConfirm.addEventListener("click",createBlogPost);

//Javascript array with all blogs
let blogs = [];
let counter = 0;

//Pop up to get details
function blogPopUp()
{
    blogDia.showModal();
}

//Creates the blog post
function createBlogPost()
{
    //W3School Code example for html template
    //Simply gets the template -> creates a clone -> adds clone to document (Always [0] here for create)
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    //Fill details in template
    clon.getElementById("blogTitle").innerHTML = document.getElementById("diaTitle").value;
    clon.getElementById("blogDate").innerHTML = document.getElementById("diaDate").value;
    clon.getElementById("blogSummary").innerHTML = document.getElementById("diaSummary").value;
    //Link this blog posts button with itself
    let blogNum = counter;
    blogs.push(clon);
    counter++;
    clon.getElementById("blogDelete").addEventListener("click",()=>{document.body.removeChild(clon);});
    //Append 
    document.body.appendChild(clon);
}

function deleteBlogPost(target)
{
    //Remove the section in question
    document.getElementsByTagName("section")[target].remove();
    //Update all blogNums
    for (let i = 0; i < blogs.length;i++)
    {   
        if (i < target) continue;
        blogs[i].blogNum--;
    }
    //Console.log
    for (let i = 0; i < blogs.length;i++)
    {   
        console.log(blogs[i].blogNum);
    }
}