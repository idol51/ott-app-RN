let timer: any;

export const debounce = (func: any, delay: number) => {
    return function (...args: any) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
};