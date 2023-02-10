import { Signer } from '@ethersproject/abstract-signer'
import { Provider } from '@ethersproject/providers'
import { assertEx, BigNumber, EthAddress } from '@xylabs/sdk-js'
import { BurnableErc20, BurnableErc20__factory as BurnableErc20Factory } from '@xyo-network/typechain'

import { XyoEthersWrapperBase } from './EthersBase'

export class XyoErc20Wrapper extends XyoEthersWrapperBase {
  public contract: BurnableErc20

  constructor(address: EthAddress, provider: Provider, signer?: Signer) {
    super(provider, signer)
    this.contract = BurnableErc20Factory.connect(address.toString(), this.signer ?? this.provider)
  }

  public async approve(spender: EthAddress, amount: BigNumber) {
    return await this.contract.approve(spender.toString(), amount.toString(10))
  }

  public getAddress() {
    return assertEx(EthAddress.fromString(this.contract.address))
  }

  public async getAllowance(spender: EthAddress, address: EthAddress) {
    return await this.contract.allowance(address.toString(), spender.toString())
  }

  public async getBalance(address: EthAddress) {
    return new BigNumber((await this.contract.balanceOf(address.toString())).toString())
  }

  public async getMaxBalance(address: EthAddress) {
    return new BigNumber((await this.contract.balanceOf(address.toString())).toString())
  }
}
