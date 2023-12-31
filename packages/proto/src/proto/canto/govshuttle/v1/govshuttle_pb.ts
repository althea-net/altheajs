// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file canto/govshuttle/v1/govshuttle.proto (package canto.govshuttle.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Params defines the parameters for the module.
 *
 * @generated from message canto.govshuttle.v1.Params
 */
export class Params extends Message<Params> {
  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.govshuttle.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

/**
 * Define this object so that the govshuttle.pb.go file is generate, implements govtypes.Content
 *
 * @generated from message canto.govshuttle.v1.LendingMarketProposal
 */
export class LendingMarketProposal extends Message<LendingMarketProposal> {
  /**
   * title
   *
   *
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: canto.govshuttle.v1.LendingMarketMetadata metadata = 3;
   */
  metadata?: LendingMarketMetadata;

  constructor(data?: PartialMessage<LendingMarketProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.govshuttle.v1.LendingMarketProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "metadata", kind: "message", T: LendingMarketMetadata },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LendingMarketProposal {
    return new LendingMarketProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LendingMarketProposal {
    return new LendingMarketProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LendingMarketProposal {
    return new LendingMarketProposal().fromJsonString(jsonString, options);
  }

  static equals(a: LendingMarketProposal | PlainMessage<LendingMarketProposal> | undefined, b: LendingMarketProposal | PlainMessage<LendingMarketProposal> | undefined): boolean {
    return proto3.util.equals(LendingMarketProposal, a, b);
  }
}

/**
 * treasury proposal type,
 *
 * @generated from message canto.govshuttle.v1.TreasuryProposal
 */
export class TreasuryProposal extends Message<TreasuryProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: canto.govshuttle.v1.TreasuryProposalMetadata metadata = 3;
   */
  metadata?: TreasuryProposalMetadata;

  constructor(data?: PartialMessage<TreasuryProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.govshuttle.v1.TreasuryProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "metadata", kind: "message", T: TreasuryProposalMetadata },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TreasuryProposal {
    return new TreasuryProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TreasuryProposal {
    return new TreasuryProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TreasuryProposal {
    return new TreasuryProposal().fromJsonString(jsonString, options);
  }

  static equals(a: TreasuryProposal | PlainMessage<TreasuryProposal> | undefined, b: TreasuryProposal | PlainMessage<TreasuryProposal> | undefined): boolean {
    return proto3.util.equals(TreasuryProposal, a, b);
  }
}

/**
 * @generated from message canto.govshuttle.v1.TreasuryProposalMetadata
 */
export class TreasuryProposalMetadata extends Message<TreasuryProposalMetadata> {
  /**
   * proposalID, for querying proposals in EVM side, determined by order in gov propsal queue
   *
   * @generated from field: uint64 PropID = 1;
   */
  PropID = protoInt64.zero;

  /**
   * bytestring representing account addresses 
   *
   * @generated from field: string recipient = 2;
   */
  recipient = "";

  /**
   * @generated from field: uint64 amount = 3;
   */
  amount = protoInt64.zero;

  /**
   * canto or note
   *
   * @generated from field: string denom = 4;
   */
  denom = "";

  constructor(data?: PartialMessage<TreasuryProposalMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.govshuttle.v1.TreasuryProposalMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "PropID", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TreasuryProposalMetadata {
    return new TreasuryProposalMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TreasuryProposalMetadata {
    return new TreasuryProposalMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TreasuryProposalMetadata {
    return new TreasuryProposalMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: TreasuryProposalMetadata | PlainMessage<TreasuryProposalMetadata> | undefined, b: TreasuryProposalMetadata | PlainMessage<TreasuryProposalMetadata> | undefined): boolean {
    return proto3.util.equals(TreasuryProposalMetadata, a, b);
  }
}

/**
 * @generated from message canto.govshuttle.v1.LendingMarketMetadata
 */
export class LendingMarketMetadata extends Message<LendingMarketMetadata> {
  /**
   * @generated from field: repeated string Account = 1;
   */
  Account: string[] = [];

  /**
   * @generated from field: uint64 PropId = 2;
   */
  PropId = protoInt64.zero;

  /**
   * @generated from field: repeated uint64 values = 3;
   */
  values: bigint[] = [];

  /**
   * @generated from field: repeated string calldatas = 4;
   */
  calldatas: string[] = [];

  /**
   * @generated from field: repeated string signatures = 5;
   */
  signatures: string[] = [];

  constructor(data?: PartialMessage<LendingMarketMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.govshuttle.v1.LendingMarketMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Account", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "PropId", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "values", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 4, name: "calldatas", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "signatures", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LendingMarketMetadata {
    return new LendingMarketMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LendingMarketMetadata {
    return new LendingMarketMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LendingMarketMetadata {
    return new LendingMarketMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: LendingMarketMetadata | PlainMessage<LendingMarketMetadata> | undefined, b: LendingMarketMetadata | PlainMessage<LendingMarketMetadata> | undefined): boolean {
    return proto3.util.equals(LendingMarketMetadata, a, b);
  }
}

