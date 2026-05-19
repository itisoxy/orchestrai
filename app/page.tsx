import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="px-10 py-20">
        <div className="max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
            Distributed AI Infrastructure
          </p>

          <h1 className="text-6xl font-bold mb-6">
            OrchestrAI
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mb-10">
            A simulated LLM fine-tuning control plane for configuring training jobs,
            monitoring GPU telemetry, tracking training logs, and managing model checkpoints.
          </p>

          <div className="flex gap-4">
            <Link
              href="/dashboard"
              className="bg-black text-white px-6 py-3 rounded"
            >
              Open Dashboard
            </Link>

            <Link
              href="/train"
              className="border px-6 py-3 rounded bg-white"
            >
              Create Training Job
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white border rounded p-6">
            <h2 className="font-bold mb-2">
              DeepSpeed / FSDP Simulation
            </h2>

            <p className="text-gray-600">
              Configure distributed fine-tuning strategies used in modern AI infrastructure.
            </p>
          </div>

          <div className="bg-white border rounded p-6">
            <h2 className="font-bold mb-2">
              Live GPU Telemetry
            </h2>

            <p className="text-gray-600">
              Monitor simulated GPU usage, memory, loss, epoch progress, and logs.
            </p>
          </div>

          <div className="bg-white border rounded p-6">
            <h2 className="font-bold mb-2">
              Checkpoint Workflow
            </h2>

            <p className="text-gray-600">
              View saved model checkpoints from simulated fine-tuning runs.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}