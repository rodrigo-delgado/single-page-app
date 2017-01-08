var db = require('./db')


function getIndex (req, res) {
    res.render('index')
}

function renderResourcesPage(req, res){
  db.grabResources()
  .then(function(resources){

    res.render('resource', {"resources": resources})
  })
}


module.exports = {
  getIndex,
  renderResourcesPage,
}
