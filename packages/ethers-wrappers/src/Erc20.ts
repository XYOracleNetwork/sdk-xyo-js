import { assertEx } from '@xylabs/assert'
import { EthAddress } from '@xylabs/eth-address'
import { BurnableErc20, BurnableErc20__factory as BurnableErc20Factory } from '@xyo-network/typechain'
import { Provider, Signer } from 'ethers'

import { XyoEthersWrapperBase } from './EthersBase'

/** @deprecated use @xyo-network/typechain instead*/
export class XyoErc20Wrapper extends XyoEthersWrapperBase {
  public contract: BurnableErc20

  constructor(address: EthAddress, provider: Provider, signer?: Signer) {
    super(provider, signer)
    this.contract = BurnableErc20Factory.connect(address.toString(), this.signer ?? this.provider)
  }

  public async approve(spender: EthAddress, amount: bigint) {
    return await this.contract.approve(spender.toString(), amount)
  }

  public async getAddress() {
    return assertEx(EthAddress.fromString(await this.contract.getAddress()))
  }

  public async getAllowance(spender: EthAddress, address: EthAddress) {
    return await this.contract.allowance(address.toString(), spender.toString())
  }

  public async getBalance(address: EthAddress) {
    return await this.contract.balanceOf(address.toString())
  }

  public async getMaxBalance(address: EthAddress) {
    return await this.contract.balanceOf(address.toString())
  }
}
