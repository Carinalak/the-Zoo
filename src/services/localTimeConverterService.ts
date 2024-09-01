export const formatDateToLocal = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleString(undefined, {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).replace(" ", ", ");
};
