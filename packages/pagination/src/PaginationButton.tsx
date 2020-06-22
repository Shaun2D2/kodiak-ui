import * as React from 'react'
import { VariantProps } from '@kodiak-ui/core'
import { Button } from '@kodiak-ui/primitives'

type PaginationButtonProps = { children: React.ReactNode } & VariantProps &
  React.HTMLAttributes<HTMLButtonElement>

export function PaginationButton({ children }: PaginationButtonProps) {
  return (
    <Button
      variantKey="paginations"
      variant="button"
      __base={{
        bg: 'white',
        borderRight: '1px solid',
        borderColor: 'gray.3',
        borderRadius: 'none',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        color: 'text',
        fontSize: 2,
        lineHeight: '16px',
        py: 2,
        px: 3,
        '&:first-of-type': {
          borderTopLeftRadius: 'default',
          borderBottomLeftRadius: 'default',
        },
        '&:last-of-type': {
          borderTopRightRadius: 'default',
          borderBottomRightRadius: 'default',
          borderRight: 'none',
        },
      }}
    >
      {children}
    </Button>
  )
}
