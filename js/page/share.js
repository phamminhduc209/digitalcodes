	/* Share */
	$('.social-share-button').on( 'click', function() {
		$(this).next().toggleClass('sh-social-share-networks-active');
	});
	/* Share  */
	$(".social-share-networks").jsSocials({
		_getShareUrl: function() {
	    var url = jsSocials.Socials.prototype._getShareUrl.apply(this, arguments);
	    return "javascript:window.open('" + url + "', '', 'menubar=no, width=500, height=300')";
	},
		showLabel: false,
		showCount: "inside",
		shares: ["facebook", "twitter", "googleplus", "email", "pinterest"]
	});