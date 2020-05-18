$('#submit').on('click', function () {
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
