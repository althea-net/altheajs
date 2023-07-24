import { MsgSetWithdrawAddress } from '@althea-net/althea-proto/src/codegen/cosmos/distribution/v1beta1/tx.js'

import {
  generateTypes,
  createMsgSetWithdrawAddress,
  MSG_SET_WITHDRAW_ADDRESS_TYPES,
} from '@althea-net/eip712'
import {
  MsgSetWithdrawAddressParams,
  createTxMsgSetWithdrawAddress,
} from './setWithdrawAddress'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context } = TestUtils
const delegatorAddress = context.sender.accountAddress
const withdrawAddress = TestUtils.addrVal1

const params: MsgSetWithdrawAddressParams = {
  delegatorAddress,
  withdrawAddress,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_SET_WITHDRAW_ADDRESS_TYPES)
    const message = createMsgSetWithdrawAddress(
      params.delegatorAddress,
      params.withdrawAddress,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = MsgSetWithdrawAddress.fromJSON(params)

    const payload = createTxMsgSetWithdrawAddress(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
