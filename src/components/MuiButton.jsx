/** @format */

import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const ColorButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'var(--background-color-secondary)',
  textTransform: 'none',
  color: 'var( --text-color-secondary)',
  marginLeft: '25px',
  '&:hover': {
    backgroundColor: 'var(--background-color-tertiary)'
  }
}))

function MuiButton({ text, onClick }) {
  return (
    <div>
      <ColorButton variant='contained' onClick={onClick}>
        {text}
      </ColorButton>
    </div>
  )
}

export default MuiButton
