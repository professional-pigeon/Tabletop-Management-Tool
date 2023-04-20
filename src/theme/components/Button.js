const Button = {
  defaultProps: {},
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    'card-delete': {
      bg: 'red.500',
      color: 'white',
      h: "8",
      minW: "8",
      fontSize: "sm",
      px: "3",
    },
    'delete': {
      bg: 'red.500',
      color: 'white',
      h: "10",
      minW: "10",
      fontSize: "md",
      px: "4",
    }
  },
} 

export default Button