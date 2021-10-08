const localStorage = window.localStorage;

const prefix = 'invests_partners_';

class LocalStorage {
    exist(key) {
        if (localStorage.getItem(prefix + key)) {
            return true
        }
        return false;
    }

    getJson(key) {
        if (this.exist(key)) {
            return JSON.parse(localStorage.getItem(prefix + key));
        }
        return null;
    }

    setJson(key, data) {
        localStorage.setItem(prefix + key, JSON.stringify(data));
    }

    get(key) {
        if (this.exist(key)) {
            return localStorage.getItem(prefix + key);
        }
        return null;
    }

    set(key, data) {
        localStorage.setItem(prefix + key, data);
    }

    remove(key) {
        localStorage.removeItem(prefix + key);
    }

    clear() {
        localStorage.clear();
    }
}

export default new LocalStorage();
