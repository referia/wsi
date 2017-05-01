// See http://brunch.io for documentation.
exports.files = {
  javascripts: {joinTo: 'app.js'},
  stylesheets: {joinTo: 'app.css'},

};

exports = { 
  plugins: {
    sass: {
      mode: 'ruby',
      sourceMapEmbed: true
    }
  }
}