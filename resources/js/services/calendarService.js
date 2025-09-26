import { postPromise } from "../api/apiService";
import { apiEndPoints } from "../api/endPoints";

export class CalendarService {

    constructor() {

        this.baseUrl = apiEndPoints("HOME", "LIST");
    }

    /**
     * Fetch events between date range
     * @param {String} start - YYYY-MM-DD
     * @param {String} end - YYYY-MM-DD
     * @returns {Array} - array of events
     */
    async getEventsByRange(start, end) {
        try {
            const { status, data } = await postPromise(this.baseUrl, { start, end });
            if (status === 200) {
                return data;
            }
            return [];
        } catch (err) {
            console.error("Error fetching calendar events:", err);
            return [];
        }
    }

    /**
     * Fetch events for a single date
     * @param {String} date - YYYY-MM-DD
     * @returns {Array} - array of events
     */
    async getEventsByDate(date) {
        try {
            const { status, data } = await postPromise(this.baseUrl, { date });
            if (status === 200) {
                return data;
            }
            return [];
        } catch (err) {
            console.error("Error fetching events for date:", err);
            return [];
        }
    }
}
