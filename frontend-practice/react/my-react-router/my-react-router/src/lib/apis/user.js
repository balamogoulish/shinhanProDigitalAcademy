import axios from 'axios';

const signUp = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3000/users/signUp', {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export { signUp };
