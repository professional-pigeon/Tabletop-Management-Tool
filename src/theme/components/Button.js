const deleteColor = 'gray.900'
const deleteHoverColor = 'gray.700'
const linkColor = 'white'
const linkHoverColor = 'gray.100'
const addColor = 'purple.200'
const addHoverColor = 'purple.100'

const Button = {
  defaultProps: {},
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    'card-delete': {
      bg: deleteColor,
      color: 'white',
      h: "8",
      minW: "8",
      fontSize: "sm",
      px: "3",
      _hover: {
        bg: deleteHoverColor
      }
    },
    'delete': {
      bg: deleteColor,
      color: 'white',
      h: "10",
      minW: "10",
      fontSize: "md",
      px: "4",
      _hover: {
        bg: deleteHoverColor
      }
    },
    'card-link': {
      bg: linkColor,
      border: '1px solid',
      borderColor: 'black',
      color: 'black',
      h: "8",
      minW: "8",
      fontSize: "sm",
      px: "3",
      _hover: {
        bg: linkHoverColor,
      }
    },
    'link': {
      bg: linkColor,
      border: '1px solid',
      borderColor: 'black',
      color: 'black',
      h: "10",
      minW: "10",
      fontSize: "md",
      px: "4",
      _hover: {
        bg: linkHoverColor,
      }
    },
    'add-modal': {
      bg: addColor,
      color: 'black',
      h: "10",
      minW: "10",
      fontSize: "md",
      px: "4",
      _hover: {
        bg: addHoverColor,
      }
    },
  },
} 

export default Button