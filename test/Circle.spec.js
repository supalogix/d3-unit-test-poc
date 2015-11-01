"use strict";

var d3 = require("d3");
var jsdom = require("jsdom-no-contextify");
var Circle = require("../src/Circle.js");

describe("Circle", function() {

   function d3UnitTest(callback) {
      var htmlStub ='<html><body></body></html>';

      return jsdom.env({
         features: {QuerySelector: true},
         html : htmlStub,
         done: callback
      });
   }

   it("should be defined", function(done) {

      d3UnitTest(callback);

      function callback(errors, window) {
         //
         // Arrange
         //
         var el = window
            .document
            .querySelector('body'); 
         
         //
         // Act
         //
         Circle( el, "circleId" );

         //
         // Assert
         //
         var circle = d3.select(el).select("#circleId");
         expect(circle.empty()).toBe(false);

         done();
      }
   });

   it("should be red", function(done) {

      d3UnitTest( function (errors, window) {
         //
         // Arrange
         //
         var el = window
            .document
            .querySelector('body'); 
         
         //
         // Act
         //
         Circle( el, "circleId" );

         //
         // Assert
         //
         var circle = d3.select(el).select("#circleId");
         expect(circle.attr("fill")).toBe("#ff0000");

         done();
      });
   });

   it("should be blue after clicking", function(done) {

      d3UnitTest( function (errors, window) {
         //
         // Arrange
         //
         var el = window
            .document
            .querySelector('body'); 
         
         //
         // Act
         //
         Circle( el, "circleId" );
         var circle = d3.select(el)
            .select("#circleId");
         circle.on("click")
            .call(
               circle.node(),
               circle.datum()
            );

         //
         // Assert
         //
         expect(circle.attr("fill")).toBe("#00ff00");

         done();
      });
   });
});
