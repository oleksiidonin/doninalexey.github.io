
const obj0 = document.querySelectorAll('.about__block')[0];
var fontS;
var popUpBool = false;
const body = document.querySelector('body');
const menuButtons = document.querySelector('.header__body');
const menuPlusButton = document.querySelector('.header__body .plus');
const menuItems = document.querySelector('.header__menu');
const menuBg = document.querySelector('.menuBg');
const headerLink = document.querySelectorAll('.header__list li');
const mainVideo = document.querySelector('.main__video');
const mainLogo = document.querySelector('.main_preloader');

var main_preloader_padding;



"use strict"

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');
}

function setHeaderlinkOpenClass(obj) {
	obj.classList.toggle('headerLik_open');

}
function hideMainMenu() {
	menuPlusButton.classList.toggle('openPlus');
	menuBg.classList.toggle('openMenuBg');
	menuBg.addEventListener('transitionend', backMenuZindex);
}
function backMenuZindex() {
	menuButtons.style.zIndex = "1";
	menuItems.style.width = "auto";
	menuItems.style.height = "auto";
	menuBg.removeEventListener('transitionend', backMenuZindex);
}
menuButtons.addEventListener("click", function (event) {
	let curWidth = parseInt(window.innerWidth);
	if (!isMobile.any()) {
		if (event.target.closest('.plus')) {
			if (!menuPlusButton.classList.contains('openPlus')) {
				menuPlusButton.classList.toggle('openPlus');
				menuBg.classList.toggle('openMenuBg');
				let delay = 500;
				for (const item of headerLink) {
					let timerId = setTimeout(setHeaderlinkOpenClass, delay, item);
					delay -= delay / headerLink.length;
				}
			} else {
				let delay = 0;
				for (const item of headerLink) {
					let timerId = setTimeout(setHeaderlinkOpenClass, delay, item);
					delay += 500 / headerLink.length;
				}
				let timerId2 = setTimeout(hideMainMenu, 500 / headerLink.length);
			}
		}
	} else {
		if (event.target.closest('.plus')) {
			if (!menuPlusButton.classList.contains('openPlus')) {
				menuButtons.style.zIndex = "10";
				menuItems.style.width = "100%";
				menuItems.style.height = "100%";
				menuPlusButton.classList.toggle('openPlus');
				menuBg.classList.toggle('openMenuBg');
				let delay = 500;

				//menuBg.addEventListener('transitionend', mobileMenuIsOpened);
				for (const item of headerLink) {
					let timerId = setTimeout(setHeaderlinkOpenClass, delay, item);
					delay += delay / headerLink.length;
				}
			} else {
				let delay = 0;
				body.style.overflow = 'visible';
				for (var i = headerLink.length - 1; i >= 0; i--) {
					let timerId = setTimeout(setHeaderlinkOpenClass, delay, headerLink[i]);
					delay += 500 / headerLink.length;
				}
				let timerId2 = setTimeout(hideMainMenu, 500);
			}
		}
	}
});
function mobileMenuIsOpened() {
	body.style.overflow = 'hidden';
	menuBg.removeEventListener('transitionend', mobileMenuIsOpened);
}

menuButtons.addEventListener("mouseover", function (event) {
	if (!isMobile.any()) {
		if (event.target.closest('.header__link')) {
			const item = event.target.closest('.header__link');
			const curline = item.querySelector('.header__link-line');
			curline.classList.toggle('openLineMenu');
		}
	}
});
menuButtons.addEventListener("mouseout", function (event) {
	if (!isMobile.any()) {
		if (event.target.closest('.header__link')) {
			const item = event.target.closest('.header__link');
			const curline = item.querySelector('.header__link-line');
			curline.classList.toggle('openLineMenu');
		}
	}
});
//------------------------ Скролл при клике на меню
document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function (e) {
		console.log('tut');
		e.preventDefault();
		let curWidth = parseInt(window.innerWidth);
		if (isMobile.any()) {
			let delay = 0;
			body.style.overflow = 'visible';
			for (var i = headerLink.length - 1; i >= 0; i--) {
				let timerId = setTimeout(setHeaderlinkOpenClass, delay, headerLink[i]);
				delay += 500 / headerLink.length;
			}
			let timerId2 = setTimeout(hideMainMenu, 500);
		}
		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		const topOffset = document.querySelector('.scrollto').offsetHeight;
		//const topOffset = 0; // если не нужен отступ сверху 
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});


//------------------------ Размер шрифтов
function setFontSize() {
	let curWidth = parseInt(window.getComputedStyle(obj0, null).getPropertyValue('width'));
	let curHeight = parseInt(window.getComputedStyle(obj0, null).getPropertyValue('height'));
	let fontSizeW = (document.documentElement.clientWidth / 1440) * 15;
	let fontSizeH = (document.documentElement.clientHeight / 900) * 15;
	//fontS = (curWidth * curHeight) / (309 * 270);
	fontS = (fontSizeW + fontSizeH) / 2;
	document.documentElement.style.fontSize = fontS + 'px';
	//document.documentElement.style.fontSize = Math.min(fontSizeW, fontSizeH) + 'px';
}

//------------------------ Галерея баннеров

var numBrands = 104;
var num, numGor;

const moreBtn = document.querySelector('.works .loadMore__conteiner');
const bannersConteiner = document.querySelector('.works__conteiner');
const popUpBannersConteiner = document.querySelector('.popUp__conteiner');
var content =
{
	"brand": [
		{ "numBanners": "1" }, //brand 1  
		{ "numBanners": "1" }, //brand 2  
		{ "numBanners": "1" }, //brand 3   
		{ "numBanners": "1" }, //brand 4    
		{ "numBanners": "1" }, //brand 5    
		{ "numBanners": "1" }, //brand 6   
		{ "numBanners": "2" }, //brand 7  
		{ "numBanners": "1" }, //brand 8   
		{ "numBanners": "1" }, //brand 9  
		{ "numBanners": "1" }, //brand 10  
		{ "numBanners": "1" }, //brand 11  
		{ "numBanners": "1" }, //brand 12    
		{ "numBanners": "1" }, //brand 13  
		{ "numBanners": "3" }, //brand 14  
		{ "numBanners": "2" }, //brand 15  
		{ "numBanners": "1" }, //brand 16  
		{ "numBanners": "3" }, //brand 17  
		{ "numBanners": "1" }, //brand 18  
		{ "numBanners": "3" }, //brand 19  
		{ "numBanners": "4" }, //brand 20  
		{ "numBanners": "3" }, //brand 21  
		{ "numBanners": "3" }, //brand 22     
		{ "numBanners": "2" }, //brand 23    
		{ "numBanners": "1" }, //brand 24  
		{ "numBanners": "3" }, //brand 25  
		{ "numBanners": "9" }, //brand 26  
		{ "numBanners": "1" }, //brand 27  
		{ "numBanners": "1" }, //brand 28  
		{ "numBanners": "1" }, //brand 29  
		{ "numBanners": "1" }, //brand 30  
		{ "numBanners": "2" }, //brand 31  
		{ "numBanners": "4" }, //brand 32  
		{ "numBanners": "2" }, //brand 33 
		{ "numBanners": "1" }, //brand 34   
		{ "numBanners": "1" }, //brand 35  
		{ "numBanners": "2" }, //brand 36     
		{ "numBanners": "1" }, //brand 37  
		{ "numBanners": "2" }, //brand 38  
		{ "numBanners": "3" }, //brand 39  
		{ "numBanners": "1" }, //brand 40  
		{ "numBanners": "7" }, //brand 41  
		{ "numBanners": "1" }, //brand 42  
		{ "numBanners": "1" }, //brand 43  
		{ "numBanners": "2" }, //brand 44  
		{ "numBanners": "2" }, //brand 45  
		{ "numBanners": "1" }, //brand 46  
		{ "numBanners": "1" }, //brand 47  
		{ "numBanners": "1" }, //brand 48  
		{ "numBanners": "1" }, //brand 49  
		{ "numBanners": "5" }, //brand 50  
		{ "numBanners": "1" }, //brand 51  
		{ "numBanners": "6" }, //brand 52  
		{ "numBanners": "4" }, //brand 53  
		{ "numBanners": "2" }, //brand 54  
		{ "numBanners": "5" }, //brand 55
		{ "numBanners": "1" }, //brand 56  
		{ "numBanners": "5" }, //brand 57  
		{ "numBanners": "15" }, //brand 58  
		{ "numBanners": "2" }, //brand 59  
		{ "numBanners": "2" }, //brand 60  
		{ "numBanners": "2" }, //brand 61  
		{ "numBanners": "4" }, //brand 62  
		{ "numBanners": "3" }, //brand 63  
		{ "numBanners": "2" }, //brand 64     
		{ "numBanners": "2" }, //brand 65  
		{ "numBanners": "9" }, //brand 66  
		{ "numBanners": "2" }, //brand 67  
		{ "numBanners": "2" }, //brand 68  
		{ "numBanners": "1" }, //brand 69  
		{ "numBanners": "8" }, //brand 70  
		{ "numBanners": "1" }, //brand 71  
		{ "numBanners": "3" }, //brand 72  
		{ "numBanners": "1" }, //brand 73  
		{ "numBanners": "2" }, //brand 74  
		{ "numBanners": "5" }, //brand 75  
		{ "numBanners": "4" }, //brand 76  
		{ "numBanners": "15" }, //brand 77  
		{ "numBanners": "2" }, //brand 78   
		{ "numBanners": "2" }, //brand 79   
		{ "numBanners": "2" }, //brand 80  
		{ "numBanners": "1" }, //brand 81   
		{ "numBanners": "19" }, //brand 82  
		{ "numBanners": "17" }, //brand 83  
		{ "numBanners": "3" }, //brand 84   
		{ "numBanners": "10" }, //brand 85   
		{ "numBanners": "3" }, //brand 86   
		{ "numBanners": "18" }, //brand 87   
		{ "numBanners": "2" }, //brand 88   
		{ "numBanners": "3" }, //brand 89   
		{ "numBanners": "5" }, //brand 90   
		{ "numBanners": "9" }, //brand 91   
		{ "numBanners": "5" }, //brand 92   
		{ "numBanners": "11" }, //brand 93   
		{ "numBanners": "2" }, //brand 94   
		{ "numBanners": "6" }, //brand 95   
		{ "numBanners": "3" }, //brand 96   
		{ "numBanners": "15" }, //brand 97   
		{ "numBanners": "5" }, //brand 98   
		{ "numBanners": "48" }, //brand 99   
		{ "numBanners": "26" },  //brand 100   
		{ "numBanners": "11" }, //brand 101   
		{ "numBanners": "109" }, //brand 102  
		{ "numBanners": "21" }, //brand 103   
		{ "numBanners": "17" } //brand 104      
	]
}

function initContent() {
	//let bannersConteinerWidth = parseInt(getComputedStyle(bannersConteiner).width);
	let bannersConteinerWidth = parseInt(document.documentElement.clientWidth) - main_preloader_padding;

	let numGor = Math.floor((bannersConteinerWidth - 10 * fontS) / 300);
	let bannersGap;
	if (numGor > 1) {
		bannersGap = Math.floor((bannersConteinerWidth - 10 * fontS - numGor * 300) / (numGor - 1));
		if (bannersGap < fontS) {
			numGor--
			if (numGor > 1) {
				bannersGap = Math.floor((bannersConteinerWidth - 10 * fontS - numGor * 300) / (numGor - 1));
				bannersConteiner.style.gap = bannersGap + 'px';
				popUpBannersConteiner.style.gap = bannersGap + 'px';
			} else {
				bannersConteiner.style.gap = 2 * fontS + 'px';
				popUpBannersConteiner.style.gap = 2 * fontS + 'px';
			}
		} else {
			bannersConteiner.style.gap = bannersGap + 'px';
			popUpBannersConteiner.style.gap = bannersGap + 'px';
		}
	} else {
		bannersConteiner.style.gap = 2 * fontS + 'px';
		popUpBannersConteiner.style.gap = 2 * fontS + 'px';
	}

	num = Math.ceil(window.innerHeight / 600) * 2 * numGor;
	if (num < 1) {
		num = 4;
	}
	addNewBanners();

	if (moreBtn != null) {
		moreBtn.onclick = function () {
			//ga('send', 'event', 'moreBtn', 'click');
			addNewBanners();
		}
	}

}
function showBanner(evt) {
	//ga('send', 'event', 'banner', 'play', "ban'" + evt.id + "'");
	let curBanner = document.getElementById(evt.id);
	curBanner.parentElement.innerHTML = "<div class='bannerStopBtn' id='" + evt.id + "' onclick='hideBanner(this)'></div><iframe allowTransparency src='../img/content/brand" + evt.id + "/ban" + content.brand[evt.id - 1].numBanners + "/index.html' frameborder='0' align='left'></iframe><div class='loaderConteiner' style='position: absolute; margin: 0px;'><div class='loader' style='position: absolute; margin: 0px;'></div></div> ";
}
function hideBanner(evt) {
	let curBanner = document.getElementById(evt.id)
	if (content.brand[evt.id - 1].numBanners == 1) {
		curBanner.parentElement.innerHTML = "<div class='bannerPlayBtn' id='" + evt.id + "' onclick='showBanner(this)'><img src='img/icons/play.svg'></img></div><div class='bannerImg'><img src='../img/content/brand" + evt.id + "/ban" + content.brand[evt.id - 1].numBanners + "/img.jpg'></div>";
	} else {
		curBanner.parentElement.innerHTML = "<div class='bannerPlayBtn' id='" + evt.id + "' onclick='showBanner(this)'><img src='img/icons/play.svg'></img></div><div class='bannerImg'><img src='../img/content/brand" + evt.id + "/ban" + content.brand[evt.id - 1].numBanners + "/img.jpg'></div><div class='moreBanners' id='" + evt.id + "' onclick='showBrandBanners(this)'><a>More brand banners</a><img src='../img/icons/moreBrandBanners.svg'></div>";
	}
}
function addNewBanners() {
	for (var i = num; i > 0; i--) {
		if (numBrands > 0) {
			let newBan = document.createElement("div");
			let banClassName = 'banner';
			newBan.setAttribute('class', banClassName);
			if (content.brand[numBrands - 1].numBanners == 1) {
				newBan.innerHTML = "<div class='bannerPlayBtn' id='" + numBrands + "' onclick='showBanner(this)'><img src='img/icons/play.svg'></img></div><div class='bannerImg'><img src='../img/content/brand" + numBrands + "/ban" + content.brand[numBrands - 1].numBanners + "/img.jpg'></div>";
			} else {
				newBan.innerHTML = "<div class='bannerPlayBtn' id='" + numBrands + "' onclick='showBanner(this)'><img src='img/icons/play.svg'></img></div><div class='bannerImg'><img src='../img/content/brand" + numBrands + "/ban" + content.brand[numBrands - 1].numBanners + "/img.jpg'></div><div class='moreBanners' id='" + numBrands + "' onclick='showBrandBanners(this)'><a>More brand banners</a><img src='../img/icons/moreBrandBanners.svg'></div>";
			}

			bannersConteiner.appendChild(newBan);
			numBrands--;

			if (numBrands == 0) {
				if (moreBtn != null) {
					moreBtn.style.display = "none";
				}
			}
		} else {
			if (moreBtn != null) {
				moreBtn.style.display = "none";
			}
		}
	}
	setMargin();
}
function setMargin() {

}

//----------------------------------------PopUp
const popUp = document.querySelector('.popUp');
const popUpCloseBtn = document.querySelector('.popUp .plus');
const morePopUpBtn = document.querySelector('.popUp .loadMore__conteiner');
//const popUpBannersConteiner = document.querySelector('.popUp__conteiner');


var curBrand, numBrandBanners

popUp.addEventListener("click", function (event) {
	if (event.target.closest('.popUp')) {
		if (!event.target.closest('.loadMore__conteiner')) {
			popUp.classList.toggle('activePopUp');
			body.style.overflow = 'visible';
			popUpBool = false;
		}
	}
});
function showBrandBanners(evt) {
	let oldBanners = document.querySelectorAll('.popUp__conteiner .banner');
	popUp.scrollTo(0, 0);

	if (oldBanners.length > 0) {
		for (var i = oldBanners.length - 1; i >= 0; --i) {
			popUpBannersConteiner.removeChild(oldBanners[i]);
		}
	}
	morePopUpBtn.style.display = "flex";
	body.style.overflow = 'hidden';
	popUpBool = true;
	popUp.classList.toggle('activePopUp');

	curBrand = evt.id;
	numBrandBanners = content.brand[evt.id - 1].numBanners;

	addNewPopUpBanners();

	if (morePopUpBtn != null) {
		morePopUpBtn.onclick = function () {
			addNewPopUpBanners();
		}
	}

}
function showBrandBanner(evt) {
	//ga('send', 'event', 'banner', 'play',"ban'"+evt.id+"'");
	let curBanner = document.getElementById(evt.id);
	let curBrandBanner = evt.id.replace(/[^0-9,.]/g, ' ');
	curBrandBanner = curBrandBanner.split(' ').join('');
	curBanner.parentElement.innerHTML = "<div class='bannerStopBtn' id='" + evt.id + "' onclick='hideBrandBanner(this)'></div><iframe allowTransparency src='../img/content/brand" + curBrand + "/ban" + curBrandBanner + "/index.html' frameborder='0' align='left'></iframe><div class='loaderConteiner' style='position: absolute; margin: 0px;'><div class='loader' style='position: absolute; margin: 0px;'></div></div> ";

	//evt.style.visibility='hidden';
}
function hideBrandBanner(evt) {
	let curBanner = document.getElementById(evt.id);
	let curBrandBanner = evt.id.replace(/[^0-9,.]/g, ' ');
	curBrandBanner = curBrandBanner.split(' ').join('');
	curBanner.parentElement.innerHTML = "<div class='bannerPlayBtn' id='" + evt.id + "' onclick='showBrandBanner(this)'><img src='img/icons/play.svg'></img></div><div class='bannerImg'><img src='../img/content/brand" + curBrand + "/ban" + curBrandBanner + "/img.jpg'></div>";

}
function addNewPopUpBanners() {
	var bannersConteiner = document.getElementById("banners");
	for (var i = num; i > 0; i--) {
		if (numBrandBanners > 0) {
			var newBan = document.createElement("div");
			var banClassName = 'banner';
			newBan.setAttribute('class', banClassName);
			newBan.innerHTML = "<div class='bannerPlayBtn' id='b" + numBrandBanners + "' onclick='showBrandBanner(this)'><img src='img/icons/play.svg'></img></div><div class='bannerImg'><img src='../img/content/brand" + curBrand + "/ban" + numBrandBanners + "/img.jpg'></div>";
			popUpBannersConteiner.appendChild(newBan);
			numBrandBanners--;

			if (numBrandBanners == 0) {
				morePopUpBtn.style.display = "none";
			}

		} else {
			if (numBrandBanners == 0) {
				morePopUpBtn.style.display = "none";

			}

		}
	}
	setMargin();

}
//----------------------------------------

var videoG = false;
var videoV = false;
var videoPlay = false;

window.addEventListener('resize', resizeWindow, false);
function resizeWindow() {

	numBrands = 104;
	setFontSize();
	setVideo();
	let oldBanners = document.querySelectorAll('.works__conteiner .banner');
	if (oldBanners.length > 0) {
		for (var i = oldBanners.length - 1; i >= 0; --i) {
			bannersConteiner.removeChild(oldBanners[i]);
		}
	}
	initContent();
	if (popUpBool) {
		oldBanners = document.querySelectorAll('.popUp__conteiner .banner');
		popUp.scrollTo(0, 0);

		if (oldBanners.length > 0) {
			for (var i = oldBanners.length - 1; i >= 0; --i) {
				popUpBannersConteiner.removeChild(oldBanners[i]);
			}
		}
		morePopUpBtn.style.display = "flex";
		numBrandBanners = content.brand[curBrand - 1].numBanners;
		//console.log(numBrandBanners);

		addNewPopUpBanners();
		if (morePopUpBtn != null) {
			morePopUpBtn.onclick = function () {
				addNewPopUpBanners();
			}
		}
	}

}
function setVideo() {
	let winW = window.innerWidth;
	let winH = window.innerHeight;
	if (videoPlay) {
		if (mainLogo != null && mainLogo != undefined) {
			if (!mainLogo.classList.contains('closeMainLogo')) {
				body.style.overflow = 'visible';
				mainLogo.style.paddingRight = '0px';
				mainLogo.classList.toggle('closeMainLogo');
				mainLogo.addEventListener('transitionend', function () {
					createjs.Ticker.removeEventListener("tick", stage);
					body.removeChild(mainLogo);
				});


				/*
				body.addEventListener("click", function (event) {
					if (body.style.overflow == 'hidden') {
						body.style.overflow = 'visible';
						mainLogo.style.paddingRight = '0px';
					} else {
						body.style.overflow = 'hidden';
						mainLogo.style.paddingRight = main_preloader_padding + 'px';
					}
				});
				*/
			}
		}

		if (winW > winH) {
			if (!videoG) {
				mainVideo.innerHTML = '<video disablePictureInPicture controlsList="nodownload" autoplay muted loop preload="auto" class="main-background__video"><source type="video/webm" src="media/movie.webm"><source type="video/mp4" src="media/movie.mp4"></video>';
				videoG = true;
				videoV = false;
			}
		}
		else {
			if (!videoV) {
				mainVideo.innerHTML = '<video disablePictureInPicture controlsList="nodownload" autoplay muted loop preload="auto" class="main-background__video"><source type="video/webm" src="media/movie_vert.webm"><source type="video/mp4" src="media/movie_vert.mp4"></video>';
				videoG = false;
				videoV = true;
			}
		}
	}
}

//------------------------------------------- Интро
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function initIntro() {

	main_preloader_padding = window.innerWidth - mainLogo.offsetWidth;
	mainLogo.style.paddingRight = main_preloader_padding + 'px';
	body.style.overflow = 'hidden';
	initContent();

	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp = AdobeAn.getComposition("3864B68DEA8C496080DFE7CFA06C4595");
	var lib = comp.getLibrary();
	handleComplete({}, comp);
}
function handleComplete(evt, comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib = comp.getLibrary();
	var ss = comp.getSpriteSheet();
	var preloaderDiv = document.getElementById("_preload_div_");
	preloaderDiv.style.display = 'none';
	canvas.style.display = 'block';
	exportRoot = new lib.logo_vert();
	stage = new lib.Stage(canvas);
	//Registers the "tick" event listener.
	fnStartAnimation = function () {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS = 1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih = window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
			if (isResp) {
				if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
					sRatio = lastS;
				}
				else if (!isScale) {
					if (iw < w || ih < h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			canvas.width = w * pRatio * sRatio;
			canvas.height = h * pRatio * sRatio;
			canvas.style.width = anim_container.style.width = dom_overlay_container.style.width = preloaderDiv.style.width = w * sRatio + 'px';
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = preloaderDiv.style.height = h * sRatio + 'px';
			stage.scaleX = pRatio * sRatio;
			stage.scaleY = pRatio * sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
			stage.tickOnUpdate = false;
			stage.update();
			stage.tickOnUpdate = true;
		}
	}
	makeResponsive(true, 'both', true, 1);
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
//-------------------------------------------

window.onload = function () {
	setFontSize();
	setVideo();
	initIntro();
	//initContent();
}