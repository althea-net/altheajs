// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file ethermint/feemarket/v1/genesis.proto (package ethermint.feemarket.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./feemarket_pb";

/**
 * GenesisState defines the feemarket module's genesis state.
 *
 * @generated from message ethermint.feemarket.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * params defines all the paramaters of the module.
   *
   * @generated from field: ethermint.feemarket.v1.Params params = 1;
   */
  params?: Params;

  /**
   * block gas is the amount of gas wanted on the last block before the upgrade.
   * Zero by default.
   *
   * @generated from field: uint64 block_gas = 3;
   */
  blockGas = protoInt64.zero;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.feemarket.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 3, name: "block_gas", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
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
