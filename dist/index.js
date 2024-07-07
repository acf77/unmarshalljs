function createObjectFromType(type) {
    return new type();
}
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
export function unmarshall(schema, data) {
    const objectFromType = createObjectFromType(schema);
    // Check if all properties in schema are present in data
    const missingKeys = Object.keys(objectFromType).filter((key) => !(key in data));
    if (missingKeys.length > 0) {
        return {
            data: null,
            error: Error(`Missing properties: ${missingKeys.join(", ")}`),
        };
    }
    // Create a new instance of the class
    const instance = new schema();
    // Assign the properties from data to the instance
    Object.keys(objectFromType)
        .filter((key) => key in data)
        .forEach((key) => {
        instance[key] = data[key];
    });
    return {
        data: instance,
        error: null,
    };
}
