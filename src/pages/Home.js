export default function Home() {
  return (
    <div className="home">
      <h2>Welcome to My Professional Portfolio</h2>
      <p>
        Hello! I'm a passionate Full Stack Developer with expertise in modern
        web technologies. I specialize in creating scalable, user-centric
        applications that deliver exceptional user experiences.
      </p>

      <div className="home-card">
        <h3>Technical Expertise</h3>
        <p>
          I specialize in <b>React.js</b> and <b>TypeScript</b>, with a strong
          focus on crafting responsive, user-friendly interfaces. My skills
          include advanced state management using <b>Redux</b>, component-driven
          development, and integrating APIs to build modern, scalable frontend
          applications.
        </p>

        <h3>Core Competencies</h3>
        <ul>
          <li>Frontend Development (React, Vue.js, Angular)</li>
          <li>Backend Development (Node.js, Express, Python)</li>
          <li>Database Design (MongoDB, PostgreSQL, MySQL)</li>
          <li>DevOps & Cloud (AWS, Docker, CI/CD)</li>
          <li>UI/UX Design & Responsive Web Development</li>
        </ul>
      </div>
    </div>
  );
}
