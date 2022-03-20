var numBanners;
var curBrand;
var bannersConteiner, num, moreBtn, numGor, bannersWidth, contactsBtn, closeContactsBtn, infoBtn, closeInfoBtn;

function init() {
    contactsBtn = document.getElementById("contactsBtn");
    closeContactsBtn = document.getElementById("closeContactsBtn");
    
    closeContactsBtn.onclick = function(){
        document.getElementById("contacts").style.visibility = 'hidden';
        document.getElementById("contactsBtn").style.opacity = 1;
        document.getElementById("contactsBtn").style.cursor = 'pointer';
    }
    contactsBtn.onclick = function(){
        ga('send', 'event', 'contacts', 'open');
        document.getElementById("contacts").style.visibility = 'visible';
        document.getElementById("contactsBtn").style.opacity = .5;
        document.getElementById("contactsBtn").style.cursor = 'default';
    }
    /*
    infoBtn = document.getElementById("infoBtn");
    closeInfoBtn = document.getElementById("closeInfoBtn");
    
    infoBtn.onclick = function(){
        document.getElementById("info").style.visibility = 'visible';
        document.getElementById("infoBtn").style.opacity = .5;
        document.getElementById("infoBtn").style.cursor = 'default';
        ga('send', 'event', 'info', 'open');
    }
    closeInfoBtn.onclick = function(){
        document.getElementById("info").style.visibility = 'hidden';
        document.getElementById("infoBtn").style.opacity = 1;
        document.getElementById("infoBtn").style.cursor = 'pointer';
    }
    */
    moreBtn = document.getElementById("loadMoreBtn");
    num = Math.ceil(window.innerHeight/600)*Math.floor(window.innerWidth/420) + Math.floor(window.innerWidth/420);

    curBrand = get('page');
    numBanners = get('numBanners');
    console.log(numBanners);
    addNewBanners();
    
    if(moreBtn != null) {
        moreBtn.onclick = function(){
            ga('send', 'event', 'moreBtn', 'click');
            num = Math.ceil(window.innerHeight/600)*Math.floor(window.innerWidth/420);
            addNewBanners();
        }
    }
    window.addEventListener('resize', resizeCanvas, false);
    function resizeCanvas() {
        setMargin();
    }
    resizeCanvas();
}
function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}
function showBanner(evt) {
        ga('send', 'event', 'banner', 'play',"ban'"+evt.id+"'");
        var curBanner = document.getElementById(evt.id)
        curBanner.parentElement.innerHTML = "<div class='bannerStopBtn' id='"+evt.id+"' onclick='hideBanner(this)'></div><iframe src='images/content/"+curBrand+"/ban"+evt.id+"/index.html' frameborder='0' align='left'></iframe><div id='preloader' style='position: absolute; margin: 0px;'><img src='images/preloader.gif' alt='Preloader'></div> ";
        
        //evt.style.visibility='hidden';
}
function hideBanner (evt) {
    var curBanner = document.getElementById(evt.id)
        curBanner.parentElement.innerHTML = "<div class='bannerPlayBtn' id='"+evt.id+"' onclick='showBanner(this)'><span>Click to play</span><img src='images/bannerPlayBtnBg.png'></div><div class='bannerImg'><img src='images/content/"+curBrand+"/ban"+evt.id+"/img.jpg'></div>";
    
}
function addNewBanners() {
    var bannersConteiner = document.getElementById("banners");
    for(var i=num; i>0; i--){
        if(numBanners>0) {
            var newBan = document.createElement("div");
            var banClassName = 'banner';
            newBan.setAttribute('class',banClassName);
            newBan.innerHTML = "<div class='bannerPlayBtn' id='"+numBanners+"' onclick='showBanner(this)'><span>Click to play</span><img src='images/bannerPlayBtnBg.png'></div><div class='bannerImg'><img src='images/content/"+curBrand+"/ban"+numBanners+"/img.jpg'></div>";
            bannersConteiner.appendChild(newBan);
            numBanners--;
            if(numBanners==0) {
                if(document.getElementById("loadMoreBtnConteiner")!=null){
                    document.getElementById("main").removeChild( document.getElementById("loadMoreBtnConteiner"));
                }
            }
        } else {
            if(document.getElementById("loadMoreBtnConteiner")!=null){
                document.getElementById("main").removeChild( document.getElementById("loadMoreBtnConteiner"));
            }
        }
    }
    setMargin();
}
function setMargin(){
    numGor = Math.floor(document.documentElement.clientWidth/300);
    var tempNumGor = numGor;
    var marginNum = 0;
    while (marginNum < 5){
        marginNum = Math.floor((document.documentElement.clientWidth - tempNumGor*300)/(2*tempNumGor));
        tempNumGor--;
    }
    for(var i=0; i<document.getElementById('banners').childNodes.length; i++){
        document.getElementById('banners').childNodes[i].style.margin = marginNum + 'px';
    }
    var computedStyle = document.getElementById("main").currentStyle || window.getComputedStyle(document.getElementById("main"), null);
    if((parseInt(computedStyle.height) + 40) <= document.documentElement.clientHeight){
        document.getElementById("main").style.height = document.documentElement.clientHeight - 40 + 'px';
        console.log('tyt1');
    }else {
        document.getElementById("main").style.height = "100%";
        console.log('tyt2');
    }
    console.log(parseInt(computedStyle.height));
    console.log('clientHeight = ' + document.documentElement.clientHeight);
}
