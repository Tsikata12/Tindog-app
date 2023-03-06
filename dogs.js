import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

class Dogs{
    constructor(data){
        Object.assign(this, data)
    }

    tindogHtml() {

        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this

        return `
        <div class="content">
            <img class="like-img display" id="like" src="images/like-image.png">
            <img class="dislike-img display" id="dislike" src="images/nope-image.png">
            <img class="profile" src="${avatar}">
            <div class="profile-info">
                <h3>${name}, ${age}</h3>
                <p>${bio}</p>
            </div>
      </div>
      <div class="footer">
        <img data-dislike="${uuidv4()}" class="btn dislike" src="images/dislike.png">
        <img data-like="${uuidv4()}" class="btn like" src="images/like.png">
      </div>
      `
    }
}

export default Dogs