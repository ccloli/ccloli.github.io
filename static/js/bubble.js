(function(){
	var bgCanvas = document.querySelector('.bubble-group');
	var bubbleConfig = {
		maxWidth: 100,
		minWidth: 50,
		insertTime: 200,
		alphaRange: [0.1, 0.5],
		type: ['bubble', 'bubble-fast', 'bubble-slow']
	}

	function removeBubble(){
		if (event.animationName !== 'bubble') return;
		bgCanvas.removeChild(event.target);
	}

	function insertBubble(){
		var bubble = document.createElement('div');
		var width = bubbleConfig.minWidth + Math.round(Math.random() * (bubbleConfig.maxWidth - bubbleConfig.minWidth));
		var screenWidth = document.documentElement.scrollWidth || document.body.scrollWidth;

		// var bubbleType = Math.floor(Math.random() * bubbleConfig.type.length);
		// bubble.className = 'bubble' + bubbleType ? ' ' + bubbleConfig.type[bubbleType] : '';
		bubble.className = 'bubble';
		bubble.style.width = width + 'px';
		bubble.style.height = width + 'px';
		bubble.style.left = Math.random() * screenWidth - width / 2 + 'px';
		bubble.style.opacity = bubbleConfig.alphaRange[0] + Math.random() * (bubbleConfig.alphaRange[1] - bubbleConfig.alphaRange[0]);

		bgCanvas.appendChild(bubble);

		setTimeout(insertBubble, bubbleConfig.insertTime);
	}

	bgCanvas.addEventListener('animationend', removeBubble, false);
	bgCanvas.addEventListener('MSAnimationEnd', removeBubble, false);
	bgCanvas.addEventListener('webkitAnimationEnd', removeBubble, false);

	insertBubble();
	//setInterval(insertBubble, bubbleConfig.insertTime);
})();