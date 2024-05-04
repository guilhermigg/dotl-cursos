import * as Minio from 'minio';

const minioClient = new Minio.Client({
  endPoint: 'minio',
  port: 9000,
  useSSL: false,
  accessKey: 'c24T74izNIXtztsc8x4R',
  secretKey: 'wRw99AYygSvXUAEWvMPW1MCidL8DdHJKHbqKXZHl',
});

export async function checkBucket(bucketName:string) {
    const exists = await minioClient.bucketExists(bucketName)
    if(!exists){
        await minioClient.makeBucket(bucketName)
    }
}

export async function uploadFile(bucketName : string, fileName : string, stream : any) {
    await checkBucket(bucketName);

    try{
        await minioClient.putObject(bucketName, fileName, stream);
    } catch (e) {
        console.log(e)
    }
}
