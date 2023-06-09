import { marked } from 'marked';
import { useEffect, useState } from 'react';

const MainContent = ({ data }) => {
  const [renderedContent, setRenderedContent] = useState('');
  useEffect(() => {
    setRenderedContent(marked(data.content));
  }, []);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: renderedContent }} />
    </>
  );
};

export default MainContent;
