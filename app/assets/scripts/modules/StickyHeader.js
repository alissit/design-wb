import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class StickyHeader {

	constructor(){
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWayppoint();
		this.pageSections = $(".page-section");
		this.headerLink = $(".primary-nav a")
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWayPoints();
	}

	refreshWayPoints() {
		this.lazyImages.on("load", function(){
			Waypoint.refreshAll();
		})
	}

	addSmoothScrolling() {
		this.headerLInks.smoothScroll();
	}

	createHeaderWayppoint(){
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction){
				if (direction =="down"){
					that.siteHeader.addClass("site-header--dark");
				}else {
					that.siteHeader.removeClass("site-header--dark");
				}
				
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function() {
					var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
					that.headerLink.removeClass("is-current-link");
					$(matchingHeaderLink).addClass("is-current-link")
				},
				offset: "9%"
			});
		});
	}

}

export default StickyHeader;