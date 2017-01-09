var db = require('./db')


function getIndex (req, res) {
    res.render('index')
}

function renderResourcesPage(req, res){
  db.grabResources()
  .then(function(resources){
    res.json({data: resources})
  })
}

function renderIndividualId(req, res) {
  var id = req.params.id
  db.grabIndividualResource(id)
  .then(function(individualResource){
    console.log(individualResource)
    res.json(individualResource[0])
  })
}

function renderForm (req, res) {
  res.render('form')
}

function addResourceToTable (req, res) {
  db.addResourceToTable(req.body)
  res.redirect('/resource')
}
module.exports = {
  getIndex,
  renderResourcesPage,
  renderIndividualId,
  renderForm,
  addResourceToTable

}
