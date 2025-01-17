import { Readable } from "stream";

export type Body = Readable | Buffer | string;

export type Key = string | number;
export type Value = string | number | bigint | boolean;

export type Query = Record<Key, Value> | Value[][] | URLSearchParams | string;

export type Header = Value | Value[];
export type Headers = Record<Key, Header>;

export type Methods = "GET" | "PUT" | "HEAD" | "POST" | "PATCH" | "DELETE" | "OPTIONS";
export type Formats =
  | "status"
  | "statusText"
  | "headers"
  | "stream"
  | "buffer"
  | "bufferArray"
  | "text"
  | "json"
  | "arrayBuffer"
  | "blob";