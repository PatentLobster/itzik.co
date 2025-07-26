import { motion, m} from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useMemo } from "react";

const skillsList = [
  'AI',
  'Android',
  'Arduino',
  'Artificial Intelligence',
  'AWS',
  'Azure',
  'Blockchain',
  'C',
  'C#',
  'C++',
  'CI/CD',
  'Cloud Computing',
  'Computer Vision',
  'Confluence',
  'Deep Learning',
  'DevOps',
  'Docker',
  'Electronics',
  'Elasticsearch',
  'Express',
  'FPV Drones',
  'Flutter',
  'GCP',
  'Git',
  'GitHub',
  'GitLab',
  'Go',
  'GraphQL',
  'Hacking',
  'iOS',
  'Java',
  'JavaScript',
  'Jenkins',
  'Jira',
  'Kotlin',
  'Kubernetes',
  'Linux',
  'MacOS',
  'Machine Learning',
  'MongoDB',
  'MySQL',
  'Natural Language Processing',
  'Networking',
  'Next.js',
  'NoSQL',
  'Node.js',
  'PHP',
  'PostgreSQL',
  'Python',
  'Raspberry Pi',
  'React',
  'Redis',
  'Ruby',
  'SQL',
  'SQLite',
  'Security',
  'Swift',
  'System Administration',
  'Terraform',
  'TypeScript',
  'Windows',
  'Web Development',
  'Web3',
  'WebAssembly',
  'Webpack',
  'WebGL',
  'WebRTC',
  'WebSockets',
  'GRPC',
  'REST',
  'Rust',
  'Solidity',
  'Tailwind CSS',
  'Three.js',
  'Vue.js',
  'Vim',
  'Tauri',
  'Electron',
  'Flask',
  'FastAPI',
  'Fastify',
  'Cloudflare',
  'Laravel',
  'Sass',
  'Svelte',
  'Gatsby',
  'Nuxt.js',
  'Webpack',
]

export function Skills() {
  // Shuffle the skills array randomly and memoize it
  const shuffledSkills = useMemo(() => {
    const shuffled = [...skillsList].sort(() => Math.random() - 0.5);
    // Create multiple copies for seamless infinite scrolling
    return [...shuffled, ...shuffled, ...shuffled];
  }, []);

  const reversedSkills = useMemo(() => {
    const reversed = [...shuffledSkills].reverse();
    return [...reversed, ...reversed, ...reversed];
  }, [shuffledSkills]);

  return (
    <section
      id="skills"
      className="section-snap py-20 bg-muted/30 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Full width container */}
      <div className="w-full">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I work with modern technologies to build scalable and performant applications.
          </p>
        </div>

        {/* First infinite scrolling row */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex gap-4 w-max"
            style={{
              animation: 'scroll-left 900s linear infinite',
            }}
            animate={{
              x: [0, '-33.333%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 700,
                ease: "linear",
              },
            }}
          >
            {shuffledSkills.reverse().map((skill, index) => (
              <Badge
                key={`${skill}-${index}`}
                variant="secondary"
                className="text-sm px-4 py-2 bg-gradient-to-r from-muted to-muted/50 hover:from-primary/10 hover:to-primary/5 transition-all duration-[700ms] cursor-pointer flex-shrink-0 whitespace-nowrap"
              >
                {skill}
              </Badge>
            ))}
          </motion.div>
        </div>
        {/* Third row for more visual interest */}
        <div className="relative overflow-hidden w-full mt-4">
          <motion.div
            className="flex gap-4 w-max"
            animate={{
              x: [0, '-33.333%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 900,
                ease: "linear",
              },
            }}
          >
            {shuffledSkills.slice().sort(() => Math.random() - 0.5).map((skill, index) => (
              <Badge
                key={`third-${skill}-${index}`}
                variant="secondary"
                className="text-sm px-4 py-2 bg-gradient-to-r from-muted to-muted/50 hover:from-primary/10 hover:to-primary/5 transition-all duration-[900ms] cursor-pointer flex-shrink-0 whitespace-nowrap"
              >
                {skill}
              </Badge>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}