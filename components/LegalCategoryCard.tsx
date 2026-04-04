interface LegalCategory {
  id: string;
  slug: string;
  name: string;
  name_hindi: string;
  emoji: string;
  description: string;
  color: string;
  common_issues: string[];
  key_rights: string[];
  helpline: string;
  urgency: string;
}

interface Props {
  category: LegalCategory;
}

const colorClasses: Record<string, string> = {
  blue: 'border-blue-200 hover:bg-blue-50 hover:border-blue-400',
  green: 'border-green-200 hover:bg-green-50 hover:border-green-400',
  red: 'border-red-200 hover:bg-red-50 hover:border-red-400',
  purple: 'border-purple-200 hover:bg-purple-50 hover:border-purple-400',
  yellow: 'border-yellow-200 hover:bg-yellow-50 hover:border-yellow-400',
  pink: 'border-pink-200 hover:bg-pink-50 hover:border-pink-400',
  indigo: 'border-indigo-200 hover:bg-indigo-50 hover:border-indigo-400',
  orange: 'border-orange-200 hover:bg-orange-50 hover:border-orange-400',
};

const urgencyBadge: Record<string, string> = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

export default function LegalCategoryCard({ category }: Props) {
  const borderClass = colorClasses[category.color] || colorClasses.blue;
  const urgencyClass = urgencyBadge[category.urgency] || urgencyBadge.medium;

  return (
    <div
      className={`border-2 rounded-lg p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${borderClass}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-4xl mb-2 block">{category.emoji}</span>
          <h3 className="text-lg font-bold text-gray-800">{category.name}</h3>
          <p className="text-sm text-gray-600">{category.name_hindi}</p>
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded ${urgencyClass}`}>
          {category.urgency.charAt(0).toUpperCase() + category.urgency.slice(1)}
        </span>
      </div>

      <p className="text-sm text-gray-700 mb-4">{category.description}</p>

      <div className="mb-4">
        <h4 className="font-semibold text-sm text-gray-700 mb-2">
          Common Issues:
        </h4>
        <ul className="text-xs text-gray-600 space-y-1">
          {category.common_issues.slice(0, 2).map((issue, idx) => (
            <li key={idx} className="flex gap-2">
              <span>•</span> {issue}
            </li>
          ))}
        </ul>
      </div>

      {category.helpline && (
        <div className="text-xs bg-blue-50 p-2 rounded border border-blue-200 mb-3">
          <span className="font-semibold">📞 </span>
          <span className="text-blue-800">{category.helpline}</span>
        </div>
      )}

      <div className="text-green-600 font-semibold text-sm">
        Jaankari Lo →
      </div>
    </div>
  );
}
