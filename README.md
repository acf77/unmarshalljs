# Unmarshalling for JavaScript

Unmarshalling is the process of converting data in a serialized format (like JSON) back into an object.

It needs a schema to know what properties the object should have, and the data to unmarshall.

This implementation is based on Go language's json.Unmarshal function (<https://pkg.go.dev/encoding/json#Unmarshal>)

## Why unmarshalling?

Unmarshalling is useful when you need to convert data from a serialized format (like JSON) back into an object.

Unmarsahlling is used in APIs to convert the request body into an object, and in databases to convert the data from the database into an object. This object can be used in the application to manipulate the data.

## Usage

```typescript
import { unmarshal } from "unmarshalljs";

// Define the class that represents the data
// The class should have a constructor that initializes all fields
class ClassType {
  field1: string;
  field2: number;
  constructor() {
    this.field1 = "";
    this.field2 = 0;
  }
}

// Define the data to unmarshall
const dataToUnmarshall = {
  field1: "value1",
  field2: 42,
};

const { data, error } = unmarshall(ClassType, dataToUnmarshall);
```

If the data is valid, `data` will contain the unmarshalled object, and `error` will be `null`.

For instance, if the dataToUnmarshall has more fields than the ClassType, the extra fields will be ignored.

```typescript
const dataToUnmarshall = {
  field1: "value1",
  field2: 42,
  field3: "value3",
};

const { data, error } = unmarshall(ClassType, dataToUnmarshall);

// The data object will contain only the fields field1 and field2, field3 will be ignored
console.log(data); // { field1: "value1", field2: 42 }
```

If any of the fields in the dataToUnmarshall is not of the same type as the corresponding field in the ClassType, an error will be returned.

```typescript
const dataToUnmarshall = {
  field1: "value1",
  field2: "42",
};

const { data, error } = unmarshall(ClassType, dataToUnmarshall);

// The error object will contain the error message
console.log(error); // Missing properties: field2"
```

## Why a class and not interface/type?

Javascript classes are used because they can be instantiated, different from interfaces and types.

The unmarshalling process needs to create an object of the class type, so it needs a constructor. Interfaces and types don't have constructors, so they can't be used.

## Conclusion

Unmarshalling is a useful process to convert data from a serialized format back into an object. If you have doubts and need help, sent me a DM on Twitter: [@acfilho_dev](https://x.com/acfilho_dev). Or, feel free to open a issue on the GitHub repository.
