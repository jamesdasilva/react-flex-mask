import Pipeline from './pipeline'

import Quantifiers from './pipes/quantifiers/expand-quantifiers'
import Direction from './pipes/direction/extract-direction'
import Mask from './pipes/mask'
import Prefix from './pipes/prefix/extract-prefix'
import Tokens from './pipes/mask/extract-tokens'

export {
  Quantifiers,
  Direction,
  Mask,
  Prefix,
  Tokens
}

export default Pipeline