function Educacion({ educacion }) {
  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu, index) => (
          <li key={index}>
            <strong>{edu.titulo}</strong> - {edu.institucion} ({edu.año})
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Educacion;
