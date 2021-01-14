let card1 =  ``

function getCard(data) {
    let meco = $('');
    meco.forEach(temp => {
        let zhongdian = temp.isZhongdian ? '<span class="tag tag-background-orange">重点</span>' : ''
    let card = `<div class="card">
            <div class="card-header">
            <div class="card-header-left">
            ${zhongdian}
            <span class="card-header-left-text">VNFLcmWebsite</span>
            </div>
            <div class="card-header-right">
            <div class="progress-title">${temp.laevl}目标L3</div>
            <div class="progress-content">
            <div class="progress-wrapper">
            <div class="progress-inner" style="width: 43%;"></div>
            </div>
            <div class="progress-count">43%</div>
            </div>
            </div>
            </div>
            <div class="card-author">
            <img class="avatar" src="./avatar.jpeg" alt="">
            <span class="name">杨连刚</span>
            <span class="tag tag-info">30K</span>
        <span class="tag tag-warning">12-3截止</span>
        <span class="tag tag-warning">link</span>
            </div>
            <div class="card-content">
            微服务描述微服务描述微服务描述微服务描述微服务描述微服务描述微服务描述微服务描述微服务描述微服务描述微服务描述
            </div>
            </div>`
    })
    if (true) {

    }

}