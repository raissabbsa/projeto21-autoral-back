
export function unauthorizedError(): ApplicationError {
  return {
    name: "UnauthorizedError",
    message: "You must be signed in to continue",
  };
}

type ApplicationError = {
    name: string;
    message: string;
  };