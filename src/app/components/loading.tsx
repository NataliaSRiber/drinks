export default function Loading() {
  return (
    <div className="absolute left-1/2 top-[67%] -translate-x-1/2 -translate-y-1/2 md:top-[60%]">
      <div className="after:z-1 h-32 w-32 animate-spin rounded-[50%] bg-gradient-to-tr from-transparent from-0% via-transparent via-40% to-blueneon-300 backdrop-hue-rotate-360 before:absolute before:bottom-[6px] before:left-[6px] before:right-[6px] before:top-[6px] before:z-[1000] before:rounded-[50%] before:bg-newblue-950 after:absolute after:bottom-[0px] after:left-[0px] after:right-[0px] after:top-[0px] after:rounded-[50%] after:bg-gradient-to-tr after:from-transparent after:from-0% after:via-transparent after:via-40% after:to-blueneon-300 after:blur-[30px] md:h-44 md:w-44"></div>
    </div>
  )
}
