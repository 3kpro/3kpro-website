interface Product {
  id: string;
  name: string;
  status: string;
  truth: string;
  checklist: { task: string; done: boolean }[];
  assets: string[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-2xl font-semibold mb-2 text-cyan-400">{product.name}</h2>
      <p className="text-sm text-gray-400 mb-4">Status: <span className="text-yellow-400">{product.status}</span></p>
      <SpecViewer truth={product.truth} />
      <BuildChecklist checklist={product.checklist} />
      <AssetLocker assets={product.assets} />
    </div>
  );
}

function SpecViewer({ truth }: { truth: string }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2 text-green-400">The Truth</h3>
      <pre className="text-sm whitespace-pre-wrap bg-gray-900 p-2 rounded text-gray-300">{truth}</pre>
    </div>
  );
}

function BuildChecklist({ checklist }: { checklist: { task: string; done: boolean }[] }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium mb-2 text-blue-400">Build Steps</h3>
      <ul className="list-disc list-inside text-sm">
        {checklist.map((item, index) => (
          <li key={index} className={item.done ? 'line-through text-gray-500' : 'text-gray-300'}>
            {item.task}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AssetLocker({ assets }: { assets: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2 text-purple-400">Asset Locker</h3>
      <ul className="list-disc list-inside text-sm text-gray-300">
        {assets.map((asset, index) => (
          <li key={index}>{asset}</li>
        ))}
      </ul>
    </div>
  );
}