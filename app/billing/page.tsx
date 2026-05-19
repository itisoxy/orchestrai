const usage = [
  {
    job: 'llama-3-finetune',
    gpu: '4 × NVIDIA A100',
    hours: 14,
    cost: '£42.00',
    status: 'Running',
  },
  {
    job: 'mistral-support-model',
    gpu: '2 × NVIDIA A100',
    hours: 9,
    cost: '£27.00',
    status: 'Completed',
  },
  {
    job: 'gemma-lora-test',
    gpu: '1 × NVIDIA L4',
    hours: 3,
    cost: '£4.80',
    status: 'Completed',
  },
]

export default function BillingPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
          GPU Cost Management
        </p>

        <h1 className="text-4xl font-bold">
          Cost & Billing
        </h1>

        <p className="text-gray-600 mt-2">
          Simulated GPU usage, training spend, and infrastructure cost visibility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white border rounded p-6">
          <h2 className="font-bold text-gray-600">
            Monthly Spend
          </h2>

          <p className="text-4xl font-bold mt-4">
            £73.80
          </p>
        </div>

        <div className="bg-white border rounded p-6">
          <h2 className="font-bold text-gray-600">
            GPU Hours
          </h2>

          <p className="text-4xl font-bold mt-4">
            26h
          </p>
        </div>

        <div className="bg-white border rounded p-6">
          <h2 className="font-bold text-gray-600">
            Remaining Credits
          </h2>

          <p className="text-4xl font-bold mt-4">
            £426.20
          </p>
        </div>

        <div className="bg-white border rounded p-6">
          <h2 className="font-bold text-gray-600">
            Avg Cost / Hour
          </h2>

          <p className="text-4xl font-bold mt-4">
            £2.84
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 bg-white border rounded p-6">
          <h2 className="text-2xl font-bold mb-6">
            Training Usage
          </h2>

          <div className="space-y-4">
            {usage.map((item) => (
              <div
                key={item.job}
                className="border rounded p-5 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold">
                    {item.job}
                  </h3>

                  <p className="text-gray-600">
                    {item.gpu}
                  </p>
                </div>

                <div className="flex gap-8 items-center">
                  <div>
                    <p className="text-gray-500 text-sm">
                      GPU Hours
                    </p>

                    <p className="font-bold">
                      {item.hours}h
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Cost
                    </p>

                    <p className="font-bold">
                      {item.cost}
                    </p>
                  </div>

                  <span className="border px-4 py-2 rounded">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="bg-white border rounded p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">
            Current Plan
          </h2>

          <div className="space-y-4">
            <div>
              <p className="text-gray-600">
                Plan
              </p>

              <p className="font-bold">
                Pro AI Infrastructure
              </p>
            </div>

            <div>
              <p className="text-gray-600">
                Monthly Credits
              </p>

              <p className="font-bold">
                £500
              </p>
            </div>

            <div>
              <p className="text-gray-600">
                Billing Mode
              </p>

              <p className="font-bold">
                Usage-based GPU credits
              </p>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded w-full">
              Upgrade Plan
            </button>
          </div>
        </aside>
      </div>
    </main>
  )
}