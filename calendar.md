---
layout: page
permalink: /calendar/
---

<script src="https://code.jquery.com/jquery-3.1.1.min.js"   
integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="https://rawgit.com/moment/moment/2.24.0/min/moment.min.js"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.0/fullcalendar.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.0/gcal.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.0/fullcalendar.min.css">
<link rel="stylesheet" media="print" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.0/fullcalendar.print.css">

<script>
$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyDJ_T2hPfk2rYeq6HSwzZ8yrSKx6CzaamM',
        events: {
          googleCalendarId: 'oldlazarusharp@gmail.com'
        },
        googleCalendarError: function(error) {
            console.log("Error was", error);
        },
        eventRender: function(eventObj, $el) {
            $el.popover({
              title: eventObj.title,
              content: eventObj.location,
              trigger: 'hover',
              placement: 'top',
              container: '#calendar'
            });
        }
	});
});
</script>

<div id="calendar" class="with-bootstrap"></div>
