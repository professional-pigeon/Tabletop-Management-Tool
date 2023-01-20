// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// export async function getLocations() {
//   const res = await fetch(`${process.env.API_BASE_URL}/locations`)
//   const locations = await res.json()
//   // Pass data to the page via props
//   return { props: { locations } }
// }