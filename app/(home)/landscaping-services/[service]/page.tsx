import { getService } from '@/lib/actions/actions';
import React from 'react';

// TODO: https://nextjs.org/docs/app/api-reference/file-conventions/page

export default async function ServicePage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>; // or serviceId
}>) {
  const { slug } = await params;
  const service = getService(slug);

  return <div>ServicePage</div>;
}
