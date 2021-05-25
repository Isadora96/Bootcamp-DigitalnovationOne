const divFaq = document.querySelectorAll(".questions")

divFaq.forEach(function(article){
    const divTitle = article.querySelector(".question-title")
    
    divTitle.addEventListener("click", function(){
       
        divFaq.forEach(function(question){
            
            if(question !== article){
                question.classList.remove('show-text');
            }

        });

        article.classList.toggle('show-text');
    });
});
