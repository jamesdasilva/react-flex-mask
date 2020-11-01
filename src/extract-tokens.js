import { keyChars } from './key-chars'

const extractTokens = (stringMask) => {
	const arrayMask = Array.from(stringMask)
	let token = {
    token: '',
    start: 0
	}
	const tokens = []
  let isToken = false
  let prevChar = ''
	for(let i = 0; i <= arrayMask.length; i++) {
		if(!keyChars.includes(arrayMask[i]) && i !== arrayMask.length) {
			if(!isToken) {
        token.end = i
        token.keyChar = true
        tokens.push(token)
        token = {
          token: '',
          start: i
        }
      }
      isToken = true
      token.token += arrayMask[i]
		} else {
      if(isToken || (i > 0 && arrayMask[i] !== prevChar)) {
        token.end = i
        token.keyChar = isToken ? false : true
        tokens.push(token)
        token = {
          token: '',
          start: i
        }
      }
      isToken = false
      token.token += arrayMask[i]
    }
    prevChar = arrayMask[i]
  }
	return tokens.filter(item => item.token !== '')
}

export default extractTokens
