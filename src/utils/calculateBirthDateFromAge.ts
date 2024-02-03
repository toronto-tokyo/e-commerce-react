const calculateBirthDateFromAge = (age: number) => {
  const currentDate = () => new Date();
  return new Date(
    currentDate().getFullYear() - age,
    currentDate().getMonth(),
    currentDate().getDate()
  );
};

export default calculateBirthDateFromAge;
