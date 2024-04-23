export type UserType = {
  email: string;
  password: string;
};

export type UserDto =
  | {
      data: {
        token: string;
      };
    }
  | {
      error: string;
    };
