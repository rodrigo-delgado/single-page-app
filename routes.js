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

function renderIndividualId(req, res) {
  var id = req.params.id
  db.grabIndividualResource(id)
  .then(function(individualResource){


    res.render('individual',individualResource[0])

  })
}

function renderForm (req, res) {
  res.render('form')
}

function addResourceToTable (req, res) {

  console.log(req.body);
  res.redirect('/resource')
}
module.exports = {
  getIndex,
  renderResourcesPage,
  renderIndividualId,
  renderForm,
  addResourceToTable

}
