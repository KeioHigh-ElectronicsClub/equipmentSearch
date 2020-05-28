$('.searchByItem > h2').on('click', function () {
  $('#items').slideToggle()
})

$('#keyword_submit').on('click', function () {
  var keyword = $('#keyword').val()
  console.log(keyword)

  $.ajax({
    type: 'GET',
    url:
      'https://script.google.com/macros/s/AKfycbx56aJ09eiV_QJ_4IJJAiHuYV5BkVJWGQi2xzRR3QZxz3YbuXM/exec',
    data: { keywords: keyword },
    dataType: 'jsonp',
    jsonp: 'callback',
    success: function (msg, type) {
      console.log(msg)
      console.log(type)
      showList(msg)
    },
    error: function (xhr, status) {
      console.log(status)
    },
  })
})

$('#item_submit').on('click', function () {
  var category = $('#category').val()
  var name = $('#name').val()
  var constant1 = $('#constant1').val()
  var constant2 = $('#constant2').val()
  var number = $('#number').val()
  var place = $('#place').val()
  var date = $('#date').val()
  var updatedBy = $('#updatedBy').val()

  category = category !== '' ? category : undefined
  name = name !== '' ? name : undefined
  constant1 = constant1 !== '' ? constant1 : undefined
  constant2 = constant2 !== '' ? constant2 : undefined
  number = number !== '' ? number : undefined
  place = place !== '' ? place : undefined
  date = date !== '' ? new Date(date).toDateString() : undefined
  updatedBy = updatedBy !== '' ? updatedBy : undefined

  var obj = {
    category,
    name,
    constant1,
    constant2,
    number,
    place,
    date,
    updatedBy,
  }

  var data = JSON.parse(JSON.stringify(obj))
  console.log(data)

  $.ajax({
    type: 'GET',
    url:
      'https://script.google.com/macros/s/AKfycbx56aJ09eiV_QJ_4IJJAiHuYV5BkVJWGQi2xzRR3QZxz3YbuXM/exec',
    data: data,
    dataType: 'jsonp',
    success: function (msg, type) {
      console.log(msg)
      console.log(type)
      showList(msg)
    },
    error: function (xhr, status) {
      console.log(status)
    },
  })
})

function createDateString(date) {
  return '' + date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate()
}

function showList(list) {
  console.log(list)

  $('#list').empty()

  for (l of list) {
    var box = $('<div></div>', {
      class: 'resultBox',
    })

    var categoryNameWrap = $('<div></div>').addClass('categoryNameWrap')
    var category = $('<p></p>').text(l.category).addClass('category')
    var name = $('<h3></h3>').text(l.name).addClass('name')
    var number = $('<p></p>')
      .text(l.number + '個')
      .addClass('number')
    categoryNameWrap.append(category, name, number)
    var valueWrap = $('<div></div>').addClass('valueWrap')

    var constantWrap = $('<div></div>').addClass('nameWrap')
    var constant1 = $('<p></p>')
      .text(l.constant1 != 'not set' ? l.constant1 : '')
      .addClass('constant1')
    var constant2 = $('<p></p>')
      .text(l.constant2 != 'not set' ? l.constant2 : '')
      .addClass('constant2')
    constantWrap.append(constant1, constant2)

    var datePlaceWrap = $('<div></div>').add('datePlaceWrap')
    var date = $('<p></p>')
      .text(createDateString(new Date(l.date)))
      .addClass('date')
    var place = $('<p></p>').text(l.place).addClass('place')
    var updatedBy = $('<p></p>').text(l.updatedBy).addClass('updatedBy')
    datePlaceWrap.append(date, place, updatedBy)

    valueWrap.append(categoryNameWrap, constantWrap, datePlaceWrap)

    var urlRemarkWrap = $('<div></div>').addClass('urlRemarkWrap')

    var URL =
      l.url != 'not set'
        ? $('<p></p>')
            .append(
              $('<a></a>', {
                href: l.url,
              }).text(l.url),
            )
            .addClass('url')
        : undefined
    var remark = $('<p></p>')
      .text(l.remark != 'not set' ? l.remark : '')
      .addClass('remark')

    urlRemarkWrap.append(URL, remark)
    box.append(valueWrap, urlRemarkWrap)
    $('#list').append(box)
  }
}
