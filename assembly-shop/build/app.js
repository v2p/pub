"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FromCommand = function () {
    function FromCommand(from) {
        _classCallCheck(this, FromCommand);

        this.from = from;
    }

    _createClass(FromCommand, [{
        key: "run",
        value: function run() {
            return "FROM " + this.from;
        }
    }]);

    return FromCommand;
}();

exports.default = FromCommand;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MaintainerCommand = function () {
    function MaintainerCommand(maintainer) {
        _classCallCheck(this, MaintainerCommand);

        this.maintainer = maintainer;
    }

    _createClass(MaintainerCommand, [{
        key: "run",
        value: function run() {
            return "MAINTAINER " + this.maintainer;
        }
    }]);

    return MaintainerCommand;
}();

exports.default = MaintainerCommand;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InstallCommand = function () {
    /**
     * @param {Array} packages
     */
    function InstallCommand(packages) {
        _classCallCheck(this, InstallCommand);

        this.packages = packages;
    }

    _createClass(InstallCommand, [{
        key: 'run',
        value: function run() {
            var packagesString = this.packages.join(' \\\n\t');

            return '\nRUN apt-get update && apt-get install -y --no-install-recommends     ' + packagesString + ' && apt-get clean -y     && apt-get autoremove -y && rm -rf /var/lib/apt/lists/*';
        }
    }]);

    return InstallCommand;
}();

exports.default = InstallCommand;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InstallCommand = require('./debian/InstallCommand');

Object.defineProperty(exports, 'Install', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_InstallCommand).default;
  }
});

var _FromCommand = require('./FromCommand');

Object.defineProperty(exports, 'From', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FromCommand).default;
  }
});

var _MaintainerCommand = require('./MaintainerCommand');

Object.defineProperty(exports, 'Maintainer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MaintainerCommand).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return [new commands.From('ubuntu:16.04'), new commands.Maintainer('Vladimir Posvistelik <v.posvistelik@gmail.com>')];
};

var _index = require('../commands/index');

var commands = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('./php/base-5.6-dev/config');

Object.defineProperty(exports, 'php_base_56_dev', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_config).default;
  }
});

var _config2 = require('./php/base-7.0-dev/config');

Object.defineProperty(exports, 'php_base_70_dev', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_config2).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ubuntu = require('../../../commands-presets/ubuntu1604');

var _ubuntu2 = _interopRequireDefault(_ubuntu);

var _index = require('../../../commands/index');

var commands = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configCommands = (0, _ubuntu2.default)();

configCommands.push([new commands.From('ubuntu:123'), new commands.Maintainer('123123')]);

exports.default = configCommands;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ubuntu = require('../../../commands-presets/ubuntu1604');

var _ubuntu2 = _interopRequireDefault(_ubuntu);

var _index = require('../../../commands/index');

var commands = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configCommands = (0, _ubuntu2.default)();

configCommands.push([new commands.From('ubuntu:789'), new commands.Maintainer('54321')]);

exports.default = configCommands;
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = require('./configs/index');

var configs = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var s = typeof configs === 'undefined' ? 'undefined' : _typeof(configs);
console.log(s);

// if (filename) {
//     console.log(filename);
//     let module = require(filepath);
//     module.configCommands.forEach((arg) => {
//         console.log(`output: ${arg}`);
//     });
// }
// });
