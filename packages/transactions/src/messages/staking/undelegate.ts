import { createMsgUndelegate as protoMsgUndelegate } from '@althea-net/proto'

import {
  generateTypes,
  MSG_UNDELEGATE_TYPES,
  createMsgUndelegate,
} from '@althea-net/eip712'

import { createTransactionPayload, TxContext } from '../base'

export interface MsgUndelegateParams {
  validatorAddress: string
  amount: string
  denom: string
}

export const createEIP712MsgUndelegate = (
  context: TxContext,
  params: MsgUndelegateParams,
) => {
  const types = generateTypes(MSG_UNDELEGATE_TYPES)

  const message = createMsgUndelegate(
    context.sender.accountAddress,
    params.validatorAddress,
    params.amount,
    params.denom,
  )

  return {
    types,
    message,
  }
}

export const createCosmosMsgUndelegate = (
  context: TxContext,
  params: MsgUndelegateParams,
) => {
  return protoMsgUndelegate(
    context.sender.accountAddress,
    params.validatorAddress,
    params.amount,
    params.denom,
  )
}

/**
 * Creates a transaction for a MsgUndelegate object.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/staking#msgundelegate | MsgUndelegate}
 *
 * @param context - Transaction Context
 * @param params - MsgUndelegate Params
 * @returns Transaction with the MsgUndelegate payload
 *
 */
export const createTxMsgUndelegate = (
  context: TxContext,
  params: MsgUndelegateParams,
) => {
  const typedData = createEIP712MsgUndelegate(context, params)
  const cosmosMsg = createCosmosMsgUndelegate(context, params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
