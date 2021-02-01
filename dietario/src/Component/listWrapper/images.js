import React from 'react';
import * as image from '../../../imgs';

const images = {};

function importAll(r) {
   r.keys().forEach((key) => (images[key] = r(key)));
}

importAll(require.context("../../../img", false, /\.(png|jpe?g|svg)$/));

export default images