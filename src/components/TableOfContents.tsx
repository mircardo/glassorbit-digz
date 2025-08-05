interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="glass rounded-xl p-6 sticky top-24">
      <h3 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider">
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block text-sm transition-colors hover:text-primary ${
                  item.level === 1 ? 'font-medium' : 'text-muted-foreground ml-4'
                }`}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}