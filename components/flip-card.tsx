"use client"

import { useEffect, useState } from "react"

interface FlipCardProps {
  value: number
  label: string
}

export default function FlipCard({ value, label }: FlipCardProps) {
  const [currentValue, setCurrentValue] = useState(value)
  const [previousValue, setPreviousValue] = useState(value)
  const [isFlipping, setIsFlipping] = useState(false)

  useEffect(() => {
    // If the value has changed
    if (value !== currentValue) {
      setPreviousValue(currentValue)
      setCurrentValue(value)
      setIsFlipping(true)

      // Reset the flipping state after animation completes
      const timer = setTimeout(() => {
        setIsFlipping(false)
      }, 600) // Animation duration

      return () => clearTimeout(timer)
    }
  }, [value, currentValue])

  // Format the number to always have two digits
  const formattedCurrent = currentValue.toString().padStart(2, "0")
  const formattedPrevious = previousValue.toString().padStart(2, "0")

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 perspective">
        {/* Top half (static) */}
        <div className="absolute inset-0 h-1/2 bg-[#2c2c44] rounded-t-lg overflow-hidden shadow-inner z-20">
          <div className="absolute inset-0 flex items-end justify-center pb-0">
            <span className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#fb6087] translate-y-1/2">
              {formattedCurrent}
            </span>
          </div>
        </div>

        {/* Bottom half (static) */}
        <div className="absolute inset-0 top-1/2 bg-[#34364f] rounded-b-lg overflow-hidden shadow-inner z-10">
          <div className="absolute inset-0 flex items-start justify-center pt-0">
            <span className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#fb6087] -translate-y-1/2">
              {formattedCurrent}
            </span>
          </div>
        </div>

        {/* Flipping top card */}
        <div
          className={`absolute inset-0 h-1/2 bg-[#34364f] rounded-t-lg overflow-hidden shadow-lg z-30 origin-bottom backface-hidden ${
            isFlipping ? "animate-flip-down" : ""
          }`}
        >
          <div className="absolute inset-0 flex items-end justify-center pb-0">
            <span className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#fb6087] translate-y-1/2">
              {formattedPrevious}
            </span>
          </div>
        </div>

        {/* Flipping bottom card */}
        <div
          className={`absolute inset-0 top-1/2 bg-[#2c2c44] rounded-b-lg overflow-hidden shadow-lg z-40 origin-top backface-hidden ${
            isFlipping ? "animate-flip-up" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 flex items-start justify-center pt-0">
            <span className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#fb6087] -translate-y-1/2">
              {formattedCurrent}
            </span>
          </div>
        </div>

        {/* Horizontal line in the middle */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-black bg-opacity-20 z-50"></div>
      </div>
      <span className="mt-4 text-xs sm:text-sm text-[#8486a9] tracking-[0.3em]">{label}</span>
    </div>
  )
}