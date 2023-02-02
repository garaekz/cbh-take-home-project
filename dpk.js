const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const hash = data => crypto.createHash("sha3-512").update(data).digest("hex");

const eventPartitionKey = event => {
  if (!event) return;
  return event.partitionKey || hash(JSON.stringify(event));
};
const ensureString = candidate => typeof candidate === "string" ? candidate : JSON.stringify(candidate);
const limitLength = candidate => candidate.length <= MAX_PARTITION_KEY_LENGTH ? candidate : hash(candidate);

exports.deterministicPartitionKey = event => limitLength(ensureString(eventPartitionKey(event) || TRIVIAL_PARTITION_KEY));
