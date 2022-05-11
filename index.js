const sharp = require('sharp')

const processImg =async  filename => {
  console.log('processing', filename)
  const buffer = await sharp(`./${filename}.png`)
    .png({ compressionLevel: 9, quality: 90 })
    .toBuffer()
  
  return sharp(buffer)
    .toFile(`./${filename}-out.png`)
}

const run = async () => {
  ['image-2', 'image'].map(processImg)
}

try {
  run()
} catch(e) {
  console.log(e)
}
