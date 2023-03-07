"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInBrowser = isInBrowser;

function isInBrowser() {
  return typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
}