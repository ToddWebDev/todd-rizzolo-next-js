const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

if (!token) {
  throw new Error('Missing NEXT_PUBLIC_MAPBOX_TOKEN')
}

const outputPath = path.resolve(__dirname, '../public/travellog/js/config.js')

fs.writeFileSync(
  outputPath,
  `window.MAPBOX_PUBLIC_TOKEN = "${token}";\n`,
  'utf8',
)

console.log(`Generated ${outputPath}`)
