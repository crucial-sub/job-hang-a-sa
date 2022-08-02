export const limitStringLength = (str: string) => {
    let sliceStr;
    str.length > 14 ? (sliceStr = `${str.slice(0, 14)}...`) : (sliceStr = str);
    return sliceStr;
};
