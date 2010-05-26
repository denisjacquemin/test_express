require.paths.unshift('/Users/denisjacquemin/Documents/code/projects/node/express/lib')
require('express')

configure(function() {
  set("root", __dirname)

  use(Logger)
  use(Static, { path: require("path").join(__dirname, "..", "public") })
  enable("show exceptions")
})

get('/', function(){
  this.redirect('/index')
})

get('/index', function(){
  this.render('index.html.haml', {
    locals: {
      title: 'Basic app using express'
    }
  })
})

run()