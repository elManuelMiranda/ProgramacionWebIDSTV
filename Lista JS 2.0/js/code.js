let cont = 0;

function add_li()
{
    let newLi = document.getElementById("new_li").value;
    if(newLi.length>0)
    {
        const li = document.createElement('li');
        li.id = cont;
        li.innerHTML = newLi + "<button onClick='delete_li(this)'>🗑️</button><button onClick='edit_li(this)'>✏️</button>";
        document.getElementById("unorderedList").appendChild(li);
        document.getElementById("new_li").value = '';
        cont++;
    }
    return false;
}
function delete_li(element)
{
    let id = element.parentNode.getAttribute("id");
    node = document.getElementById(id);
    node.parentNode.removeChild(node);
}
function edit_li(element)
{
    let editLi = document.getElementById("new_li").value;
    let id = element.parentNode.getAttribute("id");
    node = document.getElementById(id);
    if (editLi.length>0) {
        node.innerHTML = editLi + "<button onClick='delete_li(this)'>🗑️</button><button onClick='edit_li(this)'>✏️</button>";   
    }
}