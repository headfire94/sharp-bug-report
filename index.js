const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const processImg =async (input, output) => {
  console.log('processing', input)
  const buffer = await sharp(input)
    .png({ compressionLevel: 9, quality: 90 })
    .toBuffer()
  
  return sharp(buffer)
    .toFile(output)
}

const run = async () => {
  const fileNames = fs.readdirSync('./for-test')
  
  for (let filename of fileNames) {
    await processImg(path.resolve('./for-test', filename), `./output/${filename}`)
  }
  
  await processImg(path.resolve('broken-image.png', './output/broken-image.png'))
}

try {
  run()
} catch(e) {
  console.log(e)
}
