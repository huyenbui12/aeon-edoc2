/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable no-bitwise */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
exports.inputText = function inputText(inputElement, input) {
  browser.pause(2000);
  for (let i = 0; i < input.length; i++) {
    inputElement.keys(input[i]);
    browser.pause(300);
  }
  browser.pause(2000);
  // browser.waitUntil(() => {
  //     return inputElement.getText() == input
  //     }, 10000, "I love rock & roll ");
  browser.keys('\uE007');
};

exports.clickAndWait = function clickAndWait(clickElement, waitElement) {
  clickElement.click();
  waitElement.waitForExist(10000);
};

exports.clickAndInput = function clickAndInput(clickElement, inputElement, inputText) {
  clickElement.click();
  exports.inputText(inputElement, inputText);
};

exports.waitAndClickConstTime = function waitAndClickConstTime(clickElement, time = 4000) {
  browser.pause(time);
  clickElement.click();
};

exports.formatDate = function formatDate(date) {
  const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const mm = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const yyyy = date.getFullYear();
  const hh = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const mimi = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${dd} ${mm} ${yyyy} ${hh} ${mimi}`;
};

exports.randomDate = function randomDate(startHour = 0, endHour = 12, startMinute = 0, endMinute = 59) {
  let startDate = new Date();
  let endDate = new Date();
  startDate.setDate(startDate.getDate() + 2);
  endDate.setDate(endDate.getDate() + 60);
  let date = new Date(+startDate + Math.random() * (endDate - startDate));
  let hour = startHour + Math.random() * (endHour - startHour) | 0;
  let minute = startMinute + Math.random() * (endMinute - startMinute) | 0;
  date.setHours(hour, minute);
  return date;
};

exports.backToTop = function backToTop(selector) {
  browser.pause(200);
  selector.click();
  for (let i = 0; i < 10; i++) {
    selector.keys('\ue012');
  }
};

exports.randomIndexInArray = function randomIndexInArray(array) {
  return Math.floor(Math.random() * array.length);
};

exports.readLoginCredentials = function readLoginCredentials() {
  const credentials = require('./login.json');
  return credentials;
};

exports.writeFile = function writeFile(jsonData) {
  let fs = require('fs');
  fs.writeFile('./test/utils/test.json', jsonData, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

exports.readFile = function readFile(inputPath) {
  const rf = require(inputPath);
  return rf;
};

exports.scrollToHeader = function scrollToHeader() {
  browser.keys('\ue011');
};

exports.scrollToFooter = function scrollToFooter() {
  browser.keys('\ue010');
};

exports.getText = function getText(elementId) {
  const text = browser.getElementText(elementId);
  return text;
};

exports.hoverMouse = function hoverMouse(element) {
  element.moveTo();
};

exports.clickCheckBox = function clickCheckBox(selector) {
  // eslint-disable-next-line no-shadow
  browser.execute((selector) => {
    const test = document.querySelector(selector);
    test.click();
  }, selector);
};
