import { photos } from '@/lib/data';
import React from 'react';
import { ColumnsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/columns.css';

export default function Gallery() {
  return (
    <ColumnsPhotoAlbum
      photos={photos}
      //   columns={6}
    />
  );
}
