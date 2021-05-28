$(document).ready(function() {
    $('.nav_toggle_bars').click(function() {
        $('.site_content_wrapper').toggleClass('scaled');
    });
});

// Current date in English
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date();
var date = today.toLocaleDateString("en-US", options);
document.getElementById("date_today").innerHTML = date;

// Current time
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("digital_clock").innerText = time;
    document.getElementById("digital_clock").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();

//English to Bengali Date Conversion
function bangla_date() {
    const monthName = [
        'বৈশাখ', //0
        'জ্যৈষ্ঠ ', //1
        'আষাঢ় ', //2
        'শ্রাবণ ', //3
        'ভাদ্র', //4
        'আশ্বিন ', //5
        'কার্তিক ', //6
        'অগ্রহায়ণ ', //7
        'পৌষ ', //8
        'মাঘ', //9
        'ফাল্গুন ', //10
        'চৈত্র ' //11
    ];
    const dayName = [
        'রবিবার',
        'সোমবার',
        'মঙ্গলবার',
        'বুধবার',
        'বৃহস্পতিবার',
        'শুক্রবার',
        'শনিবার',
    ];

    let dateObj = new Date();
    let engWeekDay = dateObj.getDay();
    let engDay = dateObj.getDate();
    let engMonth = dateObj.getMonth() + 1;
    let engYear = dateObj.getFullYear();

    let variableDayL;
    let variableDayH;
    let variableEngDay;
    let variableMonth = 03;
    let variableYear = 593;

    if (engMonth == 4) {
        variableEngDay = 15;
        variableDayL = 14;
        variableDayH = 14;
    } else if (engMonth == 5 || engMonth == 6) {
        variableEngDay = 16;
        variableDayL = 15;
        variableDayH = 15;
    } else if (engMonth == 7) {
        variableEngDay = 18;
        variableDayL = 16;
        variableDayH = 17;
    } else if (engMonth == 8 || engMonth == 9) {
        variableEngDay = 18;
        variableDayL = 17;
        variableDayH = 17;
    } else if (engMonth == 10) {
        variableEngDay = 19;
        variableDayL = 18;
        variableDayH = 18;
    } else if (engMonth == 11) {
        variableEngDay = 18;
        variableDayL = 18;
        variableDayH = 17;
    } else if (engMonth == 12) {
        variableEngDay = 17;
        variableDayL = 18;
        variableDayH = 16;
    } else if (engMonth == 1) {
        variableEngDay = 15;
        variableDayL = 16;
        variableDayH = 14;
    } else if (engMonth == 2) {
        variableEngDay = 14;
        variableDayL = 14;
        variableDayH = 13;
    } else if (engMonth == 3) {
        variableEngDay = 16;
        variableDayL = 16;
        variableDayH = 15;
    }

    var banglaDay;
    var banglaMonth;
    var banglaYear;

    var finalEnlishToBanglaNumber = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };

    String.prototype.getDigitBanglaFromEnglish = function() {
        var retStr = this;
        for (var x in finalEnlishToBanglaNumber) {
            retStr = retStr.replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x]);
        }
        return retStr;
    };

    if (engDay < variableEngDay) {
        engDay = engDay + 31;
        banglaDay = (engDay - variableDayL).toLocaleString().getDigitBanglaFromEnglish();
        variableMonth = variableMonth + 1;
        if (engMonth <= variableMonth) {
            engMonth = engMonth + 12;
            banglaMonth = (engMonth - variableMonth).toLocaleString();
            variableYear = variableYear + 1;
            banglaYear = (engYear - variableYear).toLocaleString().getDigitBanglaFromEnglish().replace(",", "");
        } else {
            banglaMonth = (engMonth - variableMonth).toLocaleString();
            banglaYear = (engYear - variableYear).toLocaleString().getDigitBanglaFromEnglish().replace(",", "");
        }
    } else {
        banglaDay = (engDay - variableDayH).toLocaleString().getDigitBanglaFromEnglish();
        if (engMonth <= variableMonth) {
            engMonth = engMonth + 12;
            banglaMonth = (engMonth - variableMonth).toLocaleString();
            variableYear = variableYear + 1;
            banglaYear = (engYear - variableYear).toLocaleString().getDigitBanglaFromEnglish().replace(",", "");
        } else {
            banglaMonth = (engMonth - variableMonth).toLocaleString();
            banglaYear = (engYear - variableYear).toLocaleString().getDigitBanglaFromEnglish().replace(",", "");
        }
    }

    document.getElementById('date_today_bangla').innerHTML = dayName[engWeekDay] + ", " + banglaDay + " " + monthName[banglaMonth - 1] + ", " + banglaYear;

}
bangla_date();

//Toggle Button Date Conversion
const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
    if (document.getElementById('chk').checked) {
        document.getElementById("date_today").style.display = "none";
        document.getElementById("date_today_bangla").style.display = "block";
    } else {
        document.getElementById("date_today").style.display = "block";
        document.getElementById("date_today_bangla").style.display = "none";
    }
});

// Mobile View Dropdown menu
function dropdown1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

function dropdown2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.nav_toggle_dropdown_btn')) {
        var dropdowns = document.getElementsByClassName("nav_toggle_dropdown_content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Main News Slider
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2500);
}