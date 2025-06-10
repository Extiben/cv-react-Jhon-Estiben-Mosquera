function Experiencia({ experiencias }) {
  return (
    <section>
      <h3>Experiencia Laboral</h3>
      <ul>
        {experiencias.map((exp, index) => (
          <li key={index}>
            <strong>{exp.cargo}</strong> en {exp.empresa} ({exp.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Experiencia;