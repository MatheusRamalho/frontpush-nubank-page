import { ComponentPropsWithoutRef } from 'react'

export function FacebookIcon(props: ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M32.6 8h-4.8a8 8 0 00-8 8v4.8H15v6.4h4.8V40h6.4V27.2H31l1.6-6.4h-6.4V16a1.6 1.6 0 011.6-1.6h4.8V8z"
                stroke="#868587"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
