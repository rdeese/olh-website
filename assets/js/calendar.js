const config = {
  buttonText: {
    today:    'Today',
    month:    'By Month',
    week:     'week',
    day:      'day',
    list:     'List'
  },
  defaultView: 'month',
  events: {
    googleCalendarId: 'oldlazarusharp@gmail.com'
  },
  eventRender: function(eventObj, $el) {
    $el.popover({
      title: eventObj.title,
      content: eventObj.location,
      trigger: 'hover',
      placement: 'top',
      container: '#calendar'
    });
  },
  googleCalendarApiKey: 'AIzaSyDJ_T2hPfk2rYeq6HSwzZ8yrSKx6CzaamM',
  googleCalendarError: function(error) {
    console.log("Error was", error);
  },
  header: {
    left:   'prev,next today',
    center: 'title',
    right:  'month,listMonth'
  }
}

const onReady = () => {
  $('#calendar').fullCalendar(config);
}

$(document).ready(onReady);
