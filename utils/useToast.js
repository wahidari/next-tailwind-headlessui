import toast from "react-hot-toast";

export default function useToast() {
  function pushToast({ message, isError, isLoading }) {
    if (!isError && !isLoading) {
      toast.success(<span className="text-sm font-semibold">{message}</span>, {
        duration: 2000,
        position: "top-center",
      });
    } else if (!isLoading) {
      toast.error(<span className="text-sm font-semibold">{message}</span>, {
        id: message,
        position: "top-center",
      });
    } else {
      return toast.loading(
        <span className="text-sm font-semibold">{message}</span>,
        {
          position: "top-center",
        }
      );
    }
  };

  function updateToast({ toastId, message, isError }) {
    if (!isError) {
      toast.success(<span className="text-sm font-semibold">{message}</span>, {
        id: toastId,
        duration: 2000,
        position: "top-center",
      });
    } else {
      toast.error(<span className="text-sm font-semibold">{message}</span>, {
        id: toastId,
        position: "top-center",
      });
    }
  };

  function dismissToast() {
    toast.dismiss();
  };

  return { updateToast, pushToast, dismissToast };
}
