const checkpoints = [
  {
    name: 'checkpoint_epoch_1.pt',
    size: '2.4GB',
    status: 'Saved',
    epoch: '1/10',
    loss: '2.12',
  },
  {
    name: 'checkpoint_epoch_2.pt',
    size: '2.8GB',
    status: 'Saved',
    epoch: '2/10',
    loss: '1.89',
  },
  {
    name: 'checkpoint_epoch_3.pt',
    size: '3.1GB',
    status: 'Latest',
    epoch: '3/10',
    loss: '1.67',
  },
]

export default function CheckpointsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-10">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
          Model Recovery
        </p>

        <h1 className="text-4xl font-bold">
          Model Checkpoints
        </h1>

        <p className="text-gray-600 mt-2">
          Saved model states from simulated distributed fine-tuning runs.
        </p>
      </div>

      <div className="bg-white border rounded p-6">
        <h2 className="text-2xl font-bold mb-6">
          Saved Checkpoints
        </h2>

        <div className="space-y-4">
          {checkpoints.map((checkpoint) => (
            <div
              key={checkpoint.name}
              className="border rounded p-6 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg">
                  {checkpoint.name}
                </h3>

                <p className="text-gray-600">
                  Size: {checkpoint.size}
                </p>
              </div>

              <div className="flex gap-8 items-center">
                <div>
                  <p className="text-gray-500 text-sm">Epoch</p>
                  <p className="font-bold">{checkpoint.epoch}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Loss</p>
                  <p className="font-bold">{checkpoint.loss}</p>
                </div>

                <span className="border px-4 py-2 rounded">
                  {checkpoint.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}