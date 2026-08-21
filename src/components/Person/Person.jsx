export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <section className="Person">
      <p className="Person__name">{`My name is ${name}`}</p>

      {age && <p className="Person__age">I am {age} years old</p>}

      {isMarried ? (
        <p className="Person__partner">
          {`I am married to my ${sex === 'm' ? 'wife' : 'husband'} ${partnerName}`}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
