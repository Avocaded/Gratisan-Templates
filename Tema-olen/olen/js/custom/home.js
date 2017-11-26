/*
Name: 			Home
Written by: 	JanXcode Themes - (http://www.janxcode.com)
Version: 		1.0
*/

(function() {

	"use strict";

	var Home = {

		initialized: false,

		initialize: function() {

			if (this.initialized) return;
			this.initialized = true;

			this.build();

		},

		build: function(options) {

			// Revolution Slider Initialize
			$(".tp-banner").each(function() {

				var slider = $(this);

				var defaults = {
					delay: 9000,
					startheight: 800,
					startwidth: 960,

					hideThumbs: 10,

					thumbWidth: 100,
					thumbHeight: 50,
					thumbAmount: 5,

					navigationType: "both",
					navigationArrows: "verticalcentered",
					navigationStyle: "round",

					touchenabled: "on",
					onHoverStop: "on",

					navOffsetHorizontal: 0,
					navOffsetVertical: 20,

					stopAtSlide: 0,
					stopAfterLoops: -1,

					shadow: 0,
					fullWidth:"on",
					//forceFullWidth:"off",
					videoJsPath: "vendor/rs-plugin/videojs/"
				}

				var config = $.extend({}, defaults, options, slider.data("plugin-options"));

				// Initialize Slider
				var sliderApi = slider.revolution(config).addClass("slider-init");

				// Set Play Button to Visible
				sliderApi.bind("revolution.slide.onloaded ",function (e,data) {
					$(".home-player").addClass("visible");
				});

			});

			
		}

	};

	Home.initialize();

})();