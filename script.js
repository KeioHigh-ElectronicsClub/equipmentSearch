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
    },
    error: function (xhr, status) {
      console.log(status)
    },
  })
})
