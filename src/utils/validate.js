export const checkValidData = (email, password, name = null) => {
  if (name !== null) {
    const isValidName =
      /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
        name
      );
    if (!isValidName) return "Name is not valid";
  }

  const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailvalid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
