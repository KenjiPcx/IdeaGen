import Link from 'next/link';

interface ProblemCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ id, title, description, category, difficulty }) => {
  return (
    <Link href={`/problems/${id}`} className="block">
      <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{description.slice(0, 100)}...</p>
        <div className="flex justify-between items-center">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">{category}</span>
          <span className={`px-2 py-1 rounded-full text-sm ${
            difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
            difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {difficulty}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProblemCard;
