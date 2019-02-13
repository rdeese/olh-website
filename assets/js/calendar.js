const onEventClick = (event) => {
  return false;
};

const onEventRender = (event, $el) => {
  console.log("Event is", event);
  const template = document.createElement('template');
  template.innerHTML = `
    <div>
      <b>Where:</b><br>
      ${event.location}
      <br><br>
      <b>When:</b><br>
      ${event.start.format('h:mm A')} - ${event.end.format('h:mm A')}
    </div>
  `.trim()

  window.myTemplate = template;
    
  $el.popover({
    title: event.title,
    content: template.content.firstChild,
    trigger: 'click',
    placement: 'top',
    container: '#calendar',
    html: true
  });
};

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
  eventClick: onEventClick,
  eventRender: onEventRender,
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
