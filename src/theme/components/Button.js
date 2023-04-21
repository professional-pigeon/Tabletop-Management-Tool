const deleteColor = 'pink.500'
const deleteHoverColor = 'pink.400'
const linkColor = 'white'
const linkHoverColor = 'gray.100'
const addColor = 'purple.200'
const addHoverColor = 'purple.100'
const updateColor = 'cyan.300'
const updateHoverColor = 'cyan.200'

const Button = {
  // defaultProps: {},
  // baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  // sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    'delete-card': {
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
    'link-card': {
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
    'link-base': {
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
    'update-modal': {
      bg: updateColor,
      color: 'black',
      h: "10",
      minW: "10",
      fontSize: "md",
      px: "4",
      _hover: {
        bg: updateHoverColor,
      }
    },
    'update-card': {
      bg: updateColor,
      color: 'black',
      h: "8",
      minW: "8",
      fontSize: "sm",
      px: "3",
      _hover: {
        bg: updateHoverColor,
      }
    },
  },
} 

export default Button