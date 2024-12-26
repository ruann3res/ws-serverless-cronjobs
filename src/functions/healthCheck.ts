
export async function handler() {

  return {
    statusCode: 201, body: JSON.stringify({
      staus: 'HEALTH'
    })
  };
}
