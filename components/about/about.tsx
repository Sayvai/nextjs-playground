import { NextPage } from "next";

const About: React.FC = (): React.ReactElement => {
  return (
    <section>
      <h2>About</h2>
      <p>As part of my personal journey in keeping myself up-to-date with the ever evolving frontend technology stack, this site is intended to demo various disparate apps created using React.js.</p>
      <p>I will also be leveraging the additional capabilities provided by the full-stack Next.js framework (eg, Server-Side Rendering, Static Site Generation, etc) with which this site is built upon.</p>
    </section>
  );
}

export default About;