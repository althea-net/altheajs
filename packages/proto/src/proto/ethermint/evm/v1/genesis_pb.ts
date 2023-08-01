// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file ethermint/evm/v1/genesis.proto (package ethermint.evm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params, State } from "./evm_pb";

/**
 * GenesisState defines the evm module's genesis state.
 *
 * @generated from message ethermint.evm.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * accounts is an array containing the ethereum genesis accounts.
   *
   * @generated from field: repeated ethermint.evm.v1.GenesisAccount accounts = 1;
   */
  accounts: GenesisAccount[] = [];

  /**
   * params defines all the parameters of the module.
   *
   * @generated from field: ethermint.evm.v1.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.evm.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "accounts", kind: "message", T: GenesisAccount, repeated: true },
    { no: 2, name: "params", kind: "message", T: Params },
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
 * GenesisAccount defines an account to be initialized in the genesis state.
 * Its main difference between with Geth's GenesisAccount is that it uses a
 * custom storage type and that it doesn't contain the private key field.
 *
 * @generated from message ethermint.evm.v1.GenesisAccount
 */
export class GenesisAccount extends Message<GenesisAccount> {
  /**
   * address defines an ethereum hex formated address of an account
   *
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * code defines the hex bytes of the account code.
   *
   * @generated from field: string code = 2;
   */
  code = "";

  /**
   * storage defines the set of state key values for the account.
   *
   * @generated from field: repeated ethermint.evm.v1.State storage = 3;
   */
  storage: State[] = [];

  constructor(data?: PartialMessage<GenesisAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ethermint.evm.v1.GenesisAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "storage", kind: "message", T: State, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisAccount {
    return new GenesisAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisAccount {
    return new GenesisAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisAccount {
    return new GenesisAccount().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisAccount | PlainMessage<GenesisAccount> | undefined, b: GenesisAccount | PlainMessage<GenesisAccount> | undefined): boolean {
    return proto3.util.equals(GenesisAccount, a, b);
  }
}
