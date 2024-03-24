function handleFormSubmit(event){
    event.preventDefault();
    const expense=event.target.expense.value;
    const description=event.target.description.value;
    const dropdown=event.target.dropdown.value;
    const userDetails ={
        expense:expense,
        description:description,
        dropdown:dropdown
    }
    localStorage.setItem(userDetails.description,JSON.stringify(userDetails))
    showUserOnScreen(userDetails)
}
function showUserOnScreen(userDetails){
    const parentList=document.getElementById('listItem')
    const newli=document.createElement('li')
    newli.textContent=`${userDetails.expense} - ${userDetails.description} - ${userDetails.dropdown} `;

    const deletebtn=document.createElement('button')
    deletebtn.textContent='delete Expense';

    deletebtn.addEventListener('click',function(){
        localStorage.removeItem(userDetails.description)
        newli.remove();
    });
 
    const editbtn=document.createElement('input');
    editbtn.type='button'; 
    editbtn.value='edit Expense';
    editbtn.onclick = () => { 
        localStorage.removeItem(userDetails.description);
        parentList.removeChild(newli);
        document.getElementById('expense').value = userDetails.expense; 
        document.getElementById('description').value = userDetails.description;
        document.getElementById('dropdown').value = userDetails.dropdown;
    };

    newli.appendChild(deletebtn);
    newli.appendChild(editbtn);
    parentList.appendChild(newli);
}



