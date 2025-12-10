import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  async uploadFile(file: Express.Multer.File) {
    return {
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype,
      size: file.size,
    };
  }
}
