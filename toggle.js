//Tentativa 3 - Correta

var listButtons = document.querySelectorAll('.div-btn')

listButtons.forEach(function(btn){
    btn.addEventListener('click', function(){

        var eventClass = btn.getAttribute('data-target')
        var eventContent = document.getElementsByName(eventClass)[0]

        var targetId = btn.getAttribute('data-target')
        var targetContent = document.getElementById(targetId)

        if(targetContent.style.display === 'block'){
            targetContent.style.display = 'none'
            eventContent.style.transform = 'rotate(100turn)'
        }else{
            targetContent.style.display = 'block'
            eventContent.style.transform = 'rotate(0.5turn)'
        }
    })
})