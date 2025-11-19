import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

type HeadingLevel = 2 | 3 | 4;

interface CollapsibleSectionProps {
  sectionId?: string;
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
  headingLevel?: HeadingLevel;
}

const sanitizeSegment = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const CollapsibleSection = ({
  sectionId,
  title,
  children,
  defaultExpanded = false,
  headingLevel = 2,
}: CollapsibleSectionProps) => {
  const reactId = useId();
  const fallbackBaseId = useMemo(() => {
    const normalizedTitle = sanitizeSegment(title) || 'section';
    const normalizedReactId = sanitizeSegment(reactId);
    return `${normalizedTitle}-${normalizedReactId}`;
  }, [reactId, title]);

  const baseId = sectionId ?? fallbackBaseId;
  const contentId = `${baseId}-content`;

  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = contentRef.current;
    if (!node) {
      return;
    }

    if (isExpanded) {
      setMaxHeight(`${node.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isExpanded, children]);

  useEffect(() => {
    if (!isExpanded || typeof ResizeObserver === 'undefined') {
      return;
    }

    const node = contentRef.current;
    if (!node) {
      return;
    }

    const observer = new ResizeObserver(() => {
      setMaxHeight(`${node.scrollHeight}px`);
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [isExpanded]);

  const headingTagMap: Record<HeadingLevel, 'h2' | 'h3' | 'h4'> = {
    2: 'h2',
    3: 'h3',
    4: 'h4',
  };
  const HeadingTag = headingTagMap[headingLevel] ?? 'h2';

  return (
    <section id={baseId}>
      <div className="section-header">
        <HeadingTag>{title}</HeadingTag>
        <button
          type="button"
          className="collapsible-toggle"
          aria-expanded={isExpanded}
          aria-controls={contentId}
          aria-label={`Toggle ${title} section`}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <span aria-hidden="true" className="toggle-icon">
            {isExpanded ? '▲' : '▼'}
          </span>
        </button>
      </div>
      <div
        id={contentId}
        ref={contentRef}
        className={`collapsible-content${isExpanded ? ' expanded' : ''}`}
        style={{ maxHeight }}
      >
        {children}
      </div>
    </section>
  );
};

export default CollapsibleSection;
