import {
  clearFastrrCheckoutSession,
  syncFastrrUserSession,
} from "../services/shiprocketCheckout";

const ACCESS_TOKEN_KEY = "accessToken";
const USER_KEY = "user";

export const authStorage = {
  getToken: () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  },

  setAuth: ({ token, user }) => {
    if (token) {
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
    }

    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    // Synchronize FastRR checkout session: if account changed, purge old FastRR data
    syncFastrrUserSession(user);

    // Notify the application that authentication has changed
    window.dispatchEvent(new Event("authUpdated"));
  },

  getUser: () => {
    try {
      const user = localStorage.getItem(USER_KEY);

      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  },

  clearAuth: () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);

    // Completely purge FastRR checkout session so next user doesn't see old details
    clearFastrrCheckoutSession();

    // Notify the application that authentication has changed
    window.dispatchEvent(new Event("authUpdated"));
  },

  isAuthenticated: () => {
    return Boolean(localStorage.getItem(ACCESS_TOKEN_KEY));
  },
};