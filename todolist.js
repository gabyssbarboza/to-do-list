var add = document.querySelector(".content-add");

function createLi(element){
    return document.createElement(element)
}

function appendElement(element, child){
    return element.appendChild(child)
}

function removeElement(){
    // this.parentNode.removeChild(this)
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);
    // ul.parentNode.removeChild(listItem);
}

window.addEventListener("keydown", function(event) {
    if(event.key == "Enter"){
        todoList();    
    }
   console.log(event.key)
  }, true);
  

add.addEventListener('click', todoList); 


function todoList(){
    const input = document.querySelector(".content-value");
    var inputValue = input.value;

    if(inputValue.length == 0){
        document.querySelector(".content-advice").classList.add("active")
    }else{
    

    var li = createLi('li');
    li.className= "content-li"
    var close = createLi('span');
    close.innerText = 'X'
    close.className = "content-close"
    li.innerText = inputValue;
    var ul = document.querySelector(".content-listToDo")
    close.addEventListener('click', removeElement)
    if(inputValue.length > 0){
        document.querySelector('.content-value').value = ''
    }
    appendElement(li, close)
    appendElement(ul, li)
}
}