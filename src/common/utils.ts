export function httpResponse(
  success: boolean,
  status: number,
  message: string,
  data: any,
) {
  return {
    success,
    status,
    message,
    data,
  };
}