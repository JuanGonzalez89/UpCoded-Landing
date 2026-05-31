import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number | string
  name: string
  avatar?: string
  description: string
}

interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<HTMLDivElement, TestimonialCarouselProps>(
  (
    { className, testimonials, showArrows = true, showDots = true, ...props },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState<number>(0)

    const getInitials = (name: string) =>
      name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase() ?? "")
        .join("") || "U"

    const handleDragEnd = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (Math.abs(info.offset.x) > 100) {
        setExitX(info.offset.x)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          setExitX(0)
        }, 200)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative h-[26rem] w-full flex items-center justify-center",
          className
        )}
        {...props}
      >
        <div className="relative h-[23rem] w-full max-w-[38rem]">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex
            if (!isCurrentCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 overflow-hidden rounded-3xl cursor-grab active:cursor-grabbing",
                  "border border-outline-variant/30 bg-surface-container shadow-[0_24px_70px_rgba(0,0,0,0.35)]",
                )}
                style={{ zIndex: 3 }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: 0,
                  rotate: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  x: exitX,
                  y: 0,
                  rotate: exitX / 20,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary-container to-secondary opacity-80" />
                {showArrows && (
                  <div className="absolute inset-x-0 top-2 flex justify-between px-4">
                    <span className="text-2xl select-none cursor-pointer text-on-surface-variant/60 transition-colors hover:text-primary">
                      &larr;
                    </span>
                    <span className="text-2xl select-none cursor-pointer text-on-surface-variant/60 transition-colors hover:text-primary">
                      &rarr;
                    </span>
                  </div>
                )}
                <div className="flex h-full flex-col items-center justify-center gap-5 px-8 py-8 text-center">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/20 shadow-md"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary-container text-base font-semibold text-on-primary-container shadow-md ring-2 ring-primary/20">
                      {getInitials(testimonial.name)}
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-on-surface">
                    {testimonial.name}
                  </h3>
                  <p className="mx-auto max-w-[32rem] text-sm leading-6 text-on-surface-variant">
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
          {showDots && (
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    index === currentIndex
                      ? "bg-primary shadow-[0_0_12px_rgba(108,226,255,0.7)]"
                      : "bg-outline-variant/40",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
)
TestimonialCarousel.displayName = "TestimonialCarousel"
export { TestimonialCarousel, type Testimonial }
