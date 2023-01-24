import styles from "./Tips.module.css";

const tips = [
  {
    title: "Tailored CV for [Job Title]",
    text: "Tailor your CV to the specific job you are applying for. This means highlighting the skills and experiences that are most relevant to the position.",
  },
  {
    title: "Clear and Concise CV",
    text: "Keep your CV concise and clear. Use bullet points and simple language to make it easy to read.",
  },
  {
    title: "Personal Summary Highlighting Relevant Skills and Experience",
    text: "Include a personal statement or summary at the top of your CV that gives a brief overview of your skills and experience.",
  },
  {
    title: "Keyword Optimized CV for Increased Visibility",
    text: "Use keywords relevant to the job to make your CV more searchable by hiring managers.",
  },
  {
    title: "Accomplishments and Notable Projects Included",
    text: "Include relevant education, work experience, and certifications, and highlight any accomplishments or notable projects.",
  },
  {
    title: "Error-free and Well-formatted CV",
    text: "Make sure your CV is error-free and well-formatted.",
  },
  {
    title: "Professional Contact Information",
    text: "Always have a clear and professional email address, and phone number.",
  },
  {
    title: "Peer-reviewed for Maximum Impact",
    text: "Finally, consider asking someone else to review your CV before you submit it. They may be able to spot mistakes you missed or suggest improvements.",
  },
];

const Tips = () => {
  return (
    <div>
      <h2>Tips</h2>
      <p>Here are some useful tips for your CV.</p>
      <ul className={styles.list}>
        {tips.map(({ title, text }) => (
          <li key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tips;
