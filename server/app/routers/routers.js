const fs = require('fs');
const path = require('path');

const attachTo = (app, controllers) => {
  fs.readdirSync(__dirname)
    .filter((file) => file.includes('.router'))
    .forEach((filename) => {
      const modulePath = path.join(__dirname, filename);
      require(modulePath).attachTo(app, controllers);
    });

  // TODO: think how to remove this shit
  app
    .get('*', function (req, res) {
      res
        .status(200)
        .sendFile(path.join(__dirname, '../../../dist/index.html'));
    });
};

module.exports = { attachTo };
