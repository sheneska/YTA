import { Eye, TrendingUp, Target, BarChart3 } from 'lucide-react';

export default function CaseStudyStats() {
  const stats = [
    { icon: Eye,       value: '27.2M+', label: 'Total Campaign Reach',    gradient: 'from-purple-500 to-purple-700' },
    { icon: TrendingUp, value: '8.1%',  label: 'Avg Engagement Rate',      gradient: 'from-pink-500 to-rose-600'     },
    { icon: Target,     value: '105K+', label: 'Conversions Generated',    gradient: 'from-violet-500 to-purple-600' },
    { icon: BarChart3,  value: '337%',  label: 'Average ROI',              gradient: 'from-blue-500 to-purple-600'   }
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4 text-white shadow-lg mx-auto`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
