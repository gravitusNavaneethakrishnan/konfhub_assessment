import { axiosKonfhubInstance } from "./config";

export function konfhubData(url) {
  return new Promise(function (resolve, reject) {
    const axiosClient = axiosKonfhubInstance();

    axiosClient.get(url)
      .then(response => {
        // Handle response
        resolve(JSON.parse(JSON.stringify(response.data)));
      })
      .catch(error => {
        // Handle errors
        reject(JSON.parse(JSON.stringify(error.message)));
      });
  });
}

export const konfhub_endpoint_URL = () => {
  return 'event/public/konfhub-frontend-evaluation-task';
};