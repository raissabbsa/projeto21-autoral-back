import authenticationRepository from "@/repositories/authentication-repository";
import userRepository from "@/repositories/user-repository";

async function signIn(email: string, password: string) {
  const user = await userRepository.verifyEmail(email);

  await authenticationRepository.validatePasswordOrFail(password, user.password);

  const token = await authenticationRepository.createSession(user.id);

  return {
    name: user.name,
    email: user.email,
    token,
  };

}


const authenticationService = {
  signIn,
};

export default authenticationService;
