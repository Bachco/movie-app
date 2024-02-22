/** Primitive function for find value in array by key */
export const findValueByKey = (array: any, key: any) => {
    if (array && key in array && array[key] !== "") {
        return array[key];
    }
    return null;
}