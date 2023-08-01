// @generated by protoc-gen-es v1.3.0 with parameter "target=ts"
// @generated from file canto/inflation/v1/genesis.proto (package canto.inflation.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ExponentialCalculation, InflationDistribution } from "./inflation_pb";

/**
 * GenesisState defines the inflation module's genesis state.
 *
 * @generated from message canto.inflation.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * params defines all the paramaters of the module.
   *
   * @generated from field: canto.inflation.v1.Params params = 1;
   */
  params?: Params;

  /**
   * amount of past periods, based on the epochs per period param
   *
   * @generated from field: uint64 period = 2;
   */
  period = protoInt64.zero;

  /**
   * inflation epoch identifier
   *
   * @generated from field: string epoch_identifier = 3;
   */
  epochIdentifier = "";

  /**
   * number of epochs after which inflation is recalculated
   *
   * @generated from field: int64 epochs_per_period = 4;
   */
  epochsPerPeriod = protoInt64.zero;

  /**
   * number of epochs that have passed while inflation is disabled
   *
   * @generated from field: uint64 skipped_epochs = 5;
   */
  skippedEpochs = protoInt64.zero;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.inflation.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "period", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "epoch_identifier", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "epochs_per_period", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "skipped_epochs", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
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
 * Params holds parameters for the inflation module.
 *
 * @generated from message canto.inflation.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * type of coin to mint
   *
   * @generated from field: string mint_denom = 1;
   */
  mintDenom = "";

  /**
   * variables to calculate exponential inflation
   *
   * @generated from field: canto.inflation.v1.ExponentialCalculation exponential_calculation = 2;
   */
  exponentialCalculation?: ExponentialCalculation;

  /**
   * inflation distribution of the minted denom
   *
   * @generated from field: canto.inflation.v1.InflationDistribution inflation_distribution = 3;
   */
  inflationDistribution?: InflationDistribution;

  /**
   * parameter to enable inflation and halt increasing the skipped_epochs
   *
   * @generated from field: bool enable_inflation = 4;
   */
  enableInflation = false;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "canto.inflation.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "mint_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "exponential_calculation", kind: "message", T: ExponentialCalculation },
    { no: 3, name: "inflation_distribution", kind: "message", T: InflationDistribution },
    { no: 4, name: "enable_inflation", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
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
