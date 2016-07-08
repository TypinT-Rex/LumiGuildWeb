$(document).ready(function(){

	var fullpath = window.location.pathname;
	var currentPage = fullpath.substr(fullpath.lastIndexOf('/')+1);
	var isHiddenNav = true;
	switch (currentPage) {
		case "index.html":
			tabColor("#index", "#9fB6fb", "#cedafe", "#5479e8");
			break;

		case "about.html":
			tabColor("#about", "#9fB6fb", "#cedafe", "#5479e8");
			break;
		case "roster.html":
			tabColor("#roster", "#9fB6fb", "#cedafe", "#5479e8");
			break;
		case "media.html":
			tabColor("#media", "#9fB6fb", "#cedafe", "#5479e8");
			break;
		case "contact.html":
			tabColor("#contact", "#9fB6fb", "#cedafe", "#5479e8");
			break;
		default:

	}

	linkHover(".cta a", "#9fB6fb", "#cedafe", "000000","#000000", "#5479e8", "#ffffff", 200, 200);
	linkHover("nav a", "#9fB6fb", "#ffffff", "#cedafe","#000000", "#5479e8", "#ffffff", 200, 200);
	linkHover(".social-links a", "#9fB6fb", "#9fB6fb", "#5479e8","#ffffff", "#9fB6fb", "#9fB6fb", 200, 200);

	$("#menu").on("click", function(){
			$("nav").slideToggle(200);
	});

	function tabColor(currentTab, bgColor, fontColor, underline)
	{
		$(currentTab).css({"background-color" : bgColor,
										"color": fontColor,
										"border-bottom-color": underline});
	}

	function linkHover(linktype, mouseOverBG, mouseOutBG, mouseOverFontColor, mouseOutFontColor, mouseOverULColor, mouseOutULColor, mouseOverSpeed, mouseOutSpeed)
	{
		$(linktype).hover(
			function(){
				var currentLink = $(this).attr("href");
				if(currentLink != currentPage){
					$(this).animate({ "background-color" : mouseOverBG,
														"color": mouseOverFontColor,
														"border-bottom-color": mouseOverULColor }, mouseOverSpeed);
				}
			},
			function(){
				var currentLink = $(this).attr("href");
				if(currentLink != currentPage){
					$(this).animate({ "background-color" : mouseOutBG,
														"color": mouseOutFontColor,
														"border-bottom-color": mouseOutULColor }, mouseOutSpeed);
				}
			});
	}
});
