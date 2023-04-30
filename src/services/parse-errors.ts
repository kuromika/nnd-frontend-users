export const parseErrors = async (response: Response) => {
  try {
    const data = await response.json();
    let errors: string = "";
    for (let i = 0; i < data.errors.length; i++) {
      if (typeof data.errors[i] === "string") {
        errors += `${data.errors[i]}`;
      } else {
        errors += `${data.errors[i].msg}`;
      }
      i === data.errors.length - 1 ? (errors += ".") : (errors += ", ");
    }
    return errors;
  } catch (err) {
    return `Error ${response.status}`;
  }
};
