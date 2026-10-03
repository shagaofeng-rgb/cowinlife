'use client';

import { useEffect } from 'react';

export default function DisableContextMenu() {
  useEffect(() => {
    const preventContextMenu = (event: MouseEvent) => event.preventDefault();
    document.addEventListener('contextmenu', preventContextMenu, true);

    return () => document.removeEventListener('contextmenu', preventContextMenu, true);
  }, []);

  return null;
}
