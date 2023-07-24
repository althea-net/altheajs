import { MsgDelegate } from '@althea-net/althea-proto/src/codegen/cosmos/staking/v1beta1/tx.js'

import {
  generateTypes,
  MSG_DELEGATE_TYPES,
  createMsgDelegate,
} from '@althea-net/eip712'

import { createTransactionPayload, TxContext } from '../base.js'

export interface MsgDelegateParams {
  validatorAddress: string
  amount: string
  denom: string
}

const createEIP712MsgDelegate = (
  context: TxContext,
  params: MsgDelegateParams,
) => {
  const types = generateTypes(MSG_DELEGATE_TYPES)

  const message = createMsgDelegate(
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

const createCosmosMsgDelegate = (
  context: TxContext,
  params: MsgDelegateParams,
) => {
  return MsgDelegate.fromJSON({
    delegatorAddress: context.sender.accountAddress,
    validatorAddress: params.validatorAddress,
    amount: {amount: params.amount, denom: params.denom},
  })
}

/**
 * Creates a transaction for a MsgDelegate object.
 *
 * @remarks
 * This method creates a transaction wrapping the Cosmos SDK's
 * {@link https://docs.cosmos.network/main/modules/staking#msgdelegate | MsgDelegate}
 *
 * @param context - Transaction Context
 * @param params - MsgDelegate Params
 * @returns Transaction with the MsgDelegate payload
 *
 */
export const createTxMsgDelegate = (
  context: TxContext,
  params: MsgDelegateParams,
) => {
  const typedData = createEIP712MsgDelegate(context, params)
  const cosmosMsg = createCosmosMsgDelegate(context, params)

  return createTransactionPayload(context, typedData, cosmosMsg)
}
