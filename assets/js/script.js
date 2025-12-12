const mode = document.getElementById('mode_icon');


mode.addEventListener('click',() =>{
    const form = document.getElementById("login_form")
    if(mode.classList.contains("bi-moon-stars-fill")){
        mode.classList.remove("bi-moon-stars-fill");
        mode.classList.add("bi-brightness-high-fill");

        form.classList.add('dark');

        
       

        return;
    }

    mode.classList.add("bi-moon-stars-fill");
    mode.classList.remove("bi-brightness-high-fill");
    form.classList.remove('dark');
   
});


