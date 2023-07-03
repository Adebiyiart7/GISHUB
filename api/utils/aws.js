const AWS = require("aws-sdk");

// Configure AWS
AWS.config.update({
  region: process.env.AWS_BUCKET_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: "v4",
});

// Create a new instance of AWS S3
const s3 = new AWS.S3();

/**
 *
 * @param {String} bucketName
 * @param {String[]} fileNames
 */
const deleteFiles = async (bucketName, fileNames) => {
  try {
    const deletePromises = fileNames.map((fileName) => {
      const params = {
        Bucket: bucketName,
        Key: fileName,
      };

      return s3.deleteObject(params).promise();
    });

    await Promise.all(deletePromises);
    console.log("Files deleted successfully.");
  } catch (error) {
    console.error("Error deleting files:", error);
  }
};

module.exports = { deleteFiles };
