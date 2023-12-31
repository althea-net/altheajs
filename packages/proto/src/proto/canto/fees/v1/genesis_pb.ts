// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file canto/fees/v1/genesis.proto (package canto.fees.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Fee } from "./fees_pb";

/**
 * GenesisState defines the module's genesis state.
 *
 * @generated from message canto.fees.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * module parameters
   *
   * @generated from field: canto.fees.v1.Params params = 1;
   */
  params?: Params;

  /**
   * active registered contracts for fee distribution
   *
   * @generated from field: repeated canto.fees.v1.Fee fees = 2;
   */
  fees: Fee[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.fees.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "fees", kind: "message", T: Fee, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

/**
 * Params defines the fees module params
 *
 * @generated from message canto.fees.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * parameter to enable fees
   *
   * @generated from field: bool enable_fees = 1;
   */
  enableFees = false;

  /**
   * developer_shares defines the proportion of the transaction fees to be
   * distributed to the registered contract owner
   *
   * @generated from field: string developer_shares = 2;
   */
  developerShares = "";

  /**
   * addr_derivation_cost_create defines the cost of address derivation for
   * verifying the contract deployer at fee registration
   *
   * @generated from field: uint64 addr_derivation_cost_create = 3;
   */
  addrDerivationCostCreate = protoInt64.zero;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.fees.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "enable_fees", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "developer_shares", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "addr_derivation_cost_create", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
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
