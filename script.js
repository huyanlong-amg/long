let deleteCardEle

let addRuleFormObj = null
// 微服务列表
let serverList = {
    product1: [],
    product2: [],
    product3: [],
    product4: []
}
// 已选择微服务
let selectedServerList = []

$(function () {

    // 查询后台页面数据并页面展示（首先需要删除页面老数据）


    // 同步微服务列表
    syncServerList()

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
            product: 'product1',
            server: [
                {server: 'product1_server1', codeNumber: 100},
                {server: 'product1_server2', codeNumber: 200},
            ],
            time: '2020年Q1',
            status: 2,
        }
    ]
    let html = getCardHtml(data)
    $('#access .content-item-title span').text(data.length)
    $('#access .content-item-body').html(html)


    $('.card .close-img ').on('click', function () {
        // layer.open({
        //   title: '在线调试'
        //   ,content: '可以填写任意的layer代码'
        // });

        // $('#HighRiskFrame').modal('show')
        // $(this).parent('.card').remove()
        deleteCardEle = $(this).parent('.card')
        layer.confirm('真的删除行么', function(index){
            layer.close(index);
            deleteCard();
        });
        // layer.open({
        //     type: 1,
        //     title: false, //不显示标题栏
        //     closeBtn: true,
        //     area: '300px;',
        //     shade: 0.1,
        //     id: 'LAY_layuipro',//设定一个id，防止重复弹出
        //     btn: ['删除', '取消'],
        //     btnAlign: 'c',
        //     moveType: 1,//拖拽模式，0或者1
        //     content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">您确定删除重构需求吗？</div>'
        //     ,
        //     success: function (layero) {
        //         var btn = layero.find('.layui-layer-btn');
        //         btn.find('.layui-layer-btn0').click(deleteCard);
        //     }
        // });
    })

    $('#xiafa').on('click', function () {

        layer.open({
            type: 1,
            title: false, //不显示标题栏
            closeBtn: true,
            area: '300px;',
            shade: 0.1,
            id: 'LAY_layuipro',//设定一个id，防止重复弹出
            btn: ['下发', '取消'],
            btnAlign: 'c',
            moveType: 1,//拖拽模式，0或者1
            content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">' +
                '您确定下发重构需求吗？<br><br>该重构需求是否被评审且通过评审？<br>只有评审通过的需求才可以被下发。<br><br>下发之后数据将无法回撤。</div>'
            ,
            success: function (layero) {
                // var btn = layero.find('.layui-layer-btn');
                // btn.find('.layui-layer-btn0').attr({
                // });

            }
        });
    })

})

function getRebuildData(param) {
    let rebuildData = null;
    $.ajax({
        url: "/index/getData",
        data: param,
        type: "get",
        success: function (ret) {
            ret.code != 0 ? rebuildData = ret.data : layui.open({title: "错误数据", content: e.msg});
        },
        error: function (e) {
            layui.open({title: "错误数据", content: e.msg});
        }
    });
    return rebuildData;
}

function healerCardHtml(rebuildData) {
    rebuildData.data.forEach(function (key, value) {
        let group = null;
        if (key == "Story") {
            group = `<span class="tag tag-blue">${item.group}</span>`;
            Issue = `<span class="tag tag-error" onclick="issueStory(${item.id})">下发</span>`;
        }
        let html = ''
        value.forEach(item => {
            // 把数据存到data中
            let card = `<div class="card" id="${item.id}" data-data='${JSON.stringify(item)}'>
      <div class="card-title">
        ${group}
        <span class="card-title-text">${item.name}</span>
      </div>
      <div class="card-author">
        <img class="avatar" src="${item.authorUrl}" alt="">
        <span class="name">${item.authorName}</span>
        <span class="tag tag-info">${item.codeCount}</span>
        <span class="tag tag-warning">${item.completeTime}</span>
        ${implementStatus}
        ${Issue}
        ${Jump}
        <span class="tag tag-error">${item.tag3}</span>
      </div>
      <div class="card-content">
        ${item.desc}
      </div>
    </div>`
            html += card
        })
        $('#' + key + ' .content-item-title span').text(value.length)
        $('#' + key + ' .content-item-body').html(html)
    });
}

function syncServerList() {
    // TODO: 接口获取微服务列表
    serverList = {
        product1: ['product1_server1', 'product1_server2', 'product1_server3'],
        product2: ['product2_server1', 'product2_server2', 'product2_server3'],
        product3: ['product3_server1', 'product3_server2', 'product3_server3'],
        product4: ['product4_server1', 'product4_server2', 'product4_server3'],
    }
}

function getCardHtml(data) {
    let html = ''
    data.forEach(item => {
        // 把数据存到data中
        let card = `<div class="card" id="${item.id}" data-data='${JSON.stringify(item)}'>
      <div class="card-title">
        <span class="tag tag-blue">${item.group}</span>
        <span class="card-title-text">${item.name}</span>
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


// 初始化配置表单
$(function () {
    layui.use(['form'], function () {
        addRuleFormObj = layui.form

        // 绑定添加点击事件
        $('#addRuleBtn').on('click', function () {
            addRuleFormObj.val('addRuleForm', {
                name: '',
                product: '',
                time: '',
                status: '',
                desc: '',
                server: '',
                codeNumber: ''
            });
            // 设置微服务列表
            renderServerList()
            // 设置微服务初始值
            selectedServerList = []
            renderSelectedServer()
            $('#addRuleDialog .modal-title').text('新增')
            $('#serviceIput').show()
            $('#addRuleDialog input').attr("disabled", false).removeClass('layui-disabled');
            $('#addRuleDialog').modal('show')
        })

        // 编辑
        $('.card').on('click', function () {
            // 表单赋值
            let data = $(this).data('data')
            addRuleFormObj.val('addRuleForm', {
                name: data.name,
                product: data.product,
                time: data.time,
                status: data.status,
                desc: data.desc,
                server: '',
                codeNumber: ''
            });
            // 设置微服务列表
            renderServerList()
            // // 设置微服务初始值
            selectedServerList = data.server
            renderSelectedServer()


            // 打开dialog
            $('#addRuleDialog .modal-title').text('修改')
            $('#serviceIput').hide()
            $('#addRuleDialog').modal('show')
            $('#addRuleDialog input').attr("disabled", true).addClass('layui-disabled');

        })

        // 提交表单
        layui.$('#submitAddRuleBtn').on('click', function () {
            var data = addRuleFormObj.val('addRuleForm');
            data.server = selectedServerList
            console.log('data', data)
            if (data.name == '') {
                layer.msg('请填写重构事务');
                return
            }
            if (data.produce == '') {
                layer.msg('请选择产品');
                return
            }
            if (data.time == '') {
                layer.msg('请选择完成时间');
                return
            }

            // TODO: 调接口保存数据
        });


        // 监听产品变化
        addRuleFormObj.on('select(product)', function (data) {
            renderServerList()
        });

        // 添加微服务
        $('#addServerBtn').click(function () {
            let server = $('#server').val()
            let codeNumber = $('#codeNumber').val()
            if (server === '') {
                layer.msg('请选择微服务');
                return
            }
            if (selectedServerList.find(x => x.server === server)) {
                layer.msg('该微服务已存在');
                return
            }
            if (codeNumber === '') {
                layer.msg('请填写代码量');
                return
            }
            if (!/^\d+$/.test(codeNumber)) {
                layer.msg('代码量必须为数字');
                return
            }
            // 保存数据
            selectedServerList.push({
                server: server,
                codeNumber: codeNumber
            })
            // 更新渲染
            renderSelectedServer()
            // 清空选项
            $('#server').val('')
            $('#codeNumber').val('')
            addRuleFormObj.render('select')
        })
    });
})

// 更新微服务列表
function renderServerList() {
    let produce = $('#product').val()
    let list = []
    if (produce) {
        list = serverList[produce] || []
    }
    // 设置微服务列表
    list = list.map(x => {
        return `<option value="${x}">${x}</option>`
    })
    list = '<option value="">请选择</option>' + list
    $('#server').html(list)
    // 刷新列表
    addRuleFormObj.render('select')
}

// 更新服务渲染
function renderSelectedServer() {
    let html = selectedServerList.map((x, index) => {
        return `<div class="server-item">
      <div class="server-item-text">${x.server}, ${x.codeNumber}</div>
      <div class="server-item-close" onclick="removeSelectedServerItem(${index})">x</div>
    </div>`
    })
    $('#serverContent').html(html)
}

// 删除已选服务
function removeSelectedServerItem(index) {
    selectedServerList.splice(index, 1)
    renderSelectedServer()
}


function deleteCard() {
    // $('.modal').modal('hide')
    deleteCardEle.addClass('animated zoomOut')
    let data = deleteCardEle.data('id');
    setTimeout(function () {
        deleteCardEle.remove()  //可以是一句或是很多句代码，也可以是个函数
    }, 600);　　　　//延时1秒
}

/**
 * 下发需求
 * @param id 需求的索引id
 */
function issueStory(id) {
  deleteCardEle = $(this).parent('.card-author').parent('.card')
   // ajax调用后台删除操作
  $.ajax({
    url:"rebuild/delete",
    type:"delete",
    data:id,
    success:function (ret) {
      if (ret.code != 0) {
        layui.open({title: "错误数据", content: ret.msg});
      } else {
        // 执行删除需求池卡片操作
        deleteCardEle.addClass('animated zoomOut')
        let data = deleteCardEle.data('id');
        setTimeout(function () {
          deleteCardEle.remove()  //可以是一句或是很多句代码，也可以是个函数
        }, 600);　　　　//延时1秒

        // 执行对应列增加顶部增加卡片
      }
    },error:function (e) {
      layui.open({title: "错误数据", content: "服务内部异常"});
    }
  });
}