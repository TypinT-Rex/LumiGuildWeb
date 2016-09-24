images = ['media/images/Slide1.png', 'media/images/Slide2.png', 'media/images/Slide3.png'];

$(document).ready(function(){

	setInterval(forwardImage, 4000);

	//This function will find the key for the current Image
	function currentImageKey()
	{
		i = jQuery.inArray($('#slideshow').attr('src'), images);
		return i;
	}


	//This function will move the slideshow forward one
	function forwardImage()
	{
		currentImageKey();
		if (i < images.length - 1)
		{
			changeImage(i + 1);
		}
		else
		{
			changeImage(0);
		}
	}


	//This function will change to image to whatever the variable i passes to it
	function changeImage(i)
	{
	//Current image gradually fades out by reducing the opacity to 0 over specified time
		$('#slideshow').stop().animate({
			opacity: 0,
		}, 200, function() {//Load the next image once opacity is 0
			$('#slideshow').attr('src', images[i]);
			$('#holder img').load(function() { //Gradually increase opacity to 1 after next image is loaded
				$('#slideshow').stop().animate({
					opacity: 1,
				}, 200)
			})
		})
	}

});
