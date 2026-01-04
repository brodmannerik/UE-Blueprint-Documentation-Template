import type { DocSection } from '../types';
import { UEBlueprintViewer } from './UEBlueprintViewer';
import { blueprintExamples } from '../data/blueprintExamples';
import './Content.css';

interface ContentProps {
  section: DocSection;
}

export function Content({ section }: ContentProps) {
  const formatContent = (text: string) => {
    return text.split('\n\n').map((paragraph, idx) => (
      <p key={idx} className="content-paragraph">
        {paragraph.split('\n').map((line, lineIdx) => (
          <span key={lineIdx}>
            {formatLine(line)}
            {lineIdx < paragraph.split('\n').length - 1 && <br />}
          </span>
        ))}
      </p>
    ));
  };

  const formatLine = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    // Pattern to match **text**, `code`, or plain text
    const pattern = /\*\*(.*?)\*\*|`(.*?)`/g;
    let match;

    while ((match = pattern.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      // Add the formatted element
      if (match[1] !== undefined) {
        // Bold text
        parts.push(<strong key={parts.length}>{match[1]}</strong>);
      } else if (match[2] !== undefined) {
        // Code text
        parts.push(<code key={parts.length}>{match[2]}</code>);
      }

      lastIndex = pattern.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  const examples = blueprintExamples[section.id] || [];

  return (
    <main className="content">
      <article className="content-article">
        <h2 className="content-title">{section.title}</h2>
        <div className="content-body">
          {formatContent(section.content)}
          
          {examples.length > 0 && (
            <div className="blueprints-section">
              {examples.map((example, idx) => (
                <div key={idx} className="blueprint-example">
                  <h3 className="blueprint-example-title">{example.title}</h3>
                  <UEBlueprintViewer blueprintCode={example.code} />
                </div>
              ))}
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
