import React, { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'align-center justfy-center flex items-center justify-center rounded-lg border border-b-4 border-white p-2 text-white opacity-90 hover:opacity-100 disabled:cursor-default disabled:opacity-50',
  variants: {
    size: {
      default: '',
      md: '',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export type IButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button>

export default function Button({ className, size, ...props }: IButtonProps) {
  return (
    <button className={button({ size, className })} {...props}>
      {props.children}
    </button>
  )
}
