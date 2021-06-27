let buildPost = (img) => {
    let post = `
    <a href="../article">
        <section class="thumbnail">
            <img class="mdThumb" src="../src/img/${img}.png">
            <div class="mdThumbInfo">
                <span class="leftThumbInfo">
                    <span class="mdUsername">2435 디테계</span>
                    <span class="mdUploadTime">10분전</span>
                </span>
                <span class="mdTarget">목표수량 5/10</span>
            </div>
            <div class="mdDescription">
                팔아요
            </div>
            <div class="tags">
                <span>
                    <span class="leftTags">
                        <img class="HeartICO" src="../src/img/heartfilled.svg">
                        <span class="mdHeart">8</span>
                    </span>
                    <span>
                        <img class="ChatICO" src="../src/img/chat.svg">
                        <span class="mdChat">13</span>
                    </span>
                </span>
                
                <span class="mdPrice">13,000원</span>
            </div>
        </section>
    </a>
    `
    return post;
}
let buildDET = (img) => {
    
}
let det = `
<section class="detail">
    <img class="mdIMG" src="../img/${1}.png">
    <div class="mdInfo">
        <span class="leftThumbInfo">
            <span class="mdUsername">2435 디테계</span>
            <span class="mdUploadTime">10분전</span>
        </span>
        <span class="mdTarget">목표수량 5/10</span>
    </div>
    <hr>
</section>`

let paragraph = () => {
    document.getElementById('paragraph').innerHTML = det;
}

window.addEventListener('DOMContentLoaded', (event) => {
    let asdf='';
    for(let i = 0; i < 5;  i++){
        let random1 = Math.floor(Math.random()*1000)%6;
        let random2 = Math.floor(Math.random()*1000)%6;
        let random3 = Math.floor(Math.random()*1000)%6;
        asdf += `<div>${buildPost(random1)}${buildPost(random2)}${buildPost(random3)}</div><br>`
    }
    document.getElementById('paragraph').innerHTML = asdf;
});