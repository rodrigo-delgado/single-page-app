console.log('it works!!!')

//something to interact with it
var source   = $("#names-template").html();

var template = Handlebars.compile(source);

document.addEventListener('DOMContentLoaded', function(e){
  $.get('api/v1/resources')
  .done(function(response){
    $('.container').append(template(response))
  })

  $('#submit').on("click", event => {
    event.preventDefault()
    var data = $('#form').serializeArray()
    $.post("/api/v1/resources/", data, function(res){
      console.log(res);
      $('.container').append(template(res))
    })
  })
})
