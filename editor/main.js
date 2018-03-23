"use strict";

let $ = (selector) => document.querySelector(selector);

async function setupEditor() {
  $("#city").value = await getSetting("city", "Paris");
  $("#picked").href = "http://openweathermap.org/find?q=" + $("#city").value;
  $("#city").addEventListener("change", function() {
    $("#picked").href = "http://openweathermap.org/find?q=" + $("#city").value;
    browser.runtime.sendMessage({
      type: "city",
      value: $("#city").value,
    });
  });
}

window.onload = setupEditor;
