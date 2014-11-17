var codeMode = window.conditionID == 1;
var nLessons = 10;

var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

var current_lesson = 0;
var maxLesson = -1;

var congrats_html = null;

function preload_congrats () {
  var url = 'congrats.html';
  var request = new XMLHttpRequest ();
  request.onload = function() {
    congrats_html = this.responseText;
  };
  request.open("get", url, true);
  request.send();
}

preload_congrats();

function congrats() {
    $('.modal-body').html(congrats_html);
    $('#myModal').modal('show');
}

function place_corral_cover () {
  var corral_cover = $("#corral-cover");
  corral_cover.children().each(function (i,j) {
    var v = $(this).offsetWidth;
  });
  check_lg_buttons ();
}

function check_lg_buttons () {
  var corral_cover = $("#corral-cover");
  if ($(document).width() < 1000) {
    var large_buttons = $('.btn-lg');
    large_buttons.removeClass('btn-lg');
    large_buttons.addClass('had-btn-lg');
  }
  else {
    $('.had-btn-lg').addClass('btn-lg').removeClass('had-btn-lg');
  }
}


var idx_to_title = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  ];

var btn_to_left = [
  ];

var codeHelp = {};

function preload_left () {
  for (var i = 0; i < nLessons; i++) {
    var url = (codeMode ? "code" : "block") + "-help/bjchoc_0" + i + '.html';
    var request = new XMLHttpRequest ();
    request.onload = function(idx) {
      return function () {
		if (this.status != 200) return;
      	btn_to_left[idx] = this.status == 200 ? this.responseText : "";
    } }(i);
    request.open("get", url, true);
    request.send();
  }
}

preload_left();

function click_btn_num ( i ) {
  $('.btn-top').eq(i).click();
}

function place_in_corral_cover(elems) {
  var corralCover = $('#corral-cover');
  corralCover.empty();
  var inner = $('<div>', {class: 'div-corral-cover-inner'});
  corralCover.append($('<div>', {class: 'div-corral-cover'}).append(inner));
  inner.append(elems);
  check_lg_buttons();
}

function do_it_for_me() {
  if (current_lesson !== nLessons - 1) {

  }
  // The do it for me button should not exist otherwise.
}

function fix_code() {

}

function corralBtn(text, callback) {
  return $('<button>', {class: 'btn btn-primary btn-lg btn-corral-cover'}).text(text).click(callback)
}

function show_answer() {
  //var answer_png = 'pngs/' + btn_to_name[current_lesson] + '_answer.png';
  //place_in_corral_cover ([
  //    $('<a>', {'href':answer_png, 'target':'_blank'}).append(
  //      $('<img>', {'class': 'answer-png', 'src': answer_png})),
  //    corralBtn('Do it for me.', do_it_for_me)
  //  ]);
}

function killvideo() {
	src = $('#video').attr('src');
	$('#video').attr('src', '');
	$('#video').attr('src', src);
}

function load_left (idx, callback) {
  var leftText = btn_to_left[idx];
  if (leftText !== undefined) {
    callback(leftText);
  }
  else {
    setTimeout(function () {load_left(idx, callback)}, 100);
  }
}

var tileList = [
	["whenClicked", "turnAround"],
	["number", "goToX()Y", "pickRandom()To"],
	["say", "string"],
	["forever", "wait"],
	["var", "vardec", "assign", "minus"],
	["plus"],
	["greaterthan", "if()then"],
	[],
	["penDown", "penUp", "clear"],
];

function btn_click () {
  var index = parseInt($(this).data('index'));
  var frame = document.getElementById("snap");
  if (frame && frame.contentWindow) {
      frame.contentWindow.logEvent("changeSection", {index: index});
  }
  var first_click_copy = first_click;
  $('.btn-top').eq(current_lesson).button('toggle');
  if (index === nLessons - 1) {
    $('#corral-cover').addClass('my-hidden');
  }
  else {
    $('#corral-cover').removeClass('my-hidden');
    if (index >= 4) {
      //document.getElementById('snap').contentWindow.show_make_a_variable = true;
    }
    else {
      //document.getElementById('snap').contentWindow.show_make_a_variable = false;
    }
    // If this is the first click, then the project has already been loaded.
    if (!first_click) {
      //get_proj_xml ( name + ".xml", partial_load_xml);
    }
  }

  $('.btn-top').eq(index).button('toggle');
  current_lesson = index;
  if (current_lesson === nLessons - 1) {
    $('#done-button').removeClass('hidden');
    $('#snaplogo-img').addClass('hidden');
    $('#page-subtitle').addClass('hidden');
    $('#next-button').addClass('hidden');
  }
  else {
    $('#next-button').removeClass('hidden');
  }
  location.hash = "#" + (current_lesson + 1);
  if (current_lesson !== nLessons - 1) {
    place_in_corral_cover([
      corralBtn('Show me the answer.', show_answer),
      corralBtn('Replace my code.', fix_code)
      ]);
  } else {
    place_in_corral_cover([
      corralBtn('Replace my code.', fix_code)
      ]);
  }
  load_left(index, function (leftText) {
    $('#left').html(leftText);
  });
  if (index > maxLesson) {
	maxLesson = index
	prepare_modal(current_lesson, function () {
		$('#myModal').modal('toggle');
	});
  }
  first_click = false;

  setHelperContents();
}

function setHelperContents() {
  var funcs = [];
  for (var i = 0; i <= current_lesson && i < tileList.length; i++) {
	funcs = funcs.concat(tileList[i]);
  }
  var frame = document.getElementById("snap");
  frame.contentWindow.setPane(funcs);
}

function next_lesson() {
  click_btn_num(current_lesson + 1);
}

function prepare_modal(idx, callback) {
  load_left(idx, function (leftText) {
    $('.modal-title').html(idx_to_title[idx]);
    $.ajax({
      url : "modaltext/bjchoc_0" + idx + "_modal.html",
      dataType: "text",
      success : function (data) {
        $('.modal-body').html(data);
        $('.modal-body').append($('<button>',
          {class:'btn btn-lg btn-primary', style: 'margin-left:80%;', text:'OK'}
          ).click(function () {
            $('#myModal').modal('toggle');
        }));
        callback();
      }
    });
  });
}

$(document).ready(function () {
  //document.getElementById('snap').contentWindow.corralCover = $('#corral-cover');
  //document.getElementById('snap').contentWindow.dont_export_hidden = true;
  $(".modal").click( function() { killvideo(); } );
});

var first_lesson_loaded = false;

var first_click = true;
$(window).load(function () {
  var top_buttons = $('#buttons-top')
  var i;

  var num = window.location.hash.substring(1);

  if (num === '') {
    num = 1;
    location.hash = "#" + num;
  }
  else {
    current_lesson = parseInt(num) - 1;
  }

  for ( var i = 0; i < nLessons; i++ ) {
    top_buttons.append($('<button>',
      {class:'btn-top btn btn-lg btn-default'})
      .text('#' + (i + 1)).data('index', i).on('click', btn_click));
    }
  $(".btn-top").eq(current_lesson).button('toggle');
  $(".btn-top").eq(current_lesson).click();
  $("#next-button").on('click', next_lesson);
});

$(window).resize(function () {
  waitForFinalEvent(place_corral_cover, 10, "place_corral_cover");
});
