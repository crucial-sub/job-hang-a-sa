export const limitStringLength = (
    targetString: string,
    limitNumber: number,
) => {
    let sliceString;
    targetString.length > limitNumber
        ? (sliceString = `${targetString.slice(0, limitNumber)}...`)
        : (sliceString = targetString);
    return sliceString;
};
