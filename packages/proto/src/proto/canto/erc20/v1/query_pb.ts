// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file canto/erc20/v1/query.proto (package canto.erc20.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair } from "./erc20_pb";
import { Params } from "./genesis_pb";

/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 *
 * @generated from message canto.erc20.v1.QueryTokenPairsRequest
 */
export class QueryTokenPairsRequest extends Message<QueryTokenPairsRequest> {
  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryTokenPairsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.erc20.v1.QueryTokenPairsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTokenPairsRequest {
    return new QueryTokenPairsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTokenPairsRequest {
    return new QueryTokenPairsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTokenPairsRequest {
    return new QueryTokenPairsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTokenPairsRequest | PlainMessage<QueryTokenPairsRequest> | undefined, b: QueryTokenPairsRequest | PlainMessage<QueryTokenPairsRequest> | undefined): boolean {
    return proto3.util.equals(QueryTokenPairsRequest, a, b);
  }
}

/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 *
 * @generated from message canto.erc20.v1.QueryTokenPairsResponse
 */
export class QueryTokenPairsResponse extends Message<QueryTokenPairsResponse> {
  /**
   * @generated from field: repeated canto.erc20.v1.TokenPair token_pairs = 1;
   */
  tokenPairs: TokenPair[] = [];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryTokenPairsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.erc20.v1.QueryTokenPairsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token_pairs", kind: "message", T: TokenPair, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTokenPairsResponse {
    return new QueryTokenPairsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTokenPairsResponse {
    return new QueryTokenPairsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTokenPairsResponse {
    return new QueryTokenPairsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTokenPairsResponse | PlainMessage<QueryTokenPairsResponse> | undefined, b: QueryTokenPairsResponse | PlainMessage<QueryTokenPairsResponse> | undefined): boolean {
    return proto3.util.equals(QueryTokenPairsResponse, a, b);
  }
}

/**
 * QueryTokenPairRequest is the request type for the Query/TokenPair RPC method.
 *
 * @generated from message canto.erc20.v1.QueryTokenPairRequest
 */
export class QueryTokenPairRequest extends Message<QueryTokenPairRequest> {
  /**
   * token identifier can be either the hex contract address of the ERC20 or the
   * Cosmos base denomination
   *
   * @generated from field: string token = 1;
   */
  token = "";

  constructor(data?: PartialMessage<QueryTokenPairRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.erc20.v1.QueryTokenPairRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTokenPairRequest {
    return new QueryTokenPairRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTokenPairRequest {
    return new QueryTokenPairRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTokenPairRequest {
    return new QueryTokenPairRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTokenPairRequest | PlainMessage<QueryTokenPairRequest> | undefined, b: QueryTokenPairRequest | PlainMessage<QueryTokenPairRequest> | undefined): boolean {
    return proto3.util.equals(QueryTokenPairRequest, a, b);
  }
}

/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 *
 * @generated from message canto.erc20.v1.QueryTokenPairResponse
 */
export class QueryTokenPairResponse extends Message<QueryTokenPairResponse> {
  /**
   * @generated from field: canto.erc20.v1.TokenPair token_pair = 1;
   */
  tokenPair?: TokenPair;

  constructor(data?: PartialMessage<QueryTokenPairResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.erc20.v1.QueryTokenPairResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "token_pair", kind: "message", T: TokenPair },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTokenPairResponse {
    return new QueryTokenPairResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTokenPairResponse {
    return new QueryTokenPairResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTokenPairResponse {
    return new QueryTokenPairResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTokenPairResponse | PlainMessage<QueryTokenPairResponse> | undefined, b: QueryTokenPairResponse | PlainMessage<QueryTokenPairResponse> | undefined): boolean {
    return proto3.util.equals(QueryTokenPairResponse, a, b);
  }
}

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message canto.erc20.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.erc20.v1.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 *
 * @generated from message canto.erc20.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * @generated from field: canto.erc20.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.erc20.v1.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}
