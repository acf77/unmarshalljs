/**
 * Function to unmarshall data.
 * Unmarshalling is the process of converting data in a serialized format (like JSON) back into an object.
 * It needs a schema to know what properties the object should have, and the data to unmarshall.
 *
 * This implementation is based on Go language's json.Unmarshal function (https://pkg.go.dev/encoding/json#Unmarshal)
 * @param schema a JS class with the properties that the object should have
 * @param data the data to unmarshall as an object
 * @returns an instance of the class with the properties from the data
 */
export declare function unmarshall<T extends new () => unknown>(schema: T, data: Record<string, any>): {
    data: InstanceType<T> | null;
    error: Error | null;
};
