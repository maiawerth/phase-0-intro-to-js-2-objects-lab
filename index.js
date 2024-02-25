let employee = {
    name: "Rupaul",
    streetAddress: "123 Slay Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
  }

  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let updatedEmployee = { ...employee };
    delete updatedEmployee[key];
      return updatedEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }