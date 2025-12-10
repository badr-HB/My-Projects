let open = false

function ShowSideBar(){
    if(!open){
        document.querySelector('.sidebar').classList.toggle("active");
    }
    else{
        document.querySelector('.sidebar').classList.remove('active');
    }
    
}