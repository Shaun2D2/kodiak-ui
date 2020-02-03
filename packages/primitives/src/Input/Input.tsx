import styled from '@emotion/styled'
import { Theme, css } from 'theme-ui'
import { SerializedStyles } from '@emotion/serialize'
import {
  StyledSystemProps,
  variant,
  sx,
  shouldForwardProp,
  styledSystemProps,
} from '../Box/Box'

/**
 * base
 *
 * Generate the base CSS for the button component
 * that is aware of the Theme UI theme
 *
 * @param props
 */
export const baseStyles = ({ theme }: { theme: Theme }): SerializedStyles =>
  css({
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 'default',
    color: 'inherit',
    bg: 'transparent',
  })(theme)

type InputProps = {
  variant?: string
} & StyledSystemProps

/**
 * Box primitive component which is the base component for
 * all components in Kodiak
 */
export const Input = styled<'input', InputProps>('input', {
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  baseStyles,
  ({ variant: variantProp, theme }) =>
    variant({ variant: variantProp, theme, variantKey: 'inputs' }),
  ...styledSystemProps,
  sx,
)
