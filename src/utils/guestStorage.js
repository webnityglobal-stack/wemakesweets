/**
 * Utility to manage unique guest user identifiers across sessions.
 */
const GUEST_ID_KEY = "wms_guest_id";

export const guestStorage = {
  getGuestId: () => {
    try {
      if (typeof window === "undefined" || !window.localStorage) {
        return `guest_${Date.now()}`;
      }
      let guestId = localStorage.getItem(GUEST_ID_KEY);
      if (!guestId) {
        guestId = `guest_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
        localStorage.setItem(GUEST_ID_KEY, guestId);
      }
      return guestId;
    } catch {
      return `guest_${Date.now()}`;
    }
  },

  setGuestId: (id) => {
    try {
      if (typeof window !== "undefined" && window.localStorage && id) {
        localStorage.setItem(GUEST_ID_KEY, String(id).trim());
      }
    } catch (_) {}
  },

  clearGuestId: () => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.removeItem(GUEST_ID_KEY);
      }
    } catch (_) {}
  },
};
