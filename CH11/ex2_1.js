function vaccine(dosage) {
  if (dosage > 0) {
    inject(dosage);
  }
}
administer(patient, vaccine, time);

//code with anonymous function
administer(
  patient,
  function () {
    if (dosage > 0) {
      inject(dosage);
    }
  },
  time
);
//code with Arrow Function
administer(
    patient,
    function () {
      if (dosage > 0) {
        inject(dosage);
      }
    },
    time
  );