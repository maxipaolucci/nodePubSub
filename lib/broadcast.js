/**
 * Created by mpaoluc on 8/04/16.
 */
'use strict';

var axon = require('axon');
var socket = axon.socket('pub');

socket.bind(8001);
/**
 * send a badge to the publish socket
 * @param badge
 */
exports.send = function(badge) {
    socket.send(badge);
};
