function checkPhoneNumber(number) {
  const numberWith7 = number.replace(/^8/g, '+7');
  return numberWith7.replace(/([- ()])/g, '');
}

export default checkPhoneNumber;