import AWS from 'aws-sdk'
import { imageResizer } from 'lite-image-resizer'

// STORE CONFIGE DATA IN VARIABLES
const S3_BUCKET = import.meta.env.VITE_AWS_BUCKET_NAME
const REGION = import.meta.env.VITE_AWS_BUCKET_REGION
const ACCESS_KEY = import.meta.env.VITE_AWS_ACCESS_KEY_ID
const SECRET_ACCESS_KEY = import.meta.env.VITE_AWS_SECRET_ACCESS_KEY

// CONFIGURE AWS
AWS.config.update({
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
  signatureVersion: 'v4',
})

// CREATE NEW INSTANCE OF AWS S3
const s3 = new AWS.S3()

const URIs = [] // array of image keys to the bucket
const resizedFiles = []

const validateFile = (files) => {
  if (!files || files.length === 0) {
    throw new Error('No files entered!')
  }
}

// TODO: REWORK ON UPDATING IMAGE IN AWS ..... awsFileKey should be an array

const resolveAll = async (dirName, resizedFiles, awsFileKey = '') => {
  await Promise.all(
    resizedFiles.map((item) => {
      const Key = awsFileKey ? awsFileKey : `${dirName}/${item.name}__${item.file.name}`
      const params = {
        Bucket: S3_BUCKET,
        Key: Key,
        Body: item.file,
      }

      const s3Method = awsFileKey ? s3.putObject(params) : s3.upload(params)

      return s3Method
        .promise()
        .then((response) => {
          URIs.push(response.Key)
          console.log(URIs)
        })
        .catch((error) => {
          console.error(`Error:`, error)
          return null
        })
    }),
  )
}

// RESIZE EACH FILE
const resizeFiles = async (files) => {
  for (const file of files) {
    const resized = await imageResizer(file.file, 400, 'GISHUB')
    resizedFiles.push({ name: file.name, file: resized })
  }
}
/**
 * @param {String} dirName
 * @param {Array<{ name: string, file: File }>} rawFile
 * @returns
 * @description This function uploads file[] to AWS s3 bucket
 */

const handleFileUpload = async (dirName, files) => {
  validateFile(files)
  await resizeFiles(files)
  await resolveAll(dirName, resizedFiles)
  return URIs
}

const handleFileUpdate = async (dirName, files, awsFileKey) => {
  validateFile(files)
  await resizeFiles(files)
  await resolveAll(dirName, resizedFiles, awsFileKey)
  return URIs
}

export { handleFileUpload, handleFileUpdate }
