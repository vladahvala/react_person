export const Person = ({ person }) => {
  let marriageStatus = 'I am not married';

  if (person.isMarried) {
    marriageStatus =
      person.sex === 'm'
        ? `${person.partnerName} is my wife`
        : `${person.partnerName} is my husband`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {person.name}</h2>

      {person.age !== undefined && (
        <p className="Person__age">I am {person.age}</p>
      )}

      <p className="Person__partner">{marriageStatus}</p>
    </section>
  );
};
