// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file canto/fees/v1/tx.proto (package canto.fees.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * MsgRegisterFee defines a message that registers a Fee
 *
 * @generated from message canto.fees.v1.MsgRegisterFee
 */
export class MsgRegisterFee extends Message<MsgRegisterFee> {
  /**
   * contract hex address
   *
   * @generated from field: string contract_address = 1;
   */
  contractAddress = "";

  /**
   * bech32 address of message sender, must be the same as the origin EOA
   * sending the transaction which deploys the contract
   *
   * @generated from field: string deployer_address = 2;
   */
  deployerAddress = "";

  /**
   * bech32 address of account receiving the transaction fees
   *
   * @generated from field: string withdraw_address = 3;
   */
  withdrawAddress = "";

  /**
   * array of nonces from the address path, where the last nonce is
   * the nonce that determines the contract's address - it can be an EOA nonce
   * or a factory contract nonce
   *
   * @generated from field: repeated uint64 nonces = 4;
   */
  nonces: bigint[] = [];

  constructor(data?: PartialMessage<MsgRegisterFee>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.fees.v1.MsgRegisterFee";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "deployer_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "withdraw_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "nonces", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterFee {
    return new MsgRegisterFee().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterFee {
    return new MsgRegisterFee().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterFee {
    return new MsgRegisterFee().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRegisterFee | PlainMessage<MsgRegisterFee> | undefined, b: MsgRegisterFee | PlainMessage<MsgRegisterFee> | undefined): boolean {
    return proto3.util.equals(MsgRegisterFee, a, b);
  }
}

/**
 * MsgRegisterFeeResponse defines the MsgRegisterFee response type
 *
 * @generated from message canto.fees.v1.MsgRegisterFeeResponse
 */
export class MsgRegisterFeeResponse extends Message<MsgRegisterFeeResponse> {
  constructor(data?: PartialMessage<MsgRegisterFeeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.fees.v1.MsgRegisterFeeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterFeeResponse {
    return new MsgRegisterFeeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterFeeResponse {
    return new MsgRegisterFeeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterFeeResponse {
    return new MsgRegisterFeeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRegisterFeeResponse | PlainMessage<MsgRegisterFeeResponse> | undefined, b: MsgRegisterFeeResponse | PlainMessage<MsgRegisterFeeResponse> | undefined): boolean {
    return proto3.util.equals(MsgRegisterFeeResponse, a, b);
  }
}

/**
 * MsgCancelFee defines a message that cancels a registered a Fee
 *
 * @generated from message canto.fees.v1.MsgCancelFee
 */
export class MsgCancelFee extends Message<MsgCancelFee> {
  /**
   * contract hex address
   *
   * @generated from field: string contract_address = 1;
   */
  contractAddress = "";

  /**
   * deployer bech32 address
   *
   * @generated from field: string deployer_address = 2;
   */
  deployerAddress = "";

  constructor(data?: PartialMessage<MsgCancelFee>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.fees.v1.MsgCancelFee";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "deployer_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelFee {
    return new MsgCancelFee().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelFee {
    return new MsgCancelFee().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelFee {
    return new MsgCancelFee().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelFee | PlainMessage<MsgCancelFee> | undefined, b: MsgCancelFee | PlainMessage<MsgCancelFee> | undefined): boolean {
    return proto3.util.equals(MsgCancelFee, a, b);
  }
}

/**
 * MsgCancelFeeResponse defines the MsgCancelFee response type
 *
 * @generated from message canto.fees.v1.MsgCancelFeeResponse
 */
export class MsgCancelFeeResponse extends Message<MsgCancelFeeResponse> {
  constructor(data?: PartialMessage<MsgCancelFeeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.fees.v1.MsgCancelFeeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelFeeResponse {
    return new MsgCancelFeeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelFeeResponse {
    return new MsgCancelFeeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelFeeResponse {
    return new MsgCancelFeeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelFeeResponse | PlainMessage<MsgCancelFeeResponse> | undefined, b: MsgCancelFeeResponse | PlainMessage<MsgCancelFeeResponse> | undefined): boolean {
    return proto3.util.equals(MsgCancelFeeResponse, a, b);
  }
}

/**
 * MsgUpdateFee defines a message that updates the withdraw address for a
 * registered Fee
 *
 * @generated from message canto.fees.v1.MsgUpdateFee
 */
export class MsgUpdateFee extends Message<MsgUpdateFee> {
  /**
   * contract hex address
   *
   * @generated from field: string contract_address = 1;
   */
  contractAddress = "";

  /**
   * deployer bech32 address
   *
   * @generated from field: string deployer_address = 2;
   */
  deployerAddress = "";

  /**
   * new withdraw bech32 address for receiving the transaction fees
   *
   * @generated from field: string withdraw_address = 3;
   */
  withdrawAddress = "";

  constructor(data?: PartialMessage<MsgUpdateFee>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.fees.v1.MsgUpdateFee";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "deployer_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "withdraw_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateFee {
    return new MsgUpdateFee().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateFee {
    return new MsgUpdateFee().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateFee {
    return new MsgUpdateFee().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateFee | PlainMessage<MsgUpdateFee> | undefined, b: MsgUpdateFee | PlainMessage<MsgUpdateFee> | undefined): boolean {
    return proto3.util.equals(MsgUpdateFee, a, b);
  }
}

/**
 * MsgUpdateFeeResponse defines the MsgUpdateFee response type
 *
 * @generated from message canto.fees.v1.MsgUpdateFeeResponse
 */
export class MsgUpdateFeeResponse extends Message<MsgUpdateFeeResponse> {
  constructor(data?: PartialMessage<MsgUpdateFeeResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.fees.v1.MsgUpdateFeeResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateFeeResponse {
    return new MsgUpdateFeeResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateFeeResponse {
    return new MsgUpdateFeeResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateFeeResponse {
    return new MsgUpdateFeeResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateFeeResponse | PlainMessage<MsgUpdateFeeResponse> | undefined, b: MsgUpdateFeeResponse | PlainMessage<MsgUpdateFeeResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateFeeResponse, a, b);
  }
}

