const sharp = require('sharp')

const run = async () => {
  const buffer = await sharp('./image.png')
    .png({ compressionLevel: 9, quality: 90 })
    .toBuffer()

  return sharp(buffer)
    .toFile('./out.png')
}

try {
  run()
} catch(e) {
  console.log(e)
}
