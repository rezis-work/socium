import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
  private readonly maxSize: number = 5 * 1024 * 1024; // 5MB

  transform(value: Express.Multer.File, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException('No File Provided');
    }

    if (value.size > this.maxSize) {
      throw new BadRequestException(
        `File size exceeds the maximum limit of ${this.maxSize / 1024 / 1024}MB`,
      );
    }

    return value;
  }
}

@Injectable()
export class FileTypeValidationPipe implements PipeTransform {
  private readonly allowedTypes: string[] = [
    'image/jpeg',
    'image/png',
    'image/jpg',
    'image/webp',
    'image/gif',
  ];

  transform(value: Express.Multer.File, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException('No File Provided');
    }

    if (!this.allowedTypes.includes(value.mimetype)) {
      throw new BadRequestException(
        `Invalid file type. Allowed types are: ${this.allowedTypes.join(', ')}`,
      );
    }

    return value;
  }
}
