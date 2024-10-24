import { cn } from '@lib/helper/function'
import { HTMLAttributes } from 'react'

interface TProps extends HTMLAttributes<HTMLParagraphElement> {
  message?: string
  variant: 'error' | 'sucess' | 'warning'
}
const HelperMessage = (props: TProps) => {
  const { message, variant, className, ...attrs } = props

  return message ? (
    <div
      className={cn({
        [className || '']: className,
        'text-body-tiny font-normal': true,
        'text-error': variant === 'error',
        'text-warning': variant === 'warning',
        'text-sucess': variant === 'sucess'
      })}
      {...attrs}
    >
      {message}
    </div>
  ) : null
}

export default HelperMessage
