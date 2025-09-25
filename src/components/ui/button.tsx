import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-tight ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:-translate-y-[1px] active:translate-y-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary via-[#0b2c6f] to-[#003865] text-primary-foreground shadow-[0_12px_30px_-15px_rgba(4,30,66,0.9)] hover:from-primary/95 hover:via-[#0b2c6f]/95 hover:to-[#003865]/95",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary/20 bg-white/80 text-primary shadow-[0_12px_30px_-18px_rgba(4,30,66,0.5)] hover:bg-primary/10",
        secondary:
          "bg-secondary/70 text-secondary-foreground shadow-[0_12px_30px_-18px_rgba(4,30,66,0.4)] hover:bg-secondary",
        ghost: "text-primary hover:bg-primary/10",
        link: "text-primary underline-offset-4 hover:underline",
        accent:
          "bg-gradient-to-r from-accent to-primary text-accent-foreground shadow-[0_12px_30px_-12px_rgba(33,92,160,0.8)] hover:from-accent/90 hover:to-primary/90",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
