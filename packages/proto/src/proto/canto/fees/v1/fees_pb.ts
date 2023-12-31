// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file canto/fees/v1/fees.proto (package canto.fees.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Fee defines an instance that organizes fee distribution conditions for the
 * owner of a given smart contract
 *
 * @generated from message canto.fees.v1.Fee
 */
export class Fee extends Message<Fee> {
  /**
   * hex address of registered contract
   *
   * @generated from field: string contract_address = 1;
   */
  contractAddress = "";

  /**
   * bech32 address of contract deployer
   *
   * @generated from field: string deployer_address = 2;
   */
  deployerAddress = "";

  /**
   * bech32 address of account receiving the transaction fees it defaults to
   * deployer_address
   *
   * @generated from field: string withdraw_address = 3;
   */
  withdrawAddress = "";

  constructor(data?: PartialMessage<Fee>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.fees.v1.Fee";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "deployer_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "withdraw_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Fee {
    return new Fee().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Fee {
    return new Fee().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Fee {
    return new Fee().fromJsonString(jsonString, options);
  }

  static equals(a: Fee | PlainMessage<Fee> | undefined, b: Fee | PlainMessage<Fee> | undefined): boolean {
    return proto3.util.equals(Fee, a, b);
  }
}

