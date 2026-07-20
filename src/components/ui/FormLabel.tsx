import type { ReactNode } from 'react'

type FormLabelProps = {
  htmlFor: string
  children: ReactNode
  className?: string
}

const FormLabel = ({
  htmlFor,
  children,
  className = '',
}: FormLabelProps) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  )
}

export default FormLabel
