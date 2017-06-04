/* eslint-disable */
'use strict'; 

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('../../../node_modules/material-ui/styles/colors');

var _colorManipulator = require('../../../node_modules/material-ui/utils/colorManipulator');

var _spacing = require('../../../node_modules/material-ui/styles/spacing');

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
exports.default = {
  spacing: _spacing2.default,
  fontFamily: 'Heiti SC, Roboto, sans-serif',
  borderRadius: 2,
  sectionHeight: 800,
  padding: 20,
  palette: {
    primary1Color: '#00bbeb',
    primary2Color: '#007e9f',
    primary3Color: '#454c53',
    accent1Color: _colors.black,
    accent2Color: _colors.black,
    accent3Color: _colors.black,
    textColor: '#333436',
    secondaryTextColor: '#454c53',
    thirdTextColor: '#d7d7d7',
    alternateTextColor: _colors.white,
    alternateSecondaryTextColor: _colors.grey300,
    canvasColor: _colors.white,
    borderColor: _colors.grey300,
    disabledColor: _colors.grey300,
    pickerHeaderColor: _colors.grey400,
    clockCircleColor: _colors.grey400,
    shadowColor: _colors.grey800,
  }
}; /**
    * NB: If you update this file, please also update `docs/src/app/customization/Themes.js`
    */