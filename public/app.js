console.log('it works!!!')

//something to interact with it
var source   = $("#names-template").html();
console.log(source)
var template = Handlebars.compile(source);

document.addEventListener('DOMContentLoaded', function(e){
  console.log("DOM loaded")
  $.get('api/v1/resources')
  .done(function(response){
    $('.container').append(template(response))
  })

  $('#submit').on("click", event => {
    event.preventDefault()
    console.log(event)
  })



})
