export const handler = async (event) => {
  const name = event.queryStringParameters?.name || "Aaron Velasco";
  const body = {success:true,message: `Hola ${name} desde lambda`};//JSON responce
  console.log(event);
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(body),
  };
  return response;
};
