import { useEffect, useRef } from 'react';
import 'ueblueprint/dist/css/ueb-style.css';
import './UEBlueprintViewer.css';

interface UEBlueprintViewerProps {
  blueprintCode: string;
}

export function UEBlueprintViewer({ blueprintCode }: UEBlueprintViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadBlueprint = async () => {
      if (containerRef.current) {
        // Import the Blueprint class to ensure it's registered as a web component
        await import('ueblueprint');
        
        // Clear previous content
        containerRef.current.innerHTML = `
          <ueb-blueprint>
            <template>${blueprintCode}</template>
          </ueb-blueprint>
        `;
      }
    };

    loadBlueprint();
  }, [blueprintCode]);

  return <div className="ueb-viewer" ref={containerRef} />;
}
