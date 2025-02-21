import { motion } from 'framer-motion';

const updates = [
  {
    title: "Zod",
    description: "Added support for Zod for maximum flexibility. There's a lot left to be done, but the library is now officially usable.",
    date: "15 February 2025"
  },
  {
    title: "Multi Adapter Support",
    description: "Bezel supports OpenAI and Groq now! Remember to bring your API keys. Customize your experience to fit your workflow.",
    date: "14 February 2025"
  },
  {
    title: "Introducing Bezel",
    description: "The world is a little slightly better place when it's safe. TypeSafe.",
    date: "12 February 2025"
  }
];

const UpdatesSection = () => {
  return (
    <motion.div 
      className="lg:w-1/2 updates-container min-h-[600px] mx-auto"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-10 text-white tracking-tight">Latest Updates</h2> 
      <div className="space-y-6">
        {updates.map((feature, index) => (
          <motion.div 
            key={index} 
            className="update-card group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="text-xl font-semibold text-white/90">{feature.title}</h4>
              <span className="text-sm text-gray-500 font-medium">{feature.date}</span>
            </div>
            <p className="text-base text-gray-400/80 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UpdatesSection;
