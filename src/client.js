import client from "@sanity/client"

export default client({
  projectId: "8awiw0mr",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-15",
})