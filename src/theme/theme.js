import { extendTheme } from '@chakra-ui/react'
import styles from './styles'
import Button from './components/Button'

const overrides = {
  styles, 
  components: {
    Button
  }
}

export default extendTheme(overrides)
