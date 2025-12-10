import { BadRequestException } from '@nestjs/common';
import { type MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { type Request } from 'express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

export const editFileName = (
  request: Request,
  file: Express.Multer.File,
  callback: (error: Error | null, filename: string) => void,
) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = uuidv4();
  callback(null, `${name}-${Date.now()}-${randomName}${fileExtName}`);
};

const imageFileFilter = (
  request: Request,
  file: Express.Multer.File,
  callback: (error: Error | null, acceptFile: boolean) => void,
) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
    return callback(
      new BadRequestException(
        'Invalid file type. Only image files are allowed (jpg, jpeg, png, gif, webp)',
      ),
      false,
    );
  }
  callback(null, true);
};

export const multerConfig: MulterOptions = {
  storage: diskStorage({
    destination: './uploads/images',
    filename: editFileName,
  }),
  fileFilter: imageFileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
};
