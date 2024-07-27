export const getUsers = async (result: number) => {
  try {
    const url = `https://randomuser.me/api/?results=${result}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(`An error happened: ${error}`);
  }
};
