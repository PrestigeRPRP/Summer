// 3D Scroll

let zSpacing = -1300,
		lastPos = zSpacing / 5,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = []

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top

	lastPos = top

	frames.forEach(function(n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -5.5
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < Math.abs(zSpacing) / 5.2 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

window.scrollTo(0, 1)

// Audio
let soundButton = document.querySelector('.soundbutton'),
    audio = document.querySelector('.audio');

audio.volume = 0.07; // Add this line to set the volume to 0.07

soundButton.addEventListener('click', e => {
    soundButton.classList.toggle('paused')
    audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
    audio.pause()
}

function randPhrase(){
    phrases = ["Sorry","New Me","Together","New You","Unlimited posibilities","My life","My everything","You and Me", "Forever"];
    return(`${phrases[Math.floor(Math.random()*phrases.length)]}`);
}

function htmlchanger(){
    return(document.getElementById("phrase").innerHTML= randPhrase());
}

setInterval( htmlchanger, 2200);