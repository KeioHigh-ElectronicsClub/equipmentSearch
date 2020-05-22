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

function showList(list) {
  console.log(list)

  $('#list').empty()

  for (l of list) {
    var box = $('<div></div>', {
      class: '',
    }).css('border', '1px solid black')
    var category = $('<p></p>').text(l.category)
    var name = $('<p></p>').text(l.name)
    var constant1 = $('<p></p>').text(l.constant1)
    var constant2 = $('<p></p>').text(l.constant2)
    var date = $('<p></p>').text(new Date(l.date).toDateString())
    var place = $('<p></p>').text(l.place)
    var updatedBy = $('<p></p>').text(l.updatedBy)
    var URL = $('<p></p>').append(
      $('<a></a>', {
        href: l.url,
      }).text(l.url),
    )
    var remark = $('<p></p>').text(l.remark)
    box.append(
      category,
      name,
      constant1,
      constant2,
      place,
      date,
      updatedBy,
      URL,
      remark,
    )
    $('#list').append(box)
  }
}
