import { AminoConverters } from '@cosmjs/stargate'
import { MsgConvertCoin, MsgConvertERC20 } from '../../proto/canto/erc20/v1/tx_pb.js'
import { createAminoConverter } from '../../amino/objectConverter.js'

// TODO: Add MsgUpdateParams registration when type is added
export function createERC20AminoConverters(): AminoConverters {
  return {
    ...createAminoConverter(MsgConvertCoin, 'evmos/MsgConvertCoin'),
    ...createAminoConverter(MsgConvertERC20, 'evmos/MsgConvertERC20'),
  }
}
