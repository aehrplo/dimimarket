let post = `
<section>
    <img class="mdThumb" src="../img/ㅁㄹㄴㅇ.png">
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
                <img class="HeartICO" src="../img/heartfilled.svg">
                <span class="mdHeart">8</span>
            </span>
            <span>
                <img class="ChatICO" src="../img/chat.svg">
                <span class="mdChat">13</span>
            </span>
        </span>
        
        <span class="mdPrice">13,000원</span>
    </div>
</section>
`

window.addEventListener('DOMContentLoaded', (event) => {
    let asdf='';
    for(let i = 0; i < 5;  i++){
        asdf += `<div>${post}${post}</div><br>`
    }
    document.getElementById('paragraph').innerHTML = asdf;
});