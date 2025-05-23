import CountdownTimer from "@/components/countdown-timer"
import SocialLinks from "@/components/social-links"
import StarryBackground from "@/components/starry-background"
import MountainSilhouette from "@/components/mountain-silhouette"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-[#1e1e2e] text-white">
      <StarryBackground />

      <div className="z-10 flex flex-col items-center justify-center flex-1 w-full px-4">
        <h1 className="mb-16 text-xl font-bold tracking-[0.5em] text-center sm:text-2xl">WE&apos;RE LAUNCHING SOON</h1>

        <CountdownTimer
          targetDate={new Date(Date.now() + 8 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000 + 55 * 60 * 1000 + 41 * 1000)}
        />
      </div>

      <div className="z-0 relative index-0 w-full">
        <MountainSilhouette />
        <div className="z-20 top-10 pb-8 absolute pt-4 flex 
        justify-center left-0 right-0">
          <SocialLinks />
        </div>
      </div>
    </main>
  )
}
