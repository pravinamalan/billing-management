export class Helper {
    static errorMessageCapitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)?.toLowerCase();
    }
    /**
     * Escape special characters
     */
    static escapeHtml(text) {
        if (typeof text != 'string')
            return text

        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

}
