import { assertEx } from '@xylabs/assert'
import { EthAddress } from '@xylabs/eth-address'
import { BurnableErc20, BurnableErc20__factory as BurnableErc20Factory } from '@xyo-network/typechain'
import { Provider, Signer } from 'ethers'

import { XyoEthersWrapperBase } from './EthersBase.js'

/** @deprecated use @xyo-network/typechain instead*/
export class XyoErc20Wrapper extends XyoEthersWrapperBase {
  contract: BurnableErc20

  constructor(address: EthAddress, provider: Provider, signer?: Signer) {
    super(provider, signer)
    this.contract = BurnableErc20Factory.connect(address.toString(), this.signer ?? this.provider)
  }

  async approve(spender: EthAddress, amount: bigint) {
    return await this.contract.approve(spender.toString(), amount)
  }

  async getAddress() {
    return assertEx(EthAddress.fromString(await this.contract.getAddress()))
  }

  async getAllowance(spender: EthAddress, address: EthAddress) {
    return await this.contract.allowance(address.toString(), spender.toString())
  }

  async getBalance(address: EthAddress) {
    return await this.contract.balanceOf(address.toString())
  }

  async getMaxBalance(address: EthAddress) {
    return await this.contract.balanceOf(address.toString())
  }
}
