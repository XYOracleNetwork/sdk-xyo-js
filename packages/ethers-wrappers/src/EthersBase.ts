import { Signer } from '@ethersproject/abstract-signer'
import { BigNumber as EthersBigNumber } from '@ethersproject/bignumber'
import { Provider } from '@ethersproject/providers'
import { BigNumber } from '@xylabs/sdk-js'

export class XyoEthersWrapperBase {
  constructor(provider: Provider, signer?: Signer) {
    this.provider = provider
    this.signer = signer
  }

  static toBigNumber(input: EthersBigNumber) {
    return new BigNumber(input.toHexString(), 16)
  }

  protected provider: Provider

  protected signer?: Signer
}
