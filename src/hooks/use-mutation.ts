import { useState } from "react";

interface IMutationState {
  isSuccess: boolean;
  isError: boolean;
  isPending: boolean;
  data?: { message: string; status: number; success: boolean };
}

export const useMutation = <T>({
  mutationFn,
}: {
  mutationFn: (args: T) => Promise<IMutationState["data"]>;
}) => {
  const [mutationState, setMutationState] = useState<IMutationState>({
    isSuccess: false,
    isError: false,
    isPending: false,
  });

  const mutate = async (args: T) => {
    setMutationState({
      isSuccess: false,
      isPending: true,
      isError: false,
    });
    const res = await mutationFn(args);
    if (res?.success)
      setMutationState({
        data: res,
        isSuccess: true,
        isPending: false,
        isError: false,
      });
    if (!res?.success)
      setMutationState({
        isSuccess: false,
        isPending: false,
        isError: true,
      });
  };

  return { mutate, ...mutationState };
};
