const jobs = [
  {
    name: 'llama-3-finetune',
    strategy: 'DeepSpeed ZeRO-3',
    status: 'Running',
    gpu: '91%',
  },
  {
    name: 'mistral-support-model',
    strategy: 'PyTorch FSDP',
    status: 'Queued',
    gpu: '0%',
  },
  {
    name: 'gemma-lora-test',
    strategy: 'LoRA',
    status: 'Completed',
    gpu: '0%',
  },
]

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
          AI Training Control Plane
        </p>

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-600 mt-2">
          Overview of distributed fine-tuning jobs, GPU usage, and training status.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white border rounded p-6">
          <h2 className="font-bold text-gray-600">
            Active Jobs
          </h2>

          <p className="text-4xl font-bold mt-4">
            3
          </p>
        </div>

        <div className="bg-white border rounded p-6">
          <h2 className="font-bold text-gray-600">
            GPU Usage
          </h2>

          <p className="text-4xl font-bold mt-4">
            91%
          </p>
        </div>

        <div className="bg-white border rounded p-6">
          <h2 className="font-bold text-gray-600">
            Training Loss
          </h2>

          <p className="text-4xl font-bold mt-4">
            1.67
          </p>
        </div>

        <div className="bg-white border rounded p-6">
          <h2 className="font-bold text-gray-600">
            Tokens/sec
          </h2>

          <p className="text-4xl font-bold mt-4">
            245
          </p>
        </div>
      </div>

      <div className="bg-white border rounded p-6">
        <h2 className="text-2xl font-bold mb-6">
          Training Jobs
        </h2>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.name}
              className="border rounded p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold">
                  {job.name}
                </h3>

                <p className="text-gray-600">
                  {job.strategy}
                </p>
              </div>

              <div className="flex gap-6 items-center">
                <span className="text-gray-600">
                  GPU: {job.gpu}
                </span>

                <span className="border px-4 py-2 rounded">
                  {job.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}