export default function Loading() {
  return (
    <div className="w-full h-screen m-0 p-0 box-border flex items-start justify-center min-h-full">
      <div className="relative w-[150px] h-[150px] rounded-[50%] bg-gradient-to-tr from-transparent from-0% via-transparent via-40% to-[#ccff15] before:absolute before:top-[6px] before:left-[6px] before:right-[6px] before:bottom-[6px] before:bg-newblue-950 before:rounded-[50%] before:z-[1000] after:absolute after:top-[0px] after:left-[0px] after:right-[0px] after:bottom-[0px] after:bg-gradient-to-tr after:from-transparent after:from-0% after:via-transparent after:via-40% after:to-[#ccff15] after:rounded-[50%] after:z-1 after:blur-[30px] animate-spin backdrop-hue-rotate-360">
      </div>
    </div>
  )
}