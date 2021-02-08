/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import {add} from '@shared'

const color = 'white'

const Button: React.FC = () => {
  return (
    <div
      css={css`
        padding: 30px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hover to change color.
      {add(1, 3)}
    </div>
  )
}

export default Button
