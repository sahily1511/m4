export const DayMonthYear = (params) => {

    const date = new Date(params);
    const optionsDate = { day: '2-digit', month: 'long', year: 'numeric' };

    return date.toLocaleDateString('en-GB', optionsDate);
};

export const DayMonthYearWithTime = (params) => {

    const date = new Date(params);
    const optionsDate = { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'UTC' };

    return date.toLocaleString('en-GB', optionsDate);
};

export const OnlyTime = (params) => {

    const date = new Date(params);
    const optionsDate = { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'UTC' };

    return date.toLocaleString('en-GB', optionsDate);
};

export const YYYYMMDD = (params) => {
    const date = new Date(params);

    let year = date.getUTCFullYear();
    let month = String(date.getUTCMonth() + 1).padStart(2, '0');
    let day = String(date.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export const HideDateFromCurrent = (year) => {
    let currentDate = new Date();

    let newDate = new Date(currentDate);
    newDate.setFullYear(currentDate.getFullYear() - year);

    // Format the date as yyyy-mm-dd
    let formattedDate = newDate.toISOString().split("T")[0];
    return formattedDate;
};

export const DeepSearchSpace = (data, searchText) => {
    const normalizeText = (text) => text.toLowerCase().replace(/\s+/g, '');

    const searchLower = normalizeText(searchText);

    const deepSearchObject = (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            return Object.values(obj).some(value => deepSearchObject(value));
        }
        if (Array.isArray(obj)) {
            return obj.some(value => deepSearchObject(value));
        }
        if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') {
            return normalizeText(obj.toString()).includes(searchLower);
        }
        return false;
    };

    return data && data.filter(item => deepSearchObject(item));
};

export const IndianRupee = (rupee) => {

    let Rupee = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    return `${Rupee.format(rupee)}/-`
};