export const baseUrl = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/list?sort%5B0%5D%5Bfield%5D=timestamp&sort%5B0%5D%5Bdirection%5D=desc`

export const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
    }
  }