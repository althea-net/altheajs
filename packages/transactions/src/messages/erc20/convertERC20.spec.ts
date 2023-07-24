import { MsgConvertERC20 } from '@althea-net/althea-proto/src/codegen/canto/erc20/v1/tx.js'

import {
  generateTypes,
  createMsgConvertERC20,
  MSG_CONVERT_ERC20_TYPES,
} from '@althea-net/eip712'
import { MsgConvertERC20Params, createTxMsgConvertERC20 } from './convertERC20'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context } = TestUtils

const contractAddress = TestUtils.addrHex2
const amount = TestUtils.amount1
const receiverBech32 = TestUtils.addr1
const senderHex = TestUtils.addrHex1

const params: MsgConvertERC20Params = {
  contractAddress,
  amount,
  receiverBech32,
  senderHex,
}

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_CONVERT_ERC20_TYPES)
    const message = createMsgConvertERC20(
      params.contractAddress,
      params.amount,
      params.receiverBech32,
      params.senderHex,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = MsgConvertERC20.fromJSON({
      contractAddress: params.contractAddress,
      amount: params.amount,
      receiver: params.receiverBech32,
      sender: params.senderHex,
    })

    const payload = createTxMsgConvertERC20(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
