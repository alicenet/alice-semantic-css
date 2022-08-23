const sass = require('sass');
const fs = require('fs');
// Render SCSS
var styles = sass.renderSync({
    file: __dirname + "/../style/index.scss"
});
// Write SCSS to file
fs.writeFileSync(__dirname + "/../output/index.css", styles.css.toString(), { flag: 'w' });
// Log success
console.log("Successfully compile SCSS => CSS @ /output/index.css");