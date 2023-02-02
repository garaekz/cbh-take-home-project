const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return TRIVIAL_PARTITION_KEY if event is falsy", () => {
    expect(deterministicPartitionKey()).toEqual("0");
  });

  it("should return partitionKey if event.partitionKey exists and its length is <= MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: "partitionKey" };
    expect(deterministicPartitionKey(event)).toEqual("partitionKey");
  });

  it("should return stringified partitionKey if event.partitionKey is not a string", () => {
    const event = { partitionKey: { a: 1, b: 2 } };
    expect(deterministicPartitionKey(event)).toEqual(JSON.stringify(event.partitionKey));
  });

  it("should return hashed partitionKey if event.partitionKey does not exist or its length is > MAX_PARTITION_KEY_LENGTH", () => {
    const event = { a: 1, b: 2 };
    const partitionKey = deterministicPartitionKey(event);
    expect(typeof partitionKey).toEqual("string");
    expect(partitionKey.length).toEqual(128);
  });

  it("should return hashed partitionKey if event.partitionKey is a string and its length is > MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: "a".repeat(300) };
    const partitionKey = deterministicPartitionKey(event);
    expect(typeof partitionKey).toEqual("string");
    expect(partitionKey.length).toEqual(128);
  });
});

