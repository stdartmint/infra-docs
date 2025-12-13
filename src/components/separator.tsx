export const Separator: React.FC<{
  className?: string
}> = ({ className }) => {
  return (
    <hr
      className={
        "relative flex w-full items-center h-px border-0 text-gray-300 [background:linear-gradient(90deg,transparent_5px,currentcolor_5px,currentcolor_11px,transparent_11px)_50%_50%/11px_1px_repeat-x] mt-6 mb-6" +
        className
      }
    />
  )
}
