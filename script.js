$(function(){
  let data = [
    {
      id: 1,
      group: 'NFVO',
      name: '重构规划名称',
      authorName: '杨连刚',
      authorUrl: './avatar.jpeg',
      tag1: '30K',
      tag2: '12-3截止',
      tag3: 'Pinddig',
      desc: '规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述',
    },
    {
      id: 2,
      group: 'NFVO',
      name: '重构规划名称',
      authorName: '杨连刚',
      authorUrl: './avatar.jpeg',
      tag1: '30K',


      tag2: '12-3截止',
      tag3: 'Pinddig',
      desc: '我爱我家',
    }
  ]
  let html = getCardHtml(data)
  $('#access .content-item-title span').text(data.length)
  $('#access .content-item-body').html(html)
})

function getCardHtml (data) {
  let html = ''
  data.forEach(item => {
    let card = `<div class="card">
      <div class="card-header">
        <div class="card-header-left">
        <span class="tag tag-blue">${item.group}</span>
        <span class="card-header-left-text">${item.name}</span>
      </div>  
      </div>
      <div class="card-author">
        <img class="avatar" src="${item.authorUrl}" alt="">
        <span class="name">${item.authorName}</span>
        <span class="tag tag-info">${item.tag1}</span>
        <span class="tag tag-warning">${item.tag2}</span>
        <span class="tag tag-error">${item.tag3}</span>
      </div>
      <div class="card-content">
        ${item.desc}
      </div>
    </div>`
    html += card
  })
  return html
}

function getHtmlByType() {
  // 定义三种不同类型的card
  // 1. 存在vnfo的card
  let card1 = `<div class="card">
              <div class="card-header-left">
                <span class="tag tag-blue">NFVO</span>
                <span class="card-header-left-text">重构规划名称</span>
              </div>
              <div class="card-author">
                <img class="avatar" src="./avatar.jpeg" alt="">
                <span class="name">杨连刚</span>
                <span class="tag tag-info">30K</span>
                <span class="tag tag-warning">12-3截止</span>
<!--                <span class="tag tag-error">Pinddig</span>-->
              </div>
              <div class="card-content">
                规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述
              </div>
            </div>`;

  // CMDB
  let card2  = `<div class="card">
              <div class="card-header-left">
<!--                <span class="tag tag-blue">NFVO</span>-->
                <span class="card-header-left-text">CMDB交互工具CBB</span>
              </div>
              <div class="card-author">
                <img class="avatar" src="./avatar.jpeg" alt="">
                <span class="name">杨连刚</span>
                <span class="tag tag-info">30K</span>
                <span class="tag tag-warning">12-3截止</span>
                <span class="tag tag-error">Pinddig</span>
              </div>
              <div class="card-content">
                规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述规划描述
              </div>
            </div>`;


}
