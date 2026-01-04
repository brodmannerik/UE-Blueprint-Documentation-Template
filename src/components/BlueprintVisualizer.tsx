import './BlueprintVisualizer.css';

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

interface BlueprintGraphProps {
  nodes: BlueprintNode[];
  connections: BlueprintNodeConnection[];
  title: string;
}

export function BlueprintVisualizer({ nodes, connections, title }: BlueprintGraphProps) {
  const getNodeColor = (type: string) => {
    switch (type) {
      case 'event':
        return '#4a90e2'; // Blue for events
      case 'action':
        return '#7ed321'; // Green for actions
      case 'function':
        return '#f5a623'; // Orange for functions
      case 'variable':
        return '#bd10e0'; // Purple for variables
      case 'flow':
        return '#50e3c2'; // Teal for flow control
      default:
        return '#666';
    }
  };

  return (
    <div className="blueprint-visualizer">
      <h3 className="blueprint-title">{title}</h3>
      <svg className="blueprint-canvas" viewBox="0 0 800 400">
        {/* Draw connections */}
        {connections.map((conn, idx) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          return (
            <line
              key={`conn-${idx}`}
              x1={fromNode.x + 120}
              y1={fromNode.y + 25}
              x2={toNode.x}
              y2={toNode.y + 25}
              className="blueprint-wire"
              stroke="#888"
              strokeWidth="2"
            />
          );
        })}

        {/* Draw nodes */}
        {nodes.map((node) => (
          <g key={node.id} className="blueprint-node">
            <rect
              x={node.x}
              y={node.y}
              width="120"
              height="50"
              rx="4"
              fill={getNodeColor(node.type)}
              stroke="#333"
              strokeWidth="2"
            />
            <text
              x={node.x + 60}
              y={node.y + 30}
              textAnchor="middle"
              fill="white"
              fontSize="11"
              fontWeight="bold"
              className="blueprint-label"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
