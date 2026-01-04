interface BlueprintNode {
  id: string;
  label: string;
  type: 'event' | 'action' | 'function' | 'variable' | 'flow';
  x: number;
  y: number;
}

interface BlueprintNodeConnection {
  from: string;
  to: string;
}

export interface BlueprintGraph {
  title: string;
  nodes: BlueprintNode[];
  connections: BlueprintNodeConnection[];
}

export const blueprintGraphs: Record<string, BlueprintGraph[]> = {
  'level-blueprint': [
    {
      title: 'Level Initialization Flow',
      nodes: [
        { id: 'event-begin', label: 'Event Begin Play', type: 'event', x: 20, y: 50 },
        { id: 'spawn-actor', label: 'Spawn Actor', type: 'action', x: 200, y: 30 },
        { id: 'set-location', label: 'Set Actor Location', type: 'action', x: 380, y: 50 },
        { id: 'print-log', label: 'Print String', type: 'action', x: 560, y: 70 },
      ],
      connections: [
        { from: 'event-begin', to: 'spawn-actor' },
        { from: 'spawn-actor', to: 'set-location' },
        { from: 'set-location', to: 'print-log' },
      ],
    },
    {
      title: 'Overlap Detection',
      nodes: [
        { id: 'overlap-event', label: 'On Actor Overlap', type: 'event', x: 20, y: 150 },
        { id: 'cast-pawn', label: 'Cast to Pawn', type: 'function', x: 200, y: 130 },
        { id: 'is-valid', label: 'Is Valid', type: 'flow', x: 380, y: 110 },
        { id: 'apply-damage', label: 'Apply Damage', type: 'action', x: 560, y: 90 },
      ],
      connections: [
        { from: 'overlap-event', to: 'cast-pawn' },
        { from: 'cast-pawn', to: 'is-valid' },
        { from: 'is-valid', to: 'apply-damage' },
      ],
    },
  ],
  'character-blueprint': [
    {
      title: 'Character Movement Setup',
      nodes: [
        { id: 'begin-play', label: 'Event Begin Play', type: 'event', x: 20, y: 50 },
        { id: 'get-controller', label: 'Get Controller', type: 'function', x: 200, y: 30 },
        { id: 'input-setup', label: 'Setup Input', type: 'action', x: 380, y: 50 },
        { id: 'enable-input', label: 'Enable Input', type: 'action', x: 560, y: 70 },
      ],
      connections: [
        { from: 'begin-play', to: 'get-controller' },
        { from: 'get-controller', to: 'input-setup' },
        { from: 'input-setup', to: 'enable-input' },
      ],
    },
    {
      title: 'Input Handling',
      nodes: [
        { id: 'input-action', label: 'Input Action Event', type: 'event', x: 20, y: 150 },
        { id: 'get-forward', label: 'Get Forward Vector', type: 'function', x: 200, y: 130 },
        { id: 'add-movement', label: 'Add Movement Input', type: 'action', x: 380, y: 110 },
      ],
      connections: [
        { from: 'input-action', to: 'get-forward' },
        { from: 'get-forward', to: 'add-movement' },
      ],
    },
  ],
  'pawn-blueprint': [
    {
      title: 'Pawn Possession',
      nodes: [
        { id: 'possess-event', label: 'Event Possess', type: 'event', x: 20, y: 50 },
        { id: 'get-controller', label: 'Get Possessing Pawn', type: 'function', x: 200, y: 30 },
        { id: 'set-camera', label: 'Attach Camera', type: 'action', x: 380, y: 50 },
      ],
      connections: [
        { from: 'possess-event', to: 'get-controller' },
        { from: 'get-controller', to: 'set-camera' },
      ],
    },
  ],
  'actor-blueprint': [
    {
      title: 'Basic Actor Lifecycle',
      nodes: [
        { id: 'begin-play', label: 'Event Begin Play', type: 'event', x: 20, y: 50 },
        { id: 'init-vars', label: 'Initialize Variables', type: 'action', x: 200, y: 30 },
        { id: 'end-play', label: 'Event End Play', type: 'event', x: 20, y: 150 },
        { id: 'cleanup', label: 'Cleanup', type: 'action', x: 200, y: 130 },
      ],
      connections: [
        { from: 'begin-play', to: 'init-vars' },
        { from: 'end-play', to: 'cleanup' },
      ],
    },
    {
      title: 'Interaction System',
      nodes: [
        { id: 'overlap', label: 'On Begin Overlap', type: 'event', x: 20, y: 250 },
        { id: 'highlight', label: 'Set Highlight', type: 'action', x: 200, y: 230 },
        { id: 'create-outline', label: 'Create Outline', type: 'action', x: 380, y: 210 },
      ],
      connections: [
        { from: 'overlap', to: 'highlight' },
        { from: 'highlight', to: 'create-outline' },
      ],
    },
  ],
  'interface-blueprint': [
    {
      title: 'Damage Interface Call',
      nodes: [
        { id: 'any-damage', label: 'Event Any Damage', type: 'event', x: 20, y: 50 },
        { id: 'get-health', label: 'Get Health', type: 'variable', x: 200, y: 30 },
        { id: 'subtract', label: 'Subtract', type: 'action', x: 380, y: 50 },
        { id: 'set-health', label: 'Set Health', type: 'action', x: 560, y: 70 },
      ],
      connections: [
        { from: 'any-damage', to: 'get-health' },
        { from: 'get-health', to: 'subtract' },
        { from: 'subtract', to: 'set-health' },
      ],
    },
  ],
  'event-graph': [
    {
      title: 'Tick-Based Logic',
      nodes: [
        { id: 'tick', label: 'Event Tick', type: 'event', x: 20, y: 50 },
        { id: 'get-delta', label: 'Get Delta Seconds', type: 'variable', x: 200, y: 30 },
        { id: 'update-pos', label: 'Update Position', type: 'action', x: 380, y: 50 },
      ],
      connections: [
        { from: 'tick', to: 'get-delta' },
        { from: 'get-delta', to: 'update-pos' },
      ],
    },
    {
      title: 'Flow Control Example',
      nodes: [
        { id: 'event', label: 'Custom Event', type: 'event', x: 20, y: 150 },
        { id: 'branch', label: 'Branch', type: 'flow', x: 200, y: 130 },
        { id: 'true-action', label: 'Do Something', type: 'action', x: 350, y: 100 },
        { id: 'false-action', label: 'Do Other', type: 'action', x: 350, y: 180 },
      ],
      connections: [
        { from: 'event', to: 'branch' },
        { from: 'branch', to: 'true-action' },
        { from: 'branch', to: 'false-action' },
      ],
    },
  ],
  'variables-casting': [
    {
      title: 'Type Casting Example',
      nodes: [
        { id: 'overlap', label: 'On Overlap', type: 'event', x: 20, y: 50 },
        { id: 'get-other', label: 'Get Other Actor', type: 'variable', x: 200, y: 30 },
        { id: 'cast', label: 'Cast to Character', type: 'function', x: 380, y: 50 },
        { id: 'is-valid', label: 'Is Valid', type: 'flow', x: 560, y: 70 },
      ],
      connections: [
        { from: 'overlap', to: 'get-other' },
        { from: 'get-other', to: 'cast' },
        { from: 'cast', to: 'is-valid' },
      ],
    },
  ],
  'best-practices': [
    {
      title: 'Organized Event Graph Pattern',
      nodes: [
        { id: 'begin', label: 'Event Begin Play', type: 'event', x: 20, y: 50 },
        { id: 'init-func', label: 'Initialize', type: 'function', x: 200, y: 30 },
        { id: 'setup-func', label: 'Setup Components', type: 'function', x: 380, y: 50 },
        { id: 'ready', label: 'On Ready Event', type: 'event', x: 560, y: 70 },
      ],
      connections: [
        { from: 'begin', to: 'init-func' },
        { from: 'init-func', to: 'setup-func' },
        { from: 'setup-func', to: 'ready' },
      ],
    },
  ],
};
