// TODO: Make this function pull from mongoDB
export const getService = async (serviceId: string) => {
  const service = await fetch(`${process.env.SOMETHING_URL}/../${serviceId}`);
  return await service.json();
};
