import { MsgEditValidator } from '@althea-net/althea-proto/src/codegen/cosmos/staking/v1beta1/tx'
import {
  generateTypes,
  createMsgEditValidator,
  MSG_EDIT_VALIDATOR_TYPES,
} from '@althea-net/eip712'
import {
  MsgEditValidatorParams,
  createTxMsgEditValidator,
} from './editValidator'
import { createTransactionPayload } from '../base'
import TestUtils from '../../tests/utils'

const { context } = TestUtils
const params: MsgEditValidatorParams =
  TestUtils.validatorParams as MsgEditValidatorParams

describe('test tx payload', () => {
  it('produces tx payloads as expected', () => {
    const types = generateTypes(MSG_EDIT_VALIDATOR_TYPES)
    const message = createMsgEditValidator(
      params.moniker,
      params.identity,
      params.website,
      params.securityContact,
      params.details,
      params.validatorAddress,
      params.commissionRate,
      params.minSelfDelegation,
    )
    const typedData = {
      types,
      message,
    }

    const messageCosmos = MsgEditValidator.fromJSON({
    description: {
      moniker: params.moniker,
      identity: params.identity,
      website: params.website,
      securityContact: params.securityContact,
      details: params.details,
    },
    validatorAddress: params.validatorAddress,
    commissionRate: params.commissionRate,
    minSelfDelegation: params.minSelfDelegation,
  })

    const payload = createTxMsgEditValidator(context, params)
    const expectedPayload = createTransactionPayload(
      context,
      typedData,
      messageCosmos,
    )
    expect(payload).toStrictEqual(expectedPayload)
  })
})
