import Link from 'next/link'

export default function TrainPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
          Training Configuration
        </p>

        <h1 className="text-4xl font-bold">
          Create Training Job
        </h1>

        <p className="text-gray-600 mt-2">
          Configure a simulated distributed fine-tuning run using DeepSpeed, FSDP, or LoRA.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 bg-white border rounded p-6 space-y-6">
          <div>
            <label className="font-bold block mb-2">
              Model
            </label>

            <select className="border p-3 rounded w-full">
              <option>Llama 3 8B</option>
              <option>Mistral 7B</option>
              <option>Gemma 7B</option>
              <option>Phi-3 Mini</option>
            </select>
          </div>

          <div>
            <label className="font-bold block mb-2">
              Dataset
            </label>

            <input
              type="file"
              className="border p-3 rounded w-full bg-white"
            />
          </div>

          <div>
            <label className="font-bold block mb-2">
              Training Strategy
            </label>

            <select className="border p-3 rounded w-full">
              <option>DeepSpeed ZeRO-3</option>
              <option>PyTorch FSDP</option>
              <option>LoRA Fine-Tuning</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="font-bold block mb-2">
                Batch Size
              </label>

              <input
                className="border p-3 rounded w-full"
                defaultValue="32"
              />
            </div>

            <div>
              <label className="font-bold block mb-2">
                Epochs
              </label>

              <input
                className="border p-3 rounded w-full"
                defaultValue="10"
              />
            </div>

            <div>
              <label className="font-bold block mb-2">
                Precision
              </label>

              <select className="border p-3 rounded w-full">
                <option>BF16</option>
                <option>FP16</option>
                <option>FP32</option>
              </select>
            </div>
          </div>

          <Link
  href="/monitor"
  className="inline-block bg-black text-white px-6 py-3 rounded"
>
  Start Simulated Training
</Link>

<p className="text-sm text-gray-500">
  This launches a simulated training run and opens the live telemetry monitor.
</p>

        </section>

        <aside className="bg-white border rounded p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">
            Estimated Run
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-gray-600">
                GPU Type
              </p>

              <p className="font-bold">
                NVIDIA A100
              </p>
            </div>

            <div>
              <p className="text-gray-600">
                Estimated Duration
              </p>

              <p className="font-bold">
                4h 30m
              </p>
            </div>

            <div>
              <p className="text-gray-600">
                Estimated Cost
              </p>

              <p className="font-bold">
                £18.40
              </p>
            </div>

            <div>
              <p className="text-gray-600">
                Recommended Strategy
              </p>

              <p className="font-bold">
                DeepSpeed ZeRO-3
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}