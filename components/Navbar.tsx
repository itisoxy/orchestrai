import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b px-6 py-4 flex gap-6 bg-white">

      <Link href="/" className="font-bold">
        OrchestrAI
      </Link>

      <Link href="/dashboard">
        Dashboard
      </Link>

      <Link href="/train">
        Create Job
      </Link>

      <Link href="/monitor">
        Monitor
      </Link>

      <Link href="/checkpoints">
        Checkpoints
      </Link>

      <Link href="/billing">
        Billing
      </Link>

    </nav>
  )
}