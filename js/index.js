
$(function(){
    let type = document.querySelectorAll(".type")

    let typeArr = Array.from(type)
    typeArr.map((iteam)=>{
        let counterNumber = 0
        console.log(iteam.dataset.text)

        function typjs(){
            iteam.innerHTML += iteam.dataset.text.charAt(counterNumber)
            counterNumber++
            if(counterNumber > iteam.dataset.text.length){
                counterNumber = 0
                iteam.innerHTML = ""
            }
        }

        let stop = setInterval(function(){
            typjs()
        }, 400)

    })


//venubox

    let body = document.querySelector("body")
    let showin = document.querySelector(".showin")
    
    body.addEventListener("click", function(e){
        console.log(e.target.dataset.url)
        console.log(e.target.classList[0])
        if(e.target.classList[0] == "imgshow"){
            showin.classList.add("showin2")
            showin.innerHTML = `<img src="${e.target.dataset.url}" alt="image">
            <button class="close"><i class="fa-solid fa-xmark"></i></button>`
        }
        else{
            showin.classList.remove("showin2")
            showin.innerHTML = ""
        }
        
    })

    //counter

    let counter = document.querySelectorAll(".counter")
    
    let counterArr = Array.from(counter)
    counterArr.map((iteam)=>{
        let counterNumber = 0
        let counterStop = iteam.innerHTML
        console.log(iteam.innerHTML)

        function counterUp(){
            counterNumber++
            iteam.innerHTML = counterNumber

            if(counterNumber == counterStop){
                clearInterval(stop)
            }

        }

        let stop = setInterval(function(){
            counterUp()
        }, 200)

    })

    //navbar
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 300){
            $('.navbar').addClass('bg');
        }
        else{
            $('.navbar').removeClass('bg');
        }
        
    });



});



