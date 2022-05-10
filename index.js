const sharp = require('sharp')

const run = async () => {
  const buffer = await sharp('./image.png')
    .png({ compressionLevel: 9, quality: 90 })
    .toBuffer()
    .catch((e) => console.log(e))

  return sharp(buffer)
    .toFile('./out.png')
    .catch((e) => console.log(e))
}

run()
