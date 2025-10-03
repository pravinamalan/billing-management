import { toggleLoaderHideShow } from "../helper/common-helper";
import { CalendarService } from "../services/calendarService";

export function renderCalendar(elementId, events) {
    const calanderService = new CalendarService;
    const calendarEl = document.getElementById(elementId);

    if (!calendarEl) return;

    calendarEl.innerHTML = "";
    const calendar = new FullCalendar.Calendar(calendarEl, {
        height: "auto",
        dayMaxEvents: 10,
        headerToolbar: {
            right: "dayGridMonth,dayGridWeek,timeGridDay",
            center: "title",
            left: "prev,next,today",
        },
        buttonText: {
            today: "today",
            dayGridMonth: "Month",
            dayGridWeek: "Week",
            timeGridDay: "Day",
        },
        initialView: "dayGridMonth",
        events: async function (fetchInfo, successCallback, failureCallback) {

            toggleLoaderHideShow("calendar-wrapper", "show");

            const startDate = moment(fetchInfo.start).format("YYYY-MM-DD");
            const endDate = moment(fetchInfo.end).format("YYYY-MM-DD");

            try {
                const events = await calanderService.getEventsByRange(startDate, endDate);
                successCallback(events);
            } catch (err) {
                failureCallback(err);
            } finally {
                toggleLoaderHideShow("calendar-wrapper", "hide");
            }
        },

        dateClick: async function (info) {
            toggleLoaderHideShow("calendar-wrapper", "show");

            try {
                const events = await calanderService.getEventsByDate(info.dateStr);

                if (events.length > 0) {
                    console.log(
                        `Events on ${info.dateStr}:\n` +
                        events.map(e => e.title).join("\n")
                    );
                } else {
                    console.log(`No events found on ${info.dateStr}`);
                }
            } catch (err) {
                console.error(err);
            } finally {
                toggleLoaderHideShow("calendar-wrapper", "hide");
            }
        }
    });

    calendar.render();
}
