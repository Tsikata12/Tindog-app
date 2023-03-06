import { dogs } from "./data";
import Dogs from "./dogs"



const dogsArray = [0, 1, 2] 

let dog 

render()

function render() {

    if (dogsArray.length !== 0){
        dog = nextTindog()
        document.getElementById("display").innerHTML = dog.tindogHtml()
    }

}

function nextTindog() {
    const profileDog = dogs[dogsArray.pop()]
    return dogsArray.length > 0 ? new Dogs(profileDog) : new Dogs(dogs[0])
}


document.addEventListener("click", function(e) {
    if (e.target.dataset.like){
        liked()
    } else if(e.target.dataset.dislike) {
        disLiked()
    }
})


function disLiked(){
        document.getElementById("dislike").classList.remove("display")
        dog.hasBeenSwiped = true
        dog.hasBeenLiked = true
    
        setTimeout(()=> { 
            dog.hasBeenLiked || dog.hasBeenSwiped ? render() : null
        }, 2000)


}

function liked(){
    document.getElementById("like").classList.remove("display")
    dog.hasBeenSwiped = true
    setTimeout(()=> { 
        dog.hasBeenSwiped ? render() : null
    }, 2000)
}