$().ready(function(){
  //html in .web-dev-foundations (for full time courses)
  var fullTimeInfo = $('.course-calendar-info').html();
  //html for part-time courses
  var partTimeInfo = $('<div class="web-dev-foundations"><h4>Web Development Foundations &lt;/&gt;</h4><p>MONTHS 1-6</p><p>HTML, CSS, JavaScript</p></div><div class="software-dev-foundations"><h4>Software Development Foundations</h4><p>MONTHS 7-12</p><p>.NET, C#</p></div>')

  languageCalendars();
  fullTimeMonths("Ruby");

  //full course link clicked
  $('.full').click(function(){
    $('.course-calendar-info').html('');
    $('.course-calendar-months ul').html('');
    var language = $('.software-dev-foundations input:checked').val();
    fullTimeMonths("Ruby");
    calendarInfo(fullTimeInfo);
    languageCalendars();
  });
  //radio button changed
      //part time link clicked
  $('.part').click(function(){
    $('.course-calendar-months ul').html('');
    $('.course-calendar-info').html('')
    partTimeMonths();
    calendarInfo(partTimeInfo);
  })
});

//add event listeners to radio boxes
function languageCalendars(){
  console.log("event listened")
  $('.software-dev-foundations input:radio').change(function(event){
    $('.course-calendar-months ul').html('');
      var language = $('.software-dev-foundations input:checked').val();
      fullTimeMonths(language);
  })
}


function fullTimeMonths(language){
  switch (language) {
    case "Ruby":
      var schedule = ['url("calendar_images/html5.png")','url("calendar_images/html5.png")','url("calendar_images/html5.png")','url("calendar_images/rails.png")','url("calendar_images/rails.png")',,'url("calendar_images/rails.png")','#ccc','#ccc','#ccc','#ccc','#ccc','#ccc'];
      courseMonths(schedule);
      break;
    case "net":
      var schedule = ['#ccc','#ccc','#ccc',,'url("calendar_images/html5.png")','url("calendar_images/html5.png")','url("calendar_images/html5.png")','url("calendar_images/net.jpg")','url("calendar_images/net.jpg")','url("calendar_images/net.jpg")', '#ccc', '#ccc', '#ccc'];
      courseMonths(schedule);
      break;
    case "node":
      var schedule = ['#ccc','#ccc','#ccc','#ccc','#ccc','#ccc', 'url("calendar_images/html5.png")','url("calendar_images/html5.png")','url("calendar_images/html5.png")', 'url("calendar_images/node.png")', 'url("calendar_images/node.png")', 'url("calendar_images/node.png")']
        courseMonths(schedule);
      break;
  }
}

function partTimeMonths(language) {
  var schedule = ['url("calendar_images/html5.png")','url("calendar_images/html5.png")','url("calendar_images/html5.png")','url("calendar_images/html5.png")','url("calendar_images/html5.png")', 'url("calendar_images/html5.png")','url("calendar_images/net.jpg")','url("calendar_images/net.jpg")','url("calendar_images/net.jpg")','url("calendar_images/net.jpg")','url("calendar_images/net.jpg")','url("calendar_images/net.jpg")'];

  courseMonths(schedule);
}

function courseMonths(monthArray){
  monthArray.forEach(function(background){
    var calMonth = $('<li></li>');
    calMonth.css('background', background + ' no-repeat');
    $('.course-calendar-months ul').append(calMonth);
  })
}

function calendarInfo(info){
  var calendarInfo = $('.course-calendar-info')
  calendarInfo.append(info);
};
