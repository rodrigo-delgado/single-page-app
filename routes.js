var db = require('./db')


function getIndex (req, res) {
    res.render('index')
}

function renderResourcesPage(req, res){
  res.render('resource')
}


module.exports = {
  getIndex,
  renderResourcesPage,
}
