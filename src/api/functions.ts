import Resizer from "react-image-file-resizer";

export const findValueByKey = (array: any, key: any) => {
    if (array && key in array && array[key] !== "") {
        return array[key];
    }
    return null;
}