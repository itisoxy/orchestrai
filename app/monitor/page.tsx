'use client'

import { useEffect, useState } from 'react'

export default function MonitorPage() {
  const [gpu, setGpu] = useState(74)
  const [memory, setMemory] = useState(18)
  const [loss, setLoss] = useState(2.4)
  const [epoch, setEpoch] = useState(1)
  const [tokens, setTokens] = useState(220)

  const [logs, setLogs] = useState<string[]>([
    'Initializing distributed training job...',
    'Loading dataset shards...',
    'Starting DeepSpeed ZeRO-3 engine...',
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setGpu(Math.floor(70 + Math.random() * 25))
      setMemory(Math.floor(16 + Math.random() * 12))
      setTokens(Math.floor(190 + Math.random() * 90))

      setLoss((prev) =>
        Math.max(0.4, Number((prev - 0.08).toFixed(2)))
      )

      setEpoch((prev) =>
        prev < 10 ? prev + 1 : prev
      )

      setLogs((prev) => [
        `Epoch update | loss improving | tokens/sec stable | checkpoint pending`,
        ...prev,
      ])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
          Live Training Telemetry
        </p>

        <h1 className="text-4xl font-bold">
          Training Monitor
        </h1>

        <p className="text-gray-600 mt-2">
          Simulated real-time metrics for a distributed LLM fine-tuning run.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
        <div className="bg-white border rounded p-6">
          <h2 className="font-bold text-gray-600">GPU Usage</h2>
          <p className="text-4xl font-bold mt-4">{gpu}%</p>
        </div>

        <div className="bg-white border rounded p-6">
          <h2 className="font-bold text-gray-600">Memory</h2>
          <p className="text-4xl font-bold mt-4">{memory}GB</p>
        </div>

        <div className="bg-white border rounded p-6">
          <h2 className="font-bold text-gray-600">Loss</h2>
          <p className="text-4xl font-bold mt-4">{loss}</p>
        </div>

        <div className="bg-white border rounded p-6">
          <h2 className="font-bold text-gray-600">Epoch</h2>
          <p className="text-4xl font-bold mt-4">{epoch}/10</p>
        </div>

        <div className="bg-white border rounded p-6">
          <h2 className="font-bold text-gray-600">Tokens/sec</h2>
          <p className="text-4xl font-bold mt-4">{tokens}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 bg-black text-green-400 border rounded p-6 font-mono min-h-[360px]">
          <h2 className="font-bold mb-4 text-white">
            Training Logs
          </h2>

          <div className="space-y-1">
            {logs.map((log, index) => (
              <p key={index}>
                {`> ${log}`}
              </p>
            ))}
          </div>
        </section>

        <aside className="bg-white border rounded p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">
            Current Job
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Job Name</p>
              <p className="font-bold">llama-3-finetune</p>
            </div>

            <div>
              <p className="text-gray-600">Strategy</p>
              <p className="font-bold">DeepSpeed ZeRO-3</p>
            </div>

            <div>
              <p className="text-gray-600">GPU Cluster</p>
              <p className="font-bold">4 × NVIDIA A100</p>
            </div>

            <div>
              <p className="text-gray-600">Status</p>
              <p className="font-bold">Running</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}