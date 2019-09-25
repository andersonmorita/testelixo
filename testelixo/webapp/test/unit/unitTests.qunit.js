/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/sap/develop/testelixo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});