var numBrands=104;
var bannersConteiner, num, moreBtn, numGor, bannersWidth, contactsBtn, closeContactsBtn, infoBtn, closeInfoBtn;

var content = 
    {
        "brand": [
            {"numBanners": "1"}, //brand 1  
            {"numBanners": "1"}, //brand 2  
            {"numBanners": "1"}, //brand 3   
            {"numBanners": "1"}, //brand 4    
            {"numBanners": "1"}, //brand 5    
            {"numBanners": "1"}, //brand 6   
            {"numBanners": "2"}, //brand 7  
            {"numBanners": "1"}, //brand 8   
            {"numBanners": "1"}, //brand 9  
            {"numBanners": "1"}, //brand 10  
            {"numBanners": "1"}, //brand 11  
            {"numBanners": "1"}, //brand 12    
            {"numBanners": "1"}, //brand 13  
            {"numBanners": "3"}, //brand 14  
            {"numBanners": "2"}, //brand 15  
            {"numBanners": "1"}, //brand 16  
            {"numBanners": "3"}, //brand 17  
            {"numBanners": "1"}, //brand 18  
            {"numBanners": "3"}, //brand 19  
            {"numBanners": "4"}, //brand 20  
            {"numBanners": "3"}, //brand 21  
            {"numBanners": "3"}, //brand 22     
            {"numBanners": "2"}, //brand 23    
            {"numBanners": "1"}, //brand 24  
            {"numBanners": "3"}, //brand 25  
            {"numBanners": "9"}, //brand 26  
            {"numBanners": "1"}, //brand 27  
            {"numBanners": "1"}, //brand 28  
            {"numBanners": "1"}, //brand 29  
            {"numBanners": "1"}, //brand 30  
            {"numBanners": "2"}, //brand 31  
            {"numBanners": "4"}, //brand 32  
            {"numBanners": "2"}, //brand 33 
            {"numBanners": "1"}, //brand 34   
            {"numBanners": "1"}, //brand 35  
            {"numBanners": "2"}, //brand 36     
            {"numBanners": "1"}, //brand 37  
            {"numBanners": "2"}, //brand 38  
            {"numBanners": "3"}, //brand 39  
            {"numBanners": "1"}, //brand 40  
            {"numBanners": "7"}, //brand 41  
            {"numBanners": "1"}, //brand 42  
            {"numBanners": "1"}, //brand 43  
            {"numBanners": "2"}, //brand 44  
            {"numBanners": "2"}, //brand 45  
            {"numBanners": "1"}, //brand 46  
            {"numBanners": "1"}, //brand 47  
            {"numBanners": "1"}, //brand 48  
            {"numBanners": "1"}, //brand 49  
            {"numBanners": "5"}, //brand 50  
            {"numBanners": "1"}, //brand 51  
            {"numBanners": "6"}, //brand 52  
            {"numBanners": "4"}, //brand 53  
            {"numBanners": "2"}, //brand 54  
            {"numBanners": "5"}, //brand 55
            {"numBanners": "1"}, //brand 56  
            {"numBanners": "5"}, //brand 57  
            {"numBanners": "15"}, //brand 58  
            {"numBanners": "2"}, //brand 59  
            {"numBanners": "2"}, //brand 60  
            {"numBanners": "2"}, //brand 61  
            {"numBanners": "4"}, //brand 62  
            {"numBanners": "3"}, //brand 63  
            {"numBanners": "2"}, //brand 64     
            {"numBanners": "2"}, //brand 65  
            {"numBanners": "9"}, //brand 66  
            {"numBanners": "2"}, //brand 67  
            {"numBanners": "2"}, //brand 68  
            {"numBanners": "1"}, //brand 69  
            {"numBanners": "8"}, //brand 70  
            {"numBanners": "1"}, //brand 71  
            {"numBanners": "3"}, //brand 72  
            {"numBanners": "1"}, //brand 73  
            {"numBanners": "2"}, //brand 74  
            {"numBanners": "5"}, //brand 75  
            {"numBanners": "4"}, //brand 76  
            {"numBanners": "15"}, //brand 77  
            {"numBanners": "2"}, //brand 78   
            {"numBanners": "2"}, //brand 79   
            {"numBanners": "2"}, //brand 80  
            {"numBanners": "1"}, //brand 81   
            {"numBanners": "19"}, //brand 82  
            {"numBanners": "17"}, //brand 83  
            {"numBanners": "3"}, //brand 84   
            {"numBanners": "10"}, //brand 85   
            {"numBanners": "3"}, //brand 86   
            {"numBanners": "18"}, //brand 87   
            {"numBanners": "2"}, //brand 88   
            {"numBanners": "3"}, //brand 89   
            {"numBanners": "5"}, //brand 90   
            {"numBanners": "9"}, //brand 91   
            {"numBanners": "5"}, //brand 92   
            {"numBanners": "11"}, //brand 93   
            {"numBanners": "2"}, //brand 94   
            {"numBanners": "6"}, //brand 95   
            {"numBanners": "3"}, //brand 96   
            {"numBanners": "15"}, //brand 97   
            {"numBanners": "5"}, //brand 98   
            {"numBanners": "48"}, //brand 99   
            {"numBanners": "25"},  //brand 100   
            {"numBanners": "11"}, //brand 101   
            {"numBanners": "109"}, //brand 102  
            {"numBanners": "21"}, //brand 103   
            {"numBanners": "15"} //brand 104      
        ]
    }

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
function showBanner(evt) {
        ga('send', 'event', 'banner', 'play',"ban'"+evt.id+"'");
        var curBanner = document.getElementById(evt.id);
        curBanner.parentElement.innerHTML = "<div class='bannerStopBtn' id='"+evt.id+"' onclick='hideBanner(this)'></div><iframe src='images/content/brand"+evt.id+"/ban"+content.brand[evt.id - 1].numBanners+"/index.html' frameborder='0' align='left'></iframe><div id='preloader' style='position: absolute; margin: 0px;'><img src='images/preloader.gif' alt='Preloader'></div> ";
}
function hideBanner (evt) {
    var curBanner = document.getElementById(evt.id)
    if(content.brand[evt.id - 1].numBanners == 1){
        curBanner.parentElement.innerHTML = "<div class='bannerPlayBtn' id='"+evt.id+"' onclick='showBanner(this)'><span>Click to play</span><img src='images/bannerPlayBtnBg.png'></div><div class='bannerImg'><img src='images/content/brand"+evt.id+"/ban"+content.brand[evt.id - 1].numBanners+"/img.jpg'></div>";
    }else{
        curBanner.parentElement.innerHTML = "<div class='bannerPlayBtn' id='"+evt.id+"' onclick='showBanner(this)'><span>Click to play</span><img src='images/bannerPlayBtnBg.png'></div><div class='bannerImg'><img src='images/content/brand"+evt.id+"/ban"+content.brand[evt.id - 1].numBanners+"/img.jpg'></div><div class='moreBanners' id='"+evt.id+"' onclick='showBrandBanners(this)'><span>More banners ></span></div>";
    }
}
function addNewBanners() {
    var bannersConteiner = document.getElementById("banners");
    for(var i=num; i>0; i--){
        if(numBrands>0) {
            var newBan = document.createElement("div");
            var banClassName = 'banner';
            newBan.setAttribute('class',banClassName);
            if(content.brand[numBrands - 1].numBanners == 1){
                newBan.innerHTML = "<div class='bannerPlayBtn' id='"+numBrands+"' onclick='showBanner(this)'><span>Click to play</span><img src='images/bannerPlayBtnBg.png'></div><div class='bannerImg'><img src='images/content/brand"+numBrands+"/ban"+content.brand[numBrands - 1].numBanners+"/img.jpg'></div>";
            }else{
                newBan.innerHTML = "<div class='bannerPlayBtn' id='"+numBrands+"' onclick='showBanner(this)'><span>Click to play</span><img src='images/bannerPlayBtnBg.png'></div><div class='bannerImg'><img src='images/content/brand"+numBrands+"/ban"+content.brand[numBrands - 1].numBanners+"/img.jpg'></div><div class='moreBanners' id='"+numBrands+"' onclick='showBrandBanners(this)'><span>More banners ></span></div>";
            }
            
            bannersConteiner.appendChild(newBan);
            numBrands--;
            if(numBrands==0) {
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
}
function showBrandBanners(evt){
    document.location.href = "brand_banners.html?page=brand"+evt.id+"&numBanners="+content.brand[evt.id - 1].numBanners;
}